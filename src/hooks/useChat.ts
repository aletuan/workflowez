import { useState, useCallback, useEffect } from "react";
import { useRealApi } from "../config/chat";
import { sendMessage as apiSendMessage, type ChatApiError } from "../services/chatApi";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: Date;
}

/** Simulates API delay (ms) when using mock */
const MOCK_DELAY = 800;

export interface UseChatOptions {
  initialMessage?: string;
  mockResponses?: string[];
  errorFallback?: string;
}

export function useChat(
  initialMessage?: string,
  mockResponses?: string[],
  errorFallback?: string
): { messages: ChatMessage[]; isLoading: boolean; sendMessage: (content: string, reset?: boolean) => Promise<void> };
export function useChat(options: UseChatOptions): { messages: ChatMessage[]; isLoading: boolean; sendMessage: (content: string, reset?: boolean) => Promise<void> };
export function useChat(
  initialMessageOrOptions?: string | UseChatOptions,
  mockResponses?: string[],
  errorFallback?: string
) {
  const { initialMessage, mockResponses: mockPool, errorFallback: fallback } =
    typeof initialMessageOrOptions === "object"
      ? {
          initialMessage: initialMessageOrOptions.initialMessage,
          mockResponses: initialMessageOrOptions.mockResponses,
          errorFallback: initialMessageOrOptions.errorFallback,
        }
      : {
          initialMessage: initialMessageOrOptions,
          mockResponses: mockResponses,
          errorFallback: errorFallback,
        };

  const welcomeMessage: ChatMessage | undefined = initialMessage
    ? { id: "welcome", role: "assistant", content: initialMessage, createdAt: new Date() }
    : undefined;

  const [messages, setMessages] = useState<ChatMessage[]>(
    welcomeMessage ? [welcomeMessage] : []
  );
  const [isLoading, setIsLoading] = useState(false);

  // Update welcome message in-place when language changes
  useEffect(() => {
    if (!initialMessage) return;
    setMessages((prev) => {
      if (prev.length === 0 || prev[0].id !== "welcome") return prev;
      return [{ ...prev[0], content: initialMessage }, ...prev.slice(1)];
    });
  }, [initialMessage]);

  const defaultErrorFallback = "Sorry, something went wrong. Please try again.";

  const sendMessage = useCallback(
    async (content: string, reset = false) => {
      if (!content.trim()) return;

      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: content.trim(),
        createdAt: new Date(),
      };

      const welcome = initialMessage
        ? { id: "welcome", role: "assistant" as const, content: initialMessage, createdAt: new Date() }
        : undefined;

      setMessages(
        reset && welcome
          ? [welcome, userMessage]
          : (prev) => [...prev, userMessage]
      );
      setIsLoading(true);

      if (useRealApi) {
        try {
          const { output } = await apiSendMessage(content.trim());
          const assistantMessage: ChatMessage = {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: output,
            createdAt: new Date(),
          };
          setMessages((prev) => [...prev, assistantMessage]);
        } catch (err) {
          const msg =
            (err as ChatApiError).message ||
            fallback ||
            defaultErrorFallback;
          const errorMessage: ChatMessage = {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: msg,
            createdAt: new Date(),
          };
          setMessages((prev) => [...prev, errorMessage]);
        } finally {
          setIsLoading(false);
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));
        const pool = mockPool?.length ? mockPool : ["..."];
        const assistantMessage: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: pool[Math.floor(Math.random() * pool.length)],
          createdAt: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }
    },
    [initialMessage, mockPool, fallback]
  );

  return { messages, isLoading, sendMessage };
}
