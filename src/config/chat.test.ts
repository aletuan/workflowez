import { describe, it, expect } from "vitest";
import { CHAT_API_URL, useRealApi } from "./chat";

describe("config/chat", () => {
  it("CHAT_API_URL is string", () => {
    expect(typeof CHAT_API_URL).toBe("string");
  });

  it("useRealApi is boolean", () => {
    expect(typeof useRealApi).toBe("boolean");
  });

  it("useRealApi is true when CHAT_API_URL non-empty, false when empty", () => {
    expect(useRealApi).toBe(!!CHAT_API_URL);
  });
});
