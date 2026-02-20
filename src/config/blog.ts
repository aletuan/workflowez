export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}

const modules = import.meta.glob<string>("../../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

/** Extract language suffix from file path: `.en.md` → `"en"`, `.vi.md` → `"vi"` */
function extractLang(path: string): string {
  const m = path.match(/\.(\w+)\.md$/);
  return m ? m[1] : "en";
}

/** Parse YAML front matter without gray-matter (which needs Node.js Buffer) */
function parseFrontMatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(\w+)\s*:\s*"?(.*?)"?\s*$/);
    if (m) data[m[1]] = m[2];
  }
  return { data, content: match[2] };
}

function parsePost(path: string, raw: string): BlogPost {
  const { data, content } = parseFrontMatter(raw);
  // Strip language suffix from slug: `welcome.en.md` → `welcome`
  const slug = data.slug ?? path.replace(/^.*\/([^/]+)\.\w+\.md$/, "$1");
  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    content,
    image: data.image,
  };
}

export function getAllPosts(language: string = "en"): BlogPost[] {
  return Object.entries(modules)
    .filter(([path]) => extractLang(path) === language)
    .map(([path, raw]) => parsePost(path, raw))
    .sort((a, b) => (b.date > a.date ? 1 : -1));
}

export function getPostBySlug(slug: string, language: string = "en"): BlogPost | undefined {
  return getAllPosts(language).find((p) => p.slug === slug);
}
