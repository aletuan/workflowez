export interface Product {
  slug: string;
  route: string;
  titleKey: string;
  descKey: string;
  featuresKey: string;
  icon: "message-circle" | "trending-up";
  color: "purple" | "cyan";
  available: boolean;
}

/** Product catalog — single source for product list */
export const PRODUCTS: Product[] = [
  {
    slug: "advisor",
    route: "/products/advisor",
    titleKey: "advisor",
    descKey: "advisorDesc",
    featuresKey: "advisorFeatures",
    icon: "message-circle",
    color: "purple",
    available: true,
  },
  {
    slug: "social",
    route: "/products/social",
    titleKey: "social",
    descKey: "socialDesc",
    featuresKey: "socialFeatures",
    icon: "trending-up",
    color: "cyan",
    available: false,
  },
];
