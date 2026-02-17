import { Link } from "react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { PRODUCTS } from "../../config/products";
import { ProductCard } from "../components/catalog/ProductCard";

export function ProductCatalogPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-[var(--brand)] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.catalog.backToHome}
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[linear-gradient(to_bottom_right,var(--brand),var(--accent-gradient-via))] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900">Workflow EZ</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {t.catalog.title}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.catalog.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.slug}
              slug={product.slug}
              route={product.route}
              title={t.catalog[product.titleKey as keyof typeof t.catalog] as string}
              desc={t.catalog[product.descKey as keyof typeof t.catalog] as string}
              icon={product.icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
