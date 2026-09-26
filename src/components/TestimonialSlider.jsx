import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/testimonials";
import Rating from "./Rating";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }
  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div key={current.id} className="animate-fade-in">
        <Rating value={current.rating} size={16} />
        <p className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed my-6">
          &ldquo;{current.review}&rdquo;
        </p>
        <p className="font-sans text-sm text-forest">{current.name}</p>
        <p className="font-sans text-xs text-charcoal/50">{current.location}</p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button onClick={prev} aria-label="Previous testimonial" className="text-charcoal/50 hover:text-forest">
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === index ? "bg-gold" : "bg-charcoal/20"
              }`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next testimonial" className="text-charcoal/50 hover:text-forest">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
