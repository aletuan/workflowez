interface CustomerStoryCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
  color: "purple" | "cyan";
}

const COLOR_MAP = {
  purple: { openQuote: "text-gray-900" },
  cyan: { openQuote: "text-gray-900" },
};

export function CustomerStoryCard({
  quote,
  author,
  role,
  avatarSrc,
  color,
}: CustomerStoryCardProps) {
  const c = COLOR_MAP[color];

  return (
    <div className="flex flex-col justify-center h-full px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      {/* Opening quote mark */}
      <span className={`block text-5xl sm:text-6xl leading-none font-black ${c.openQuote} mb-4 select-none`} style={{ fontFamily: "Georgia, serif" }}>
        &ldquo;
      </span>

      {/* Quote text */}
      <p className="text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={avatarSrc}
          alt={author}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <p className="font-bold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
