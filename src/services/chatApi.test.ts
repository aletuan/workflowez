import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { extractOutput, sendMessage } from "./chatApi";

vi.mock("../config/chat", () => ({ CHAT_API_URL: "https://test.example.com/chat" }));

describe("chatApi extractOutput", () => {
  it("4.6.1: extracts output from n8n response shape", () => {
    expect(extractOutput({ output: "Hello" })).toBe("Hello");
    expect(extractOutput({ answer: "Hi" })).toBe("Hi");
    expect(extractOutput({ content: "Hey" })).toBe("Hey");
    expect(extractOutput({ text: "Yo" })).toBe("Yo");
    expect(extractOutput({ result: "Done" })).toBe("Done");
  });

  it("4.6.2: extracts from nested data.output and json.output", () => {
    expect(extractOutput({ data: { output: "From data" } })).toBe("From data");
    expect(extractOutput({ json: { output: "From json" } })).toBe("From json");
  });

  it("4.6.3: parses NDJSON streaming format (array with type:item)", () => {
    const ndjsonShape = [
      { type: "begin" },
      { type: "item", content: "Reply text" },
      { type: "end" },
    ];
    expect(extractOutput(ndjsonShape)).toBe("Reply text");
  });
});

describe("chatApi sendMessage", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("parses NDJSON streaming response", async () => {
    const ndjsonBody = '{"type":"begin"}\n{"type":"item","content":"Streamed reply"}\n{"type":"end"}';
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(ndjsonBody),
    } as Response);

    const result = await sendMessage("Hi");
    expect(result.output).toBe("Streamed reply");
  });

  it("4.8.2: throws on 4xx response", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      status: 404,
      statusText: "Not Found",
    } as Response);

    await expect(sendMessage("Hi")).rejects.toMatchObject({
      message: "Chat API error: 404 Not Found",
      cause: "unknown",
    });
  });

  it("4.8.2: throws on 5xx response", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    } as Response);

    await expect(sendMessage("Hi")).rejects.toMatchObject({
      message: "Chat API error: 500 Internal Server Error",
      cause: "unknown",
    });
  });

  it("4.8.2: throws on parse error (invalid JSON)", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("not valid json {{{"),
    } as Response);

    await expect(sendMessage("Hi")).rejects.toMatchObject({
      message: "Invalid response format",
      cause: "parse",
    });
  });

  it("4.8.2: throws on n8n error format { type: 'error' }", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('{"type":"error","content":"Workflow failed"}'),
    } as Response);

    await expect(sendMessage("Hi")).rejects.toMatchObject({
      message: "Workflow failed",
      cause: "unknown",
    });
  });

  it("4.8.2: throws on invalid output (missing output field)", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('{"foo":"bar"}'),
    } as Response);

    await expect(sendMessage("Hi")).rejects.toMatchObject({
      message: "Invalid response: missing or invalid 'output' field",
      cause: "parse",
    });
  });

  it("4.8.2: throws on timeout (AbortError)", async () => {
    const abortErr = new Error("aborted");
    abortErr.name = "AbortError";
    vi.mocked(fetch).mockRejectedValue(abortErr);

    await expect(sendMessage("Hi")).rejects.toMatchObject({
      message: "Request timed out. Please try again.",
      cause: "timeout",
    });
  });

  it("4.8.2: throws on network error", async () => {
    vi.mocked(fetch).mockRejectedValue(new Error("fetch failed"));

    await expect(sendMessage("Hi")).rejects.toMatchObject({
      message: "fetch failed",
      cause: "network",
    });
  });
});
