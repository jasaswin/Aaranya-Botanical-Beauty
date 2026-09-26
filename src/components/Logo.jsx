import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

// Simple text-based wordmark with a small leaf symbol, as specified in the brief.
export default function Logo({ variant = "dark", size = "normal", asLink = true }) {
  const color = variant === "light" ? "text-offwhite" : "text-forest";
  const textSize = size === "large" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl";

  const content = (
    <span className={`inline-flex items-center gap-2 font-serif ${color}`}>
      <Leaf size={size === "large" ? 26 : 18} className="text-gold" strokeWidth={1.5} />
      <span className={`${textSize} tracking-wide`}>AARANYA</span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link to="/" aria-label="AARANYA home">
      {content}
    </Link>
  );
}
