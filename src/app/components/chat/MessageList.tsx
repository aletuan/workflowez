import { useEffect, useRef } from "react";
import type { ChatMessage } from "../../../hooks/useChat";
import { MessageBubble } from "./MessageBubble";

interface MessageListProps {
  messages: ChatMessage[];
  isLoading?: boolean;
  emptyText?: string;
  quickPrompts?: string[];
  onPromptClick?: (prompt: string) => void;
}

export function MessageList({ messages, isLoading, emptyText = "Start the conversation — ask about training, policies, or product features.", quickPrompts, onPromptClick }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const showPrompts = quickPrompts && onPromptClick && messages.length <= 1 && !isLoading;

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
      {messages.length === 0 && !isLoading && (
        <div className="flex items-center justify-center h-full text-gray-400 text-sm font-medium">
          {emptyText}
        </div>
      )}
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      {showPrompts && (
        <div className="flex flex-wrap gap-2 pt-1">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => onPromptClick(prompt)}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--brand)]/30 bg-[var(--brand-light)]/40 text-[var(--brand)] hover:bg-[var(--brand-light)] hover:border-[var(--brand)]/60 transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-gray-100 rounded-2xl px-4 py-3">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
            </div>
          </div>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
