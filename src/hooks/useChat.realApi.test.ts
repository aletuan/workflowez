import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useChat } from "./useChat";
import * as chatApi from "../services/chatApi";

vi.mock("../config/chat", () => ({ useRealApi: true }));
vi.mock("../services/chatApi", async (importOriginal) => {
  const mod = await importOriginal<typeof chatApi>();
  return {
    ...mod,
    sendMessage: vi.fn(),
  };
});

const mockSendMessage = vi.mocked(chatApi.sendMessage);

describe("useChat (real API mode)", () => {
  beforeEach(() => {
    mockSendMessage.mockReset();
  });

  it("success: adds assistant message with API output", async () => {
    mockSendMessage.mockResolvedValue({ output: "Here is the API reply" });

    const { result } = renderHook(() => useChat({ initialMessage: "Hi" }));

    await act(async () => {
      await result.current.sendMessage("Hello");
    });

    const assistantMsgs = result.current.messages.filter((m) => m.role === "assistant");
    expect(assistantMsgs).toHaveLength(2);
    expect(assistantMsgs[1].content).toBe("Here is the API reply");
  });

  it("error: adds error fallback message", async () => {
    mockSendMessage.mockRejectedValue({ message: "Server error" });

    const { result } = renderHook(() => useChat({ initialMessage: "Hi" }));

    await act(async () => {
      await result.current.sendMessage("Hello");
    });

    const assistantMsgs = result.current.messages.filter((m) => m.role === "assistant");
    expect(assistantMsgs).toHaveLength(2);
    expect(assistantMsgs[1].content).toBe("Server error");
  });

  it("error: uses custom errorFallback when provided", async () => {
    mockSendMessage.mockRejectedValue({ cause: "network" });

    const { result } = renderHook(() =>
      useChat({ initialMessage: "Hi", errorFallback: "Custom fallback message" })
    );

    await act(async () => {
      await result.current.sendMessage("Hello");
    });

    const assistantMsgs = result.current.messages.filter((m) => m.role === "assistant");
    expect(assistantMsgs).toHaveLength(2);
    expect(assistantMsgs[1].content).toBe("Custom fallback message");
  });
});
