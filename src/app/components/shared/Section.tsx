import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  contentClassName = "text-center max-w-2xl mx-auto",
}: SectionProps) {
  return (
    <section id={id} className={`py-10 md:py-16 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {(eyebrow || title || subtitle) && (
          <div className={`mb-8 md:mb-12 ${contentClassName}`}>
            {eyebrow && (
              <span className="text-[var(--brand)] font-bold tracking-wider text-sm uppercase mb-2 block">
                {eyebrow}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-500 leading-relaxed">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
