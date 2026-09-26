import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { journalArticles } from "../data/journal";

const CATEGORIES = ["All", "Botanical Knowledge", "Rituals", "Ingredients", "Sustainability"];

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? journalArticles
      : journalArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="pt-28 md:pt-32 pb-24 bg-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-3">
            The Journal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-forest mb-4">
            Stories, Rituals & Botanical Knowledge
          </h1>
          <p className="font-sans text-charcoal/60">
            Reflections on slow beauty, botanical traditions and the ingredients behind our
            rituals.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-widest2 font-sans px-4 py-2 border transition-colors ${
                activeCategory === cat
                  ? "bg-forest text-offwhite border-forest"
                  : "border-charcoal/20 text-charcoal/60 hover:border-forest"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((article, i) => (
            <Reveal key={article.id} delay={(i % 3) * 100}>
              <Link to={`/journal/${article.id}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[11px] tracking-widest2 uppercase text-gold font-sans mb-2">
                  {article.category}
                </p>
                <h3 className="font-serif text-xl text-charcoal mb-2 leading-snug group-hover:text-forest transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-charcoal/60 font-sans mb-2 line-clamp-2">
                  {article.excerpt}
                </p>
                <p className="text-xs text-charcoal/40 font-sans">{article.readingTime}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
