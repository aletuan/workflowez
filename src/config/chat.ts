const DEFAULT_N8N_CHAT_URL =
  "https://andyle1.app.n8n.cloud/webhook/workflowez-rag-chat/chat";

/** n8n Chat webhook URL — from env or default. Empty string when unset in env. */
export const N8N_CHAT_URL: string =
  (import.meta.env.VITE_N8N_CHAT_URL as string | undefined)?.trim() || "";

/** Resolved URL for API calls — falls back to default when env not set */
export const CHAT_API_URL = N8N_CHAT_URL || DEFAULT_N8N_CHAT_URL;

/** Whether to use real n8n API (vs mock). True when a chat URL is available (env or default). */
export const useRealApi = !!CHAT_API_URL;
