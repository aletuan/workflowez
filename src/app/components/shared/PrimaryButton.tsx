import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";

interface PrimaryButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  icon?: ReactNode;
  /** "default" = dark bg, "light" = white (dark sections), "brand" = purple, "cyan" = Social product */
  variant?: "default" | "light" | "brand" | "cyan";
  size?: "default" | "sm";
  className?: string;
  href?: string;
  /** React Router Link — client-side navigation */
  to?: string;
}

const variants = {
  default:
    "bg-gray-900 text-white hover:bg-[var(--brand-dark)] shadow-[var(--brand)]/20",
  light:
    "bg-white text-gray-900 hover:bg-[var(--brand-light)] shadow-white/10",
  brand:
    "bg-[var(--brand)] text-white hover:brightness-110 shadow-[var(--brand)]/30",
  cyan:
    "bg-cyan-600 text-white hover:bg-cyan-700 shadow-cyan-500/20",
};

const sizeClasses = {
  default: "px-8 py-4 text-base",
  sm: "px-5 py-2 text-sm",
};

const base = "font-bold rounded-2xl shadow-xl flex items-center justify-center gap-2 group inline-flex";

export function PrimaryButton({
  children,
  icon,
  variant = "default",
  size = "default",
  className = "",
  href,
  to,
  ...props
}: PrimaryButtonProps) {
  const classes = `${base} ${sizeClasses[size]} ${variants[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
        {icon && <span>{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
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
