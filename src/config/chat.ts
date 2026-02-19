/**
 * n8n Chat webhook URL — from env only (GitHub Secrets in CI, .env locally).
 * No hardcoded fallback; empty when unset → mock mode.
 */
export const N8N_CHAT_URL: string =
  (import.meta.env.VITE_N8N_CHAT_URL as string | undefined)?.trim() || "";

/** Resolved URL for API calls. Empty when env not set → mock mode. */
export const CHAT_API_URL = N8N_CHAT_URL;

/** Whether to use real n8n API (vs mock). True when VITE_N8N_CHAT_URL is set at build time. */
export const useRealApi = !!CHAT_API_URL;
