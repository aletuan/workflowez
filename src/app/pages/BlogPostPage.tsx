import { Link, useParams, Navigate } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLanguage } from "../context/LanguageContext";
import { getPostBySlug } from "../../config/blog";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { format } from "date-fns";

export function BlogPostPage() {
  const { t, language } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug, language) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white overflow-x-hidden md:pt-16">
        <article className="container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="max-w-2xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-gray-600 hover:text-[var(--brand)] font-medium mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded"
            >
              ← {t.blog.backToBlog}
            </Link>

            <header className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4 leading-relaxed">
                {post.title}
              </h1>
              <time className="text-sm text-gray-500 font-medium">
                {t.blog.publishedOn} {format(new Date(post.date), "MMM d, yyyy")}
              </time>
            </header>

            <div className="space-y-6 text-gray-600 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-1 [&_a]:text-[var(--brand)] [&_a]:hover:underline [&_strong]:text-gray-900 [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
