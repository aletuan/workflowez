import React, { useEffect, useRef } from "react";
import type { ChatMessage } from "../../../hooks/useChat";
import { MessageBubble } from "./MessageBubble";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

interface MessageListProps {
  messages: ChatMessage[];
  isLoading?: boolean;
  emptyText?: string;
  typingIndicatorLabel?: string;
  quickPrompts?: string[];
  onPromptClick?: (prompt: string) => void;
}

export function MessageList({ messages, isLoading, emptyText = "Start the conversation — ask about training, policies, or product features.", typingIndicatorLabel = "Waiting for response", quickPrompts, onPromptClick }: MessageListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const showPrompts = quickPrompts && onPromptClick && messages.length <= 1 && !isLoading;

  return (
    <div ref={listRef} className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-4">
      {messages.length === 0 && !isLoading && (
        <div className="flex items-center justify-center h-full text-gray-400 text-sm font-medium">
          {emptyText}
        </div>
      )}
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg}
          typingEffect={msg.id === "welcome" && msg.role === "assistant"}
          reducedMotion={reducedMotion}
        />
      ))}
      {showPrompts && (
        <div className="flex flex-wrap gap-2 pt-1">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => onPromptClick(prompt)}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--brand)]/30 bg-[var(--brand-light)]/40 text-[var(--brand)] hover:bg-[var(--brand-light)] hover:border-[var(--brand)]/60 cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}
      {isLoading && (
        <div className="flex justify-start" role="status" aria-label={typingIndicatorLabel}>
          <div className="bg-gray-100 rounded-2xl px-4 py-3">
            <div className="flex gap-1.5 items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full bg-gray-500 ${
                    reducedMotion ? "" : "animate-bounce"
                  }`}
                  style={reducedMotion ? undefined : { animationDelay: `${i * 160}ms` }}
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
