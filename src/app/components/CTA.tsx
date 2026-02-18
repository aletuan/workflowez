import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { PrimaryButton } from "./shared/PrimaryButton";
import { SecondaryButton } from "./shared/SecondaryButton";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="relative bg-gray-900 rounded-[var(--section-radius)] overflow-hidden px-8 py-12 md:px-20 md:py-16 text-center group">
          {/* Animated Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand)]/40 rounded-full blur-[var(--blur-lg)] -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--brand)]/50"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--accent-gradient-via)]/40 rounded-full blur-[var(--blur-md)] translate-y-1/3 -translate-x-1/3 group-hover:bg-[var(--accent-gradient-via)]/50"></div>
          </div>

          {/* 3D Grid Structure */}
          {/* Back wall — flat grid fading from center */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(color-mix(in srgb, var(--brand) 45%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--brand) 45%, transparent) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse 80% 55% at 50% 40%, rgba(0,0,0,0.85) 0%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 40%, rgba(0,0,0,0.85) 0%, transparent 100%)",
            }}
          />
          {/* Floor grid — perspective 3D, animated toward viewer */}
          <div className="absolute bottom-0 inset-x-0 overflow-hidden" style={{ height: "58%" }}>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "-50%",
                right: "-50%",
                top: 0,
                backgroundImage: `linear-gradient(color-mix(in srgb, var(--brand) 70%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--brand) 70%, transparent) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
                transform: "perspective(500px) rotateX(72deg)",
                transformOrigin: "bottom center",
                maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)",
              }}
            />
          </div>


          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[color-mix(in_srgb,var(--brand)_70%,white)] font-bold text-sm mb-8 border border-white/5">
              <Sparkles className="w-4 h-4" />
              <span>{t.cta.badge}</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              {t.cta.title}
            </h2>
            <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.cta.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <PrimaryButton variant="light" href="#pricing" icon={<ArrowRight className="w-5 h-5" />} className="text-lg">
                {t.cta.primary}
              </PrimaryButton>
              <SecondaryButton variant="outline" href="#features">
                {t.cta.secondary}
              </SecondaryButton>
            </div>
            <p className="mt-8 text-sm text-gray-500 font-medium">{t.cta.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
