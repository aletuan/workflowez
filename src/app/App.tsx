import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LanguageProvider } from "./context/LanguageContext";
import { useVisualViewportHeight } from "../hooks/useVisualViewport";

const LandingPage = lazy(() => import("./pages/LandingPage").then((m) => ({ default: m.LandingPage })));
const ProductCatalogPage = lazy(() => import("./pages/ProductCatalogPage").then((m) => ({ default: m.ProductCatalogPage })));
const DemoPage = lazy(() => import("./pages/DemoPage").then((m) => ({ default: m.DemoPage })));
const SocialAgentPage = lazy(() => import("./pages/SocialAgentPage").then((m) => ({ default: m.SocialAgentPage })));
const BlogPage = lazy(() => import("./pages/BlogPage").then((m) => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage").then((m) => ({ default: m.BlogPostPage })));

function PageFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-gray-500 text-sm">Loading…</div>
    </div>
  );
}

function VisualViewportSync() {
  useVisualViewportHeight();
  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[var(--brand-light)] selection:text-[var(--brand-dark)]">
          <VisualViewportSync />
          {/* Global Background Gradients */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[var(--brand-light)]/50 to-transparent -z-10"></div>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductCatalogPage />} />
              <Route path="/products/advisor" element={<DemoPage />} />
              <Route path="/products/social" element={<SocialAgentPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/demo" element={<Navigate to="/products/advisor" replace />} />
            </Routes>
          </Suspense>
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
