import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useChat } from "./useChat";

vi.mock("../config/chat", () => ({ useRealApi: false }));

describe("useChat (mock mode)", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("initial state: welcome message when initialMessage provided", () => {
    const welcome = "Hello! How can I help?";
    const { result } = renderHook(() => useChat({ initialMessage: welcome }));

    expect(result.current.messages).toHaveLength(1);
    expect(result.current.messages[0]).toMatchObject({
      id: "welcome",
      role: "assistant",
      content: welcome,
    });
  });

  it("initial state: empty messages when no initialMessage", () => {
    const { result } = renderHook(() => useChat());

    expect(result.current.messages).toHaveLength(0);
  });

  it("sendMessage adds user message to list", async () => {
    const { result } = renderHook(() => useChat({ initialMessage: "Hi" }));

    await act(async () => {
      const p = result.current.sendMessage("Hello");
      await vi.advanceTimersByTimeAsync(1000);
      await p;
    });

    const userMsgs = result.current.messages.filter((m) => m.role === "user");
    expect(userMsgs).toHaveLength(1);
    expect(userMsgs[0].content).toBe("Hello");
  });

  it("sendMessage with reset: true resets to welcome + user message", async () => {
    const welcome = "Welcome";
    const { result } = renderHook(() => useChat({ initialMessage: welcome }));

    await act(async () => {
      const p = result.current.sendMessage("First");
      await vi.advanceTimersByTimeAsync(1000);
      await p;
    });

    await act(async () => {
      const p = result.current.sendMessage("Reset msg", true);
      await vi.advanceTimersByTimeAsync(1000);
      await p;
    });

    const msgs = result.current.messages;
    expect(msgs[0]).toMatchObject({ id: "welcome", role: "assistant", content: welcome });
    expect(msgs[1]).toMatchObject({ role: "user", content: "Reset msg" });
  });

  it("sendMessage sets isLoading true during mock delay", async () => {
    const { result } = renderHook(() => useChat());

    let sendPromise: Promise<void>;
    act(() => {
      sendPromise = result.current.sendMessage("Test");
    });
    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1000);
      await sendPromise!;
    });
    expect(result.current.isLoading).toBe(false);
  });

  it("mock mode: adds assistant message from mockResponses pool after delay", async () => {
    const pool = ["Response A", "Response B"];
    const { result } = renderHook(() =>
      useChat({ initialMessage: "Hi", mockResponses: pool })
    );

    await act(async () => {
      const p = result.current.sendMessage("Hello");
      await vi.advanceTimersByTimeAsync(1000);
      await p;
    });

    const assistantMsgs = result.current.messages.filter((m) => m.role === "assistant");
    expect(assistantMsgs.length).toBe(2);
    const lastAssistant = assistantMsgs[1];
    expect(pool).toContain(lastAssistant.content);
  });

  it("sendMessage with empty/whitespace content does nothing", async () => {
    const { result } = renderHook(() => useChat({ initialMessage: "Hi" }));

    await act(async () => {
      result.current.sendMessage("");
    });
    expect(result.current.messages).toHaveLength(1);

    await act(async () => {
      result.current.sendMessage("   ");
    });
    expect(result.current.messages).toHaveLength(1);
  });

  it("welcome message updates when initialMessage changes (language switch)", () => {
    const { result, rerender } = renderHook(
      ({ msg }) => useChat({ initialMessage: msg }),
      { initialProps: { msg: "Hello" } }
    );

    expect(result.current.messages[0].content).toBe("Hello");

    rerender({ msg: "Xin chào" });

    expect(result.current.messages[0].content).toBe("Xin chào");
  });
});
