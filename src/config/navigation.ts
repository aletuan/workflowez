export interface NavItem {
  id: string;
  labelKey: "features" | "benefits" | "testimonials" | "pricing";
}

/** Single source for nav items — used by Header (desktop + mobile) */
export const NAV_ITEMS: NavItem[] = [
  { id: "/#features", labelKey: "features" },
  { id: "/#benefits", labelKey: "benefits" },
  { id: "/#testimonials", labelKey: "testimonials" },
  { id: "/#pricing", labelKey: "pricing" },
];
