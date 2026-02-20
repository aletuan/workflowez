import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Maximize2, Minimize2 } from "lucide-react";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { ImageWithFallback } from "../shared/ImageWithFallback";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { useIsMobile } from "../ui/use-mobile";
import type { ChatMessage } from "../../../hooks/useChat";
import { useLanguage } from "../../context/LanguageContext";

const AVATAR_URL =
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4,c0aede,d1d4f9";

interface ChatBoxProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onSend: (message: string) => void;
  quickPrompts?: string[];
  onExpandChange?: (expanded: boolean) => void;
}

export function ChatBox({ messages, isLoading, onSend, quickPrompts, onExpandChange }: ChatBoxProps) {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimatedIn, setIsAnimatedIn] = useState(false);

  useEffect(() => {
    onExpandChange?.(isExpanded);
  }, [isExpanded, onExpandChange]);

  // Lock body scroll on mobile when chat is fullscreen.
  // iOS Safari ignores overflow:hidden — must use position:fixed on body
  // to prevent the browser from scrolling the page when keyboard opens.
  useEffect(() => {
    if (!isExpanded || !isMobile) return;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isExpanded, isMobile]);

  useEffect(() => {
    if (!isExpanded) {
      setIsAnimatedIn(false);
      return;
    }
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsAnimatedIn(true));
    });
    return () => cancelAnimationFrame(id);
  }, [isExpanded]);

  const duration = reducedMotion ? 0 : 300;

  const chatContent = (
    <div
      className={`flex flex-col bg-white border border-gray-100 shadow-xl overflow-hidden ${
        isExpanded
          ? "h-full rounded-none"
          : "h-[min(480px,75dvh)] min-h-[280px] md:h-[480px] rounded-[var(--section-radius)]"
      }`}
    >
      {/* Header with expand/collapse toggle */}
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
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-gray-900 text-sm">{t.demo.chatTitle}</h3>
          <p className="text-xs text-gray-500">{t.demo.chatSubtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => setIsExpanded((v) => !v)}
          className="flex-shrink-0 p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label={isExpanded ? t.demo.chatCollapseAria : t.demo.chatExpandAria}
        >
          {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
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

  if (!isExpanded) {
    return chatContent;
  }

  // Mobile: fullscreen with solid white background (no bleed-through on iOS keyboard)
  if (isMobile) {
    const overlay = (
      <div
        className="fixed inset-0 z-50 bg-white flex flex-col"
        style={{
          height: "100%",
          ...(!reducedMotion
            ? {
                opacity: isAnimatedIn ? 1 : 0,
                transition: `opacity ${duration}ms ease-out`,
              }
            : undefined),
        }}
      >
        {chatContent}
      </div>
    );
    return createPortal(overlay, document.body);
  }

  // Desktop: sits below header (top-16 = 64px), no backdrop, no rounded corners
  const sidebar = (
    <div
      className="fixed top-0 bottom-0 right-0 w-full max-w-[420px] z-[60] shadow-2xl"
      style={
        !reducedMotion
          ? {
              transform: isAnimatedIn ? "translateX(0)" : "translateX(100%)",
              transition: `transform ${duration}ms ease-out`,
            }
          : undefined
      }
    >
      {chatContent}
    </div>
  );
  return createPortal(sidebar, document.body);
}
