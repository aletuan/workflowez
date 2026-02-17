import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-fuchsia-200 selection:text-fuchsia-900 overflow-x-hidden">
        {/* Global Background Gradients */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-violet-100/50 to-transparent -z-10"></div>
        
        <Header />
        <main className="pt-24">
          <Hero />
          <Features />
          <Benefits />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
