import { Routes, Route } from "react-router";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LanguageProvider } from "./context/LanguageContext";
import { LandingPage } from "./pages/LandingPage";
import { DemoPage } from "./pages/DemoPage";

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[var(--brand-light)] selection:text-[var(--brand-dark)] overflow-x-hidden">
          {/* Global Background Gradients */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[var(--brand-light)]/50 to-transparent -z-10"></div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/demo" element={<DemoPage />} />
          </Routes>
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
