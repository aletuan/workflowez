import { describe, it, expect } from "vitest";
import { NAV_ITEMS } from "./navigation";

describe("config/navigation", () => {
  it("NAV_ITEMS has expected entries", () => {
    expect(NAV_ITEMS).toHaveLength(4);
  });

  it("each nav item has id and labelKey", () => {
    const labelKeys = ["features", "benefits", "testimonials", "pricing"] as const;
    for (const item of NAV_ITEMS) {
      expect(item.id).toMatch(/^\/#\w+$/);
      expect(labelKeys).toContain(item.labelKey);
    }
  });

  it("contains features, benefits, testimonials, pricing", () => {
    const ids = NAV_ITEMS.map((n) => n.id);
    expect(ids).toContain("/#features");
    expect(ids).toContain("/#benefits");
    expect(ids).toContain("/#testimonials");
    expect(ids).toContain("/#pricing");
  });
});
