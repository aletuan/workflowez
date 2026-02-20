import { describe, it, expect } from "vitest";
import { PRODUCTS } from "./products";

describe("config/products", () => {
  it("PRODUCTS has expected length", () => {
    expect(PRODUCTS).toHaveLength(2);
  });

  it("each product has required fields", () => {
    const slugs = new Set<string>();
    for (const p of PRODUCTS) {
      expect(p.slug).toBeTruthy();
      expect(slugs.has(p.slug)).toBe(false);
      slugs.add(p.slug);
      expect(p.route).toMatch(/^\/products\/\w+$/);
      expect(["message-circle", "trending-up"]).toContain(p.icon);
      expect(["purple", "cyan"]).toContain(p.color);
      expect(typeof p.available).toBe("boolean");
      expect(p.titleKey).toBeTruthy();
      expect(p.descKey).toBeTruthy();
      expect(p.storyAvatarSrc).toMatch(/\.jpg$/);
    }
  });

  it("advisor product exists and is available", () => {
    const advisor = PRODUCTS.find((p) => p.slug === "advisor");
    expect(advisor).toBeDefined();
    expect(advisor!.available).toBe(true);
    expect(advisor!.route).toBe("/products/advisor");
  });

  it("social product exists", () => {
    const social = PRODUCTS.find((p) => p.slug === "social");
    expect(social).toBeDefined();
    expect(social!.route).toBe("/products/social");
  });
});
