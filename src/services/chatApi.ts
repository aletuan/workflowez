/** Default n8n Chat webhook URL — used when VITE_N8N_CHAT_URL is not set */
const DEFAULT_N8N_CHAT_URL =
  "https://andyle1.app.n8n.cloud/webhook/ebf42615-c947-46a1-bf5b-a720e6af3a13/chat";

const REQUEST_TIMEOUT_MS = 30_000;

export interface ChatApiResponse {
  output: string;
}

export interface ChatApiError {
  message: string;
  cause?: "network" | "timeout" | "parse" | "unknown";
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
  const url = import.meta.env.VITE_N8N_CHAT_URL ?? DEFAULT_N8N_CHAT_URL;

  const body: Record<string, unknown> = { message };
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

    const data = await response.json();

    if (typeof data?.output !== "string") {
      throw {
        message: "Invalid response: missing or invalid 'output' field",
        cause: "parse" as const,
      } satisfies ChatApiError;
    }

    return { output: data.output };
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
