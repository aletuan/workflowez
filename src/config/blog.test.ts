import { describe, it, expect } from "vitest";
import { getAllPosts, getPostBySlug } from "./blog";

describe("config/blog", () => {
  it("getAllPosts returns posts sorted by date descending", () => {
    const posts = getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThanOrEqual(0);
    for (let i = 1; i < posts.length; i++) {
      expect(posts[i].date <= posts[i - 1].date).toBe(true);
    }
  });

  it("getPostBySlug returns post when slug exists", () => {
    const posts = getAllPosts();
    if (posts.length === 0) return;
    const first = posts[0];
    const found = getPostBySlug(first.slug);
    expect(found).toEqual(first);
  });

  it("getPostBySlug returns undefined for unknown slug", () => {
    expect(getPostBySlug("nonexistent-slug-xyz")).toBeUndefined();
  });

  it("each post has required fields", () => {
    const posts = getAllPosts();
    for (const p of posts) {
      expect(p).toHaveProperty("slug");
      expect(p).toHaveProperty("title");
      expect(p).toHaveProperty("date");
      expect(p).toHaveProperty("excerpt");
      expect(p).toHaveProperty("content");
      expect(typeof p.slug).toBe("string");
      expect(typeof p.title).toBe("string");
    }
  });
});
