import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";

interface SecondaryButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  icon?: ReactNode;
  /** "default" = light section, "outline" = transparent+border for dark sections */
  variant?: "default" | "outline";
  className?: string;
  /** When set, renders as <a> for navigation */
  href?: string;
  /** When set, renders as React Router Link (client-side navigation) */
  to?: string;
}

const variants = {
  default:
    "bg-white text-gray-900 border-2 border-gray-100 hover:border-[var(--brand)]/30 hover:bg-[var(--brand-light)]/30",
  outline:
    "bg-transparent text-white border-2 border-gray-700 hover:bg-gray-800 hover:border-gray-600",
};

const baseClasses = (variant: "default" | "outline") =>
  `px-8 py-4 font-bold rounded-2xl flex items-center justify-center gap-2 inline-flex ${variants[variant]}`;

export function SecondaryButton({
  children,
  icon,
  variant = "default",
  className = "",
  href,
  to,
  ...props
}: SecondaryButtonProps) {
  const classes = `${baseClasses(variant)} ${className}`.trim();
  const iconEl = icon && <span className={variant === "default" ? "text-[var(--brand)]" : ""}>{icon}</span>;

  if (to) {
    return <Link to={to} className={classes}>{iconEl}{children}</Link>;
  }
  if (href) {
    return <a href={href} className={classes}>{iconEl}{children}</a>;
  }

  return (
    <button className={classes} {...props}>
      {iconEl}
      {children}
    </button>
  );
}
