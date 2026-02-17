import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Benefits } from "../components/Benefits";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "../components/Pricing";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

export function LandingPage() {
  return (
    <>
      <Header />
      <main className="md:pt-16 overflow-x-hidden">
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
