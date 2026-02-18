import { CHAT_API_URL } from "../config/chat";

const REQUEST_TIMEOUT_MS = 30_000;

export interface ChatApiResponse {
  output: string;
}

export interface ChatApiError {
  message: string;
  cause?: "network" | "timeout" | "parse" | "unknown";
}

/** Extract reply text from various n8n/LangChain/OpenAI response shapes */
function extractOutput(data: unknown): string | undefined {
  if (!data) return undefined;

  // n8n streaming format: [{ type: "begin" }, { type: "item", content: "..." }, { type: "end" }]
  if (Array.isArray(data)) {
    const item = data.find((x) => x && typeof x === "object" && (x as Record<string, unknown>).type === "item");
    if (item && typeof item === "object" && "content" in item) {
      const content = (item as Record<string, unknown>).content;
      if (typeof content === "string") return parseContentString(content);
    }
    if (data[0]) return extractOutput(data[0]);
  }

  if (typeof data !== "object") return undefined;
  const obj = data as Record<string, unknown>;

  if (typeof obj.output === "string") return obj.output;
  if (typeof obj.answer === "string") return obj.answer;
  if (typeof obj.text === "string") return obj.text;
  if (typeof obj.result === "string") return obj.result;
  // n8n Chat message: { content: "...", role: "assistant", ... }
  if (typeof obj.content === "string") return obj.content;

  // OpenAI format: { choices: [{ message: { content: "..." } }] }
  const choices = obj.choices;
  if (Array.isArray(choices) && choices[0]) {
    const msg = (choices[0] as Record<string, unknown>).message;
    if (msg && typeof msg === "object" && typeof (msg as Record<string, unknown>).content === "string") {
      return (msg as Record<string, unknown>).content as string;
    }
  }

  // Nested: { data: { output: "..." } } or { json: { output: "..." } }
  const nested = obj.data ?? obj.json;
  if (nested && typeof nested === "object") return extractOutput(nested);

  return undefined;
}

/** Parse content string — may be plain text or JSON like {"answer":"..."} */
function parseContentString(content: string): string | undefined {
  const trimmed = content.trim();
  if (!trimmed) return undefined;
  if ((trimmed.startsWith("{") && trimmed.endsWith("}")) || (trimmed.startsWith("[") && trimmed.endsWith("]"))) {
    try {
      const parsed = JSON.parse(trimmed);
      return extractOutput(parsed);
    } catch {
      const answerMatch = trimmed.match(/"answer"\s*:\s*"((?:[^"\\]|\\.)*)"/);
      if (answerMatch) return answerMatch[1].replace(/\\"/g, '"');
    }
  }
  return trimmed;
}

/**
 * Send a message to the n8n Chat webhook and return the assistant reply.
 * @param message - User message text
 * @param sessionId - Optional session ID for conversation continuity
 * @returns Assistant reply `{ output: string }` or throws ChatApiError
 */
export async function sendMessage(
  message: string,
  sessionId?: string
): Promise<ChatApiResponse> {
  const url = CHAT_API_URL;

  // n8n Chat Trigger expects `chatInput` (not `message`) as the user message field
  const body: Record<string, unknown> = { chatInput: message };
  if (sessionId) body.sessionId = sessionId;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw {
        message: `Chat API error: ${response.status} ${response.statusText}`,
        cause: "unknown" as const,
      } satisfies ChatApiError;
    }

    const text = await response.text();
    let data: unknown;

    try {
      data = JSON.parse(text);
    } catch {
      // Response is NDJSON — parse every non-empty line and treat as array
      const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
      const items = lines.map(line => {
        try { return JSON.parse(line); } catch { return null; }
      }).filter(Boolean);
      if (items.length > 0) {
        data = items;
      } else {
        throw {
          message: "Invalid response format",
          cause: "parse" as const,
        } satisfies ChatApiError;
      }
    }

    // n8n error format: { type: "error", content: string }
    if (data && typeof data === "object" && "type" in data && (data as { type: string }).type === "error") {
      const content = (data as { content?: string }).content;
      throw {
        message: typeof content === "string" ? content : "Workflow error",
        cause: "unknown" as const,
      } satisfies ChatApiError;
    }

    const output = extractOutput(data);
    if (typeof output !== "string") {
      const content = data && typeof data === "object" && "content" in data ? (data as { content?: string }).content : undefined;
      throw {
        message: typeof content === "string" ? content : "Invalid response: missing or invalid 'output' field",
        cause: "parse" as const,
      } satisfies ChatApiError;
    }

    return { output };
  } catch (err) {
    clearTimeout(timeoutId);

    if (err instanceof Error) {
      if (err.name === "AbortError") {
        throw { message: "Request timed out. Please try again.", cause: "timeout" as const } satisfies ChatApiError;
      }
      throw {
        message: err.message || "Network error. Please check your connection.",
        cause: "network" as const,
      } satisfies ChatApiError;
    }

    if (typeof err === "object" && err !== null && "message" in err) {
      throw err as ChatApiError;
    }

    throw {
      message: "An unexpected error occurred. Please try again.",
      cause: "unknown" as const,
    } satisfies ChatApiError;
  }
}
