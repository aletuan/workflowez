import { Link } from "react-router";
import { MessageCircle, TrendingUp, ChevronRight } from "lucide-react";

interface ProductCardProps {
  slug: string;
  route: string;
  title: string;
  desc: string;
  icon: "message-circle" | "trending-up";
}

const ICONS = {
  "message-circle": MessageCircle,
  "trending-up": TrendingUp,
};

export function ProductCard({ slug, route, title, desc, icon }: ProductCardProps) {
  const Icon = ICONS[icon];

  return (
    <Link
      to={route}
      className="group flex gap-6 p-6 rounded-[var(--section-radius)] bg-white border border-gray-100 hover:border-[var(--brand)]/30 hover:shadow-xl hover:shadow-[var(--brand)]/5 transition-all"
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white transition-colors">
        <Icon className="w-7 h-7" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[var(--brand)] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
      <div className="flex-shrink-0 self-center">
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[var(--brand)] group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  );
}
