import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal";
import { getArticleById, journalArticles } from "../data/journal";

export default function JournalArticle() {
  const { id } = useParams();
  const article = getArticleById(id);

  if (!article) return <Navigate to="/404" replace />;

  const more = journalArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="pt-28 md:pt-32 pb-24 bg-offwhite">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Link
          to="/journal"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 font-sans text-forest hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        <Reveal>
          <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-3">
            {article.category}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-forest mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-sm text-charcoal/50 font-sans mb-8">{article.readingTime}</p>
        </Reveal>

        <Reveal delay={100} className="aspect-[16/9] overflow-hidden mb-10">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </Reveal>

        <Reveal delay={150}>
          <p className="font-sans text-charcoal/80 leading-relaxed text-base md:text-lg">
            {article.content}
          </p>
        </Reveal>
      </div>

      {more.length > 0 && (
        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-24">
          <h2 className="font-serif text-2xl text-forest mb-8">More From the Journal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {more.map((a) => (
              <Link key={a.id} to={`/journal/${a.id}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden mb-3">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-lg text-charcoal group-hover:text-forest transition-colors">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
