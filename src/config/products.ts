export interface Product {
  slug: string;
  route: string;
  titleKey: string;
  descKey: string;
  featuresKey: string;
  storyKey: string;
  storyAvatarSrc: string;
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
    storyKey: "advisorStory",
    storyAvatarSrc: "/images/avatar-nt.jpg",
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
    storyKey: "socialStory",
    storyAvatarSrc: "/images/avatar-lh.jpg",
    icon: "trending-up",
    color: "cyan",
    available: false,
  },
];
