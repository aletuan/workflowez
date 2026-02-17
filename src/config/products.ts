export interface Product {
  slug: string;
  route: string;
  titleKey: string;
  descKey: string;
  icon: "message-circle" | "trending-up";
}

/** Product catalog — single source for product list */
export const PRODUCTS: Product[] = [
  {
    slug: "advisor",
    route: "/products/advisor",
    titleKey: "advisor",
    descKey: "advisorDesc",
    icon: "message-circle",
  },
  {
    slug: "social",
    route: "/products/social",
    titleKey: "social",
    descKey: "socialDesc",
    icon: "trending-up",
  },
];
