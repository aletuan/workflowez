import { Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { PRODUCTS } from "../../config/products";
import { ProductCard } from "../components/catalog/ProductCard";
import { CustomerStoryCard } from "../components/catalog/CustomerStoryCard";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export function ProductCatalogPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white overflow-x-hidden md:pt-16">
        <div className="relative container mx-auto px-4 md:px-6 py-10 md:py-16">
          {/* Background decoration blobs */}
          <div className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-purple-200/30 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[240px] h-[240px] md:w-[400px] md:h-[400px] bg-cyan-200/30 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[200px] md:w-[600px] md:h-[300px] bg-[var(--brand-light)]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* Hero text */}
          <div className="relative text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-light)] text-[var(--brand-dark)] text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Our Products
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-5 leading-[1.1]">
              {t.catalog.title.split(" ").slice(0, -2).join(" ")}{t.catalog.title.split(" ").length > 2 ? " " : ""}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] via-[var(--accent-gradient-via)] to-[var(--accent-gradient-to)]">
                {t.catalog.title.split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              {t.catalog.subtitle}
            </p>
          </div>

          {/* Alternating product rows */}
          <div className="relative flex flex-col gap-12 lg:gap-16 max-w-5xl mx-auto">
            {PRODUCTS.map((product, index) => {
              const story = t.catalog[product.storyKey as keyof typeof t.catalog] as {
                quote: string;
                author: string;
                role: string;
              };

              const isEven = index % 2 === 0;

              const productCard = (
                <div
                  key={`${product.slug}-product`}
                  className={`flex flex-col ${!isEven ? "order-1 lg:order-2" : ""}`}
                >
                  <ProductCard
                    slug={product.slug}
                    route={product.route}
                    title={t.catalog[product.titleKey as keyof typeof t.catalog] as string}
                    desc={t.catalog[product.descKey as keyof typeof t.catalog] as string}
                    features={t.catalog[product.featuresKey as keyof typeof t.catalog] as string[]}
                    icon={product.icon}
                    color={product.color}
                    available={product.available}
                    availableLabel={t.catalog.available}
                    comingSoonLabel={t.catalog.comingSoon}
                    tryDemoLabel={t.catalog.tryDemo}
                    index={index}
                  />
                </div>
              );

              const storyCard = (
                <div
                  key={`${product.slug}-story`}
                  className={`flex flex-col ${!isEven ? "order-2 lg:order-1" : ""}`}
                >
                  <CustomerStoryCard
                    quote={story.quote}
                    author={story.author}
                    role={story.role}
                    avatarSrc={product.storyAvatarSrc}
                    color={product.color}
                  />
                </div>
              );

              return (
                <div key={product.slug} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                  {isEven ? [productCard, storyCard] : [storyCard, productCard]}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
