import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSend,
  disabled = false,
  placeholder = "Type your message...",
}: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim() || disabled) return;
    onSend(value.trim());
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 p-4 border-t border-gray-100 bg-white"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none text-gray-900 placeholder:text-gray-400 disabled:opacity-50"
        aria-label="Chat message"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="px-5 py-3 bg-[var(--brand)] text-white font-semibold rounded-xl hover:bg-[var(--brand-dark)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        aria-label="Send message"
      >
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
