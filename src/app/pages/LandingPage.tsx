import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { Benefits } from "../components/landing/Benefits";
import { Testimonials } from "../components/landing/Testimonials";
import { Pricing } from "../components/landing/Pricing";
import { CTA } from "../components/landing/CTA";

export function LandingPage() {
  return (
    <>
      <Header />
      <main className="md:pt-16 overflow-x-hidden">
        <Hero />
        <Testimonials />
        <Features />
        <Benefits />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
