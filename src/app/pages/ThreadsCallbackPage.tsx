import { useSearchParams, Link } from "react-router";
import { CheckCircle2, XCircle, Copy } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { useState, useCallback } from "react";

export function ThreadsCallbackPage() {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  const handleCopy = useCallback(async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select text
    }
  }, [code]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white md:pt-16 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-lg mx-auto text-center">
            {error ? (
              <>
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.auth.threadsCallback.errorTitle}
                </h1>
                <p className="text-gray-600 mb-6">
                  {errorDescription || error}
                </p>
              </>
            ) : code ? (
              <>
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.auth.threadsCallback.successTitle}
                </h1>
                <p className="text-gray-600 mb-6">
                  {t.auth.threadsCallback.copyHint}
                </p>
                <div className="bg-gray-100 rounded-xl p-4 mb-4 text-left overflow-x-auto">
                  <p className="text-xs text-gray-500 mb-1">
                    {t.auth.threadsCallback.codeLabel}
                  </p>
                  <code className="text-sm text-gray-900 break-all font-mono">{code}</code>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand)] text-white font-semibold rounded-xl hover:brightness-110 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? t.auth.threadsCallback.copied : t.auth.threadsCallback.copy}
                </button>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.auth.threadsCallback.noCodeTitle}
                </h1>
                <p className="text-gray-600 mb-6">
                  {t.auth.threadsCallback.noCodeHint}
                </p>
              </>
            )}
            <Link
              to="/"
              className="inline-block mt-8 text-[var(--brand)] font-medium hover:underline"
            >
              {t.auth.threadsCallback.backHome}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
