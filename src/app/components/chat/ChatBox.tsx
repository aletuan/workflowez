import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { AdvisorAvatar } from "./AdvisorAvatar";
import { useChat } from "../../../hooks/useChat";
import { useLanguage } from "../../context/LanguageContext";

export function ChatBox() {
  const { t } = useLanguage();
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-[480px] bg-white rounded-[var(--section-radius)] border border-gray-100 shadow-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 bg-[var(--brand-light)]/30 flex items-center gap-4">
        <AdvisorAvatar />
        <div className="min-w-0">
          <h3 className="font-bold text-gray-900 text-sm">{t.demo.chatTitle}</h3>
          <p className="text-xs text-gray-500 truncate">{t.demo.chatSubtitle}</p>
        </div>
      </div>
      <MessageList
        messages={messages}
        isLoading={isLoading}
        emptyText={t.demo.chatEmpty}
      />
      <ChatInput
        onSend={sendMessage}
        disabled={isLoading}
        placeholder={t.demo.chatPlaceholder}
      />
    </div>
  );
}
