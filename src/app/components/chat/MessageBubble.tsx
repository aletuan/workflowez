import { useState, useEffect, useMemo } from "react";
import { FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { ChatMessage } from "../../../hooks/useChat";
import { parseSourceReferences } from "../../utils/parseSourceReferences";

const TYPING_INTERVAL_MS = 28;

/** Styled markdown components for assistant messages */
const markdownComponents = {
  p: ({ children }) => <p className="text-sm leading-relaxed mb-2 last:mb-0">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-outside pl-5 mb-2 space-y-1 text-sm">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-outside pl-5 mb-2 space-y-1 text-sm">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed pl-1 [&>p]:mb-1 [&>p:last-child]:mb-0">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-[var(--brand)] hover:text-[var(--brand-dark)]">
      {children}
    </a>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code className="bg-gray-200/80 rounded px-1.5 py-0.5 text-xs font-mono">{children}</code>
    ) : (
      <pre className="bg-gray-200/80 rounded px-2 py-1 my-1 overflow-x-auto text-xs">
        <code>{children}</code>
      </pre>
    ),
  h1: ({ children }) => <h1 className="text-base font-semibold mt-2 mb-1 first:mt-0">{children}</h1>,
  h2: ({ children }) => <h2 className="text-sm font-semibold mt-2 mb-1 first:mt-0">{children}</h2>,
  h3: ({ children }) => <h3 className="text-sm font-semibold mt-1 mb-0.5">{children}</h3>,
};

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

  const rawDisplayContent = shouldType
    ? message.content.slice(0, visibleLength)
    : message.content;

  const { mainContent, sources } = useMemo(() => {
    if (isUser) return { mainContent: rawDisplayContent, sources: [] as string[] };
    return parseSourceReferences(rawDisplayContent);
  }, [rawDisplayContent, isUser]);

  const displayContent = mainContent;
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
            : "bg-[var(--brand-light)]/60 text-gray-900"
        }`}
      >
        {isUser ? (
          <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">
            {displayContent}
            {isTyping && (
              <span
                className="inline-block w-0.5 h-4 ml-0.5 bg-gray-500 align-middle animate-pulse"
                aria-hidden
              />
            )}
          </p>
        ) : isTyping ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {displayContent}
            <span
              className="inline-block w-0.5 h-4 ml-0.5 bg-gray-500 align-middle animate-pulse"
              aria-hidden
            />
          </p>
        ) : (
          <div>
            <div className="text-sm leading-relaxed [&_a]:text-[var(--brand)] [&_a:hover]:text-[var(--brand-dark)]">
              <ReactMarkdown components={markdownComponents}>
                {displayContent}
              </ReactMarkdown>
            </div>
            {sources.length > 0 && (
              <div className="mt-3 pt-3 border-t border-[var(--brand)]/20 flex flex-wrap gap-2">
                {sources.map((source, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--brand)]/20 text-[var(--brand-dark)] text-xs font-medium"
                    title={source}
                  >
                    <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate max-w-[180px]">{source}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
