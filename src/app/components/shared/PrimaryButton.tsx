import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  icon?: ReactNode;
  /** "default" = dark bg (light sections), "light" = white bg (dark sections), "brand" = brand color (dark card) */
  variant?: "default" | "light" | "brand";
  className?: string;
  /** When set, renders as <a> for navigation */
  href?: string;
}

const variants = {
  default:
    "bg-gray-900 text-white hover:bg-[var(--brand-dark)] shadow-[var(--brand)]/20",
  light:
    "bg-white text-gray-900 hover:bg-[var(--brand-light)] shadow-white/10",
  brand:
    "bg-[var(--brand)] text-white hover:brightness-110 shadow-[var(--brand)]/30",
};

const baseClasses = (variant: "default" | "light" | "brand") =>
  `px-8 py-4 font-bold rounded-2xl shadow-xl flex items-center justify-center gap-2 group inline-flex ${variants[variant]}`;

export function PrimaryButton({
  children,
  icon,
  variant = "default",
  className = "",
  href,
  ...props
}: PrimaryButtonProps) {
  const classes = `${baseClasses(variant)} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <span>{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}
