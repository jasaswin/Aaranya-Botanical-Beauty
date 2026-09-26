import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-cream">
      <Leaf size={32} className="text-gold mb-5" strokeWidth={1.2} />
      <p className="font-serif text-6xl text-forest mb-4">404</p>
      <h1 className="font-serif text-2xl text-charcoal mb-3">This page has wandered off.</h1>
      <p className="font-sans text-sm text-charcoal/60 mb-8 max-w-sm">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="bg-forest text-offwhite text-xs uppercase tracking-widest2 font-sans px-8 py-4 hover:bg-charcoal transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
