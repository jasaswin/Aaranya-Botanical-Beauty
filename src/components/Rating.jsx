import { Star } from "lucide-react";

export default function Rating({ value = 0, reviewCount, size = 14 }) {
  const fullStars = Math.round(value);

  return (
    <div className="flex items-center gap-1.5" aria-label={`Rated ${value} out of 5`}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={i < fullStars ? "fill-gold text-gold" : "text-sand"}
          />
        ))}
      </div>
      <span className="text-xs text-charcoal/60 font-sans">
        {value.toFixed(1)}
        {reviewCount !== undefined && ` (${reviewCount})`}
      </span>
    </div>
  );
}
