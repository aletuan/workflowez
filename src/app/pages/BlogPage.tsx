import { Link } from "react-router";
import { FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getAllPosts } from "../../config/blog";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import { format } from "date-fns";

export function BlogPage() {
  const { t } = useLanguage();
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white overflow-x-hidden md:pt-16">
        {/* Hero with subtle brand gradient (reference: soft radial from top-left) */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_0%,var(--brand-light)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative container mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-3 leading-[1.1]">
              {t.blog.headline}
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[var(--brand)] to-[var(--accent-gradient-via)] rounded-full mb-6" />
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              {t.blog.subtitle}
            </p>
          </div>
        </div>

        {/* Category filter row (placeholder for future expansion) */}
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-6 py-4 border-b border-gray-100" aria-label="Blog categories">
            <span className="text-[var(--brand)] font-medium border-b-2 border-[var(--brand)] pb-4 -mb-px">
              {t.blog.viewAll}
            </span>
          </nav>
        </div>

        {/* Post cards */}
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--brand-light)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-2"
              >
                {/* Image area or placeholder */}
                <div className="aspect-[16/10] bg-gray-50 overflow-hidden">
                  {post.image ? (
                    <ImageWithFallback
                      src={post.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--brand-light)]/60 to-[var(--brand-light)]/20">
                      <FileText className="w-12 h-12 text-[var(--brand)]/50" aria-hidden />
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <time className="text-sm text-gray-500 font-medium block mb-2">
                    {format(new Date(post.date), "MMM d, yyyy")}
                  </time>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-[var(--brand)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-[var(--brand)] font-medium text-sm group-hover:gap-2 transition-all">
                    {t.blog.readMore}
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
