import React from "react";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { ImageWithFallback } from "../shared/ImageWithFallback";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import type { ChatMessage } from "../../../hooks/useChat";
import { useLanguage } from "../../context/LanguageContext";

const AVATAR_URL =
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4,c0aede,d1d4f9";

interface ChatBoxProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onSend: (message: string) => void;
  quickPrompts?: string[];
}

export function ChatBox({ messages, isLoading, onSend, quickPrompts }: ChatBoxProps) {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col h-[min(480px,75dvh)] min-h-[280px] md:h-[480px] bg-white rounded-[var(--section-radius)] border border-gray-100 shadow-xl overflow-hidden">
      {/* S8: simplified header — avatar + name only, no redundant card wrapper */}
      <div className="px-4 py-3 border-b border-gray-100 bg-[var(--brand-light)]/30 flex items-center gap-3">
        <div className="relative flex-shrink-0">
          <div
            className={`w-9 h-9 rounded-full overflow-hidden bg-[var(--brand-light)] ring-2 ring-white shadow-sm ${
              isLoading && !reducedMotion ? "animate-pulse" : ""
            }`}
          >
            <ImageWithFallback src={AVATAR_URL} alt="Alex" className="w-full h-full object-cover" />
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-gray-900 text-sm">{t.demo.chatTitle}</h3>
          <p className="text-xs text-gray-500">{t.demo.chatSubtitle}</p>
        </div>
      </div>
      <MessageList
        messages={messages}
        isLoading={isLoading}
        emptyText={t.demo.chatEmpty}
        typingIndicatorLabel={t.demo.chatTypingIndicator}
        quickPrompts={quickPrompts}
        onPromptClick={onSend}
      />
      <ChatInput
        onSend={onSend}
        disabled={isLoading}
        placeholder={t.demo.chatPlaceholder}
      />
    </div>
  );
}
