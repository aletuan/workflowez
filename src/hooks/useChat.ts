import { useState, useCallback } from "react";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: Date;
}

/** Simulates API delay (ms) */
const MOCK_DELAY = 800;

export function useChat(initialMessage?: string, mockResponses?: string[]) {
  const welcomeMessage: ChatMessage | undefined = initialMessage
    ? { id: "welcome", role: "assistant", content: initialMessage, createdAt: new Date() }
    : undefined;

  const [messages, setMessages] = useState<ChatMessage[]>(
    welcomeMessage ? [welcomeMessage] : []
  );
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string, reset = false) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: content.trim(),
      createdAt: new Date(),
    };

    // reset = true: clear to welcome message then add new user message
    setMessages(reset && welcomeMessage ? [welcomeMessage, userMessage] : (prev) => [...prev, userMessage]);
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

    const pool = mockResponses?.length ? mockResponses : ["..."];
    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      content: pool[Math.floor(Math.random() * pool.length)],
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  }, []);

  return { messages, isLoading, sendMessage };
}
