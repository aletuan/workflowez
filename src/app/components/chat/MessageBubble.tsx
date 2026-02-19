import { useState, useEffect } from "react";
import type { ChatMessage } from "../../../hooks/useChat";

const TYPING_INTERVAL_MS = 28;

interface MessageBubbleProps {
  message: ChatMessage;
  /** When true, first assistant message reveals with typing effect (respects reduced motion) */
  typingEffect?: boolean;
  reducedMotion?: boolean;
}

export function MessageBubble({ message, typingEffect = false, reducedMotion = false }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const shouldType = typingEffect && !reducedMotion && !isUser;

  const [visibleLength, setVisibleLength] = useState(() =>
    shouldType ? 0 : message.content.length
  );

  useEffect(() => {
    if (!shouldType) {
      setVisibleLength(message.content.length);
      return;
    }
    setVisibleLength(0);
    const id = setInterval(() => {
      setVisibleLength((prev) => {
        if (prev >= message.content.length) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, TYPING_INTERVAL_MS);
    return () => clearInterval(id);
  }, [message.content, shouldType]);

  const displayContent = shouldType
    ? message.content.slice(0, visibleLength)
    : message.content;

  const isTyping = shouldType && visibleLength < message.content.length;

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
      data-role={message.role}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-[var(--brand)] text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">
          {displayContent}
          {isTyping && (
            <span
              className="inline-block w-0.5 h-4 ml-0.5 bg-gray-500 align-middle animate-pulse"
              aria-hidden
            />
          )}
        </p>
      </div>
    </div>
  );
}
