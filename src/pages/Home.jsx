import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProductGrid from "../components/ProductGrid";
import QuickViewModal from "../components/QuickViewModal";
import Newsletter from "../components/Newsletter";
import TestimonialSlider from "../components/TestimonialSlider";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { journalArticles } from "../data/journal";
import heroBotanical from "../assets/images/editorial/hero-botanical.jpg";
import lotusImg from "../assets/images/editorial/lotus.jpg";

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const featured = products.slice(0, 4);
  const featuredProduct = products[4]; // Lotus Glow Facial Oil

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-forest">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full py-16">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-4">
                Small-Batch • Botanical • Conscious
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-offwhite leading-[1.05] mb-6">
                Botanical
                <br />
                Beauty
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-offwhite/70 font-sans text-base md:text-lg max-w-md mb-8 leading-relaxed">
                Rituals rooted in nature. Designed for modern living.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 bg-gold text-offwhite text-xs tracking-widest2 uppercase font-sans px-7 py-4 hover:bg-offwhite hover:text-forest transition-colors"
                >
                  Explore Collection <ArrowRight size={14} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border border-offwhite/40 text-offwhite text-xs tracking-widest2 uppercase font-sans px-7 py-4 hover:border-offwhite transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 relative">
            <Reveal delay={150} className="relative aspect-[4/5] overflow-hidden">
              <img
                src={heroBotanical}
                alt="Botanical skincare arranged with fresh leaves"
                className="w-full h-full object-cover"
              />
            </Reveal>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-offwhite p-5 max-w-[220px] border-l-2 border-gold">
              <p className="font-serif text-2xl text-forest leading-none mb-1">18+</p>
              <p className="text-xs text-charcoal/60 font-sans">Botanical ingredients sourced with care</p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-5xl text-forest leading-snug mb-6">
              &ldquo;Nature doesn&rsquo;t need to shout.&rdquo;
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans text-charcoal/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              AARANYA creates botanical beauty rituals inspired by India&rsquo;s natural landscapes
              and designed for everyday modern routines.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <SectionHeading label="Curated For You" title="The Botanical Edit" />
              <Link
                to="/shop"
                className="text-xs tracking-widest2 uppercase font-sans text-forest hover:text-gold transition-colors inline-flex items-center gap-2"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ProductGrid products={featured} onQuickView={setQuickViewProduct} />
          </Reveal>
        </div>
      </section>

      {/* SHOP BY RITUAL */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHeading label="Find Your Ritual" title="Shop By Ritual" align="center" className="mb-12" />
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {categories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 80}>
                <Link
                  to={`/shop?category=${encodeURIComponent(cat.value)}`}
                  className="group relative block aspect-[3/4] overflow-hidden"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <p className="text-offwhite font-serif text-lg md:text-2xl transition-transform duration-500 group-hover:-translate-y-1">
                      {cat.name}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="py-20 md:py-28 bg-sand/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="aspect-[4/5] overflow-hidden order-1">
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              className="w-full h-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="order-2">
            <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-4">
              Featured Ritual
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-forest mb-4">
              {featuredProduct.name}
            </h2>
            <p className="font-sans text-2xl text-charcoal mb-2">₹{featuredProduct.price}</p>
            <p className="text-gold text-sm mb-5">
              {"★".repeat(Math.round(featuredProduct.rating))}
              <span className="text-charcoal/50 ml-2 font-sans text-xs">
                {featuredProduct.rating} rating
              </span>
            </p>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-6 max-w-md">
              &ldquo;{featuredProduct.description}&rdquo;
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={`/product/${featuredProduct.id}`}
                className="bg-forest text-offwhite text-xs tracking-widest2 uppercase font-sans px-7 py-4 hover:bg-charcoal transition-colors"
              >
                Shop This Ritual
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 md:py-28 bg-forest text-offwhite">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHeading label="What We Believe" title="Our Philosophy" align="center" className="mb-16" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Botanical First", text: "Every formulation begins with a plant, not a lab shortcut." },
              { num: "02", title: "Small Batch", text: "We produce in limited quantities to preserve freshness and quality." },
              { num: "03", title: "Mindful Beauty", text: "Beauty rituals designed to slow you down, not speed you up." },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 100} className="text-center md:text-left">
                <p className="font-serif text-5xl text-gold/50 mb-4">{item.num}</p>
                <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                <p className="font-sans text-offwhite/60 text-sm leading-relaxed">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <SectionHeading label="From The Journal" title="Stories & Rituals" />
              <Link
                to="/journal"
                className="text-xs tracking-widest2 uppercase font-sans text-forest hover:text-gold transition-colors inline-flex items-center gap-2"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalArticles.slice(0, 3).map((article, i) => (
              <Reveal key={article.id} delay={i * 100}>
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
                  <p className="text-xs text-charcoal/50 font-sans">{article.readingTime}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-sand/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHeading label="Loved By Many" title="What Our Ritual Community Says" align="center" className="mb-14" />
          </Reveal>
          <Reveal delay={100}>
            <TestimonialSlider />
          </Reveal>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        className="py-20 md:py-28 bg-forest bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(48,75,58,0.88), rgba(48,75,58,0.88)), url(${lotusImg})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <Newsletter />
          </Reveal>
        </div>
      </section>

      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </div>
  );
}
