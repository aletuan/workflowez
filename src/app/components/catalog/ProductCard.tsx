import { Link } from "react-router";
import { MessageCircle, TrendingUp, Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface ProductCardProps {
  slug: string;
  route: string;
  title: string;
  desc: string;
  features: string[];
  icon: "message-circle" | "trending-up";
  color: "purple" | "cyan";
  available: boolean;
  availableLabel: string;
  comingSoonLabel: string;
  tryDemoLabel: string;
  index: number;
}

const ICONS = {
  "message-circle": MessageCircle,
  "trending-up": TrendingUp,
};

const COLOR_MAP = {
  purple: {
    iconBg: "bg-[var(--brand)]",
    glow: "bg-purple-300",
    badgeAvail: "bg-green-100 text-green-700",
    badgeSoon: "bg-[var(--brand-light)] text-[var(--brand-dark)]",
    featureDot: "bg-[var(--brand)]",
    ctaBg: "bg-[var(--brand)] hover:bg-[var(--brand-dark)]",
    hoverBorder: "hover:border-[var(--brand)]/30",
    hoverShadow: "hover:shadow-[var(--brand)]/10",
    gradientFrom: "from-violet-50",
    gradientTo: "to-fuchsia-50/60",
  },
  cyan: {
    iconBg: "bg-cyan-500",
    glow: "bg-cyan-300",
    badgeAvail: "bg-green-100 text-green-700",
    badgeSoon: "bg-cyan-100 text-cyan-700",
    featureDot: "bg-cyan-500",
    ctaBg: "bg-cyan-600 hover:bg-cyan-700",
    hoverBorder: "hover:border-cyan-300/50",
    hoverShadow: "hover:shadow-cyan-500/10",
    gradientFrom: "from-cyan-50",
    gradientTo: "to-sky-50/60",
  },
};

export function ProductCard({
  route,
  title,
  desc,
  features,
  icon,
  color,
  available,
  availableLabel,
  comingSoonLabel,
  tryDemoLabel,
  index,
}: ProductCardProps) {
  const Icon = ICONS[icon];
  const c = COLOR_MAP[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        to={route}
        className={`group flex flex-col h-full rounded-[var(--card-radius)] bg-white border border-gray-100 ${c.hoverBorder} shadow-xl ${c.hoverShadow} hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer`}
      >
        {/* Top visual area */}
        <div className={`relative p-8 bg-gradient-to-br ${c.gradientFrom} ${c.gradientTo} border-b border-gray-100/80`}>
          <div className={`absolute -top-6 -right-6 w-20 h-20 ${c.glow} rounded-3xl rotate-12 blur-2xl opacity-40 animate-pulse pointer-events-none`} />

          <div className="flex items-start justify-between mb-6">
            <div className={`w-14 h-14 rounded-2xl ${c.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${available ? c.badgeAvail : c.badgeSoon}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${available ? "bg-green-500" : "bg-amber-400"}`} />
              {available ? availableLabel : comingSoonLabel}
            </span>
          </div>

          <ul className="space-y-2">
            {features.map((feat) => (
              <li key={feat} className="flex items-center gap-2.5 text-sm text-gray-700">
                <span className={`w-4 h-4 rounded-full ${c.featureDot} flex items-center justify-center flex-shrink-0`}>
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </span>
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom info area */}
        <div className="flex flex-col flex-1 p-8 pt-6">
          <h3 className="font-extrabold text-gray-900 text-xl mb-2 group-hover:text-[var(--brand)] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{desc}</p>

          <div className={`inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl ${c.ctaBg} w-fit transition-colors duration-200 shadow-sm`}>
            {tryDemoLabel}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
