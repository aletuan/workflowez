import { useState, useCallback } from "react";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: Date;
}

const MOCK_RESPONSES: string[] = [
  "Based on our company knowledge base, new members should complete the onboarding checklist within their first week. The checklist includes: 1) IT setup, 2) Team introductions, 3) Role-specific training modules.",
  "Our remote work policy allows flexible hours with core collaboration windows from 10am-2pm. Employees need manager approval for full remote and must have a dedicated workspace.",
  "The latest release adds AI-powered workflow suggestions. You can enable them in Settings → Workflows → Enable suggestions. The system analyzes your patterns and recommends optimizations.",
  "For product feature questions, I recommend checking the release notes or scheduling a walkthrough with the product team. Is there a specific feature you'd like to learn more about?",
  "I'd be happy to help! Could you provide more context about what you're trying to accomplish? That will help me give you a more precise answer.",
];

function getMockReply(): string {
  return MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];
}

/** Simulates API delay (ms) */
const MOCK_DELAY = 800;

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: content.trim(),
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Mock: simulate API delay then add assistant reply
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      content: getMockReply(),
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  }, []);

  return { messages, isLoading, sendMessage };
}
