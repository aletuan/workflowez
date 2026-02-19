import { Link } from "react-router";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getAllPosts } from "../../config/blog";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { format } from "date-fns";

export function BlogPage() {
  const { t } = useLanguage();
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white overflow-x-hidden md:pt-16">
        <div className="relative container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-purple-200/30 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[240px] h-[240px] md:w-[350px] md:h-[350px] bg-cyan-200/30 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

          <div className="relative text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-light)] text-[var(--brand-dark)] text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              {t.blog.title}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-5 leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] via-[var(--accent-gradient-via)] to-[var(--accent-gradient-to)]">
                {t.blog.title}
              </span>
            </h1>

            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              {t.blog.subtitle}
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-[var(--brand-light)] transition-colors"
              >
                <time className="text-sm text-gray-500 font-medium block mb-2">
                  {format(new Date(post.date), "MMM d, yyyy")}
                </time>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-relaxed">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-[var(--brand)] font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded"
                >
                  {t.blog.readMore}
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
