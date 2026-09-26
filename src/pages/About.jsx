import Reveal from "../components/Reveal";
import heroBotanical from "../assets/images/editorial/hero-botanical.jpg";
import greenLeavesBeige from "../assets/images/editorial/green-leaves-beige.jpg";
import rosePetals from "../assets/images/editorial/rose-petals.jpg";
import lotusImg from "../assets/images/editorial/lotus.jpg";

export default function About() {
  return (
    <div className="pt-20 bg-offwhite">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <img
          src={heroBotanical}
          alt="Botanical ingredients and skincare"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pb-16 w-full">
          <Reveal>
            <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-3">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-offwhite max-w-2xl">
              Rooted in nature, made with intention.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-4">
              Our Beginning
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest mb-5">
              A quiet idea, grown slowly.
            </h2>
            <p className="font-sans text-charcoal/70 leading-relaxed">
              AARANYA began with a simple observation: the most effective beauty rituals were
              often the simplest ones, passed down through generations, built on ingredients
              found close to home. We wanted to bring that same thoughtfulness to a modern
              routine — formulations that respect both the skin and the earth they come from.
            </p>
          </Reveal>
          <Reveal delay={150} className="aspect-[4/5] overflow-hidden order-first lg:order-last">
            <img src={rosePetals} alt="Rose petals" className="w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-sand/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="aspect-[4/5] overflow-hidden">
            <img src={lotusImg} alt="Lotus flower" className="w-full h-full object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest mb-5">
              Beauty as a ritual, not a routine.
            </h2>
            <p className="font-sans text-charcoal/70 leading-relaxed">
              We believe beauty products should feel considered, not consumed. Every AARANYA
              formula is designed to be used slowly and mindfully — a small pause in the day
              rather than another task to check off.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-4">
              Our Ingredients
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest mb-5">
              Sourced with care, chosen with purpose.
            </h2>
            <p className="font-sans text-charcoal/70 leading-relaxed">
              From rose and lotus to neem and sandalwood, every botanical we use is chosen for
              what it can genuinely offer the skin — never as filler, never for the label alone.
            </p>
          </Reveal>
          <Reveal delay={150} className="aspect-[4/5] overflow-hidden order-first lg:order-last">
            <img src={greenLeavesBeige} alt="Botanical leaves" className="w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 md:py-28 bg-forest text-offwhite">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-4">
              Our Commitment
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-5">
              Conscious choices, at every step.
            </h2>
            <p className="font-sans text-offwhite/70 leading-relaxed max-w-2xl mx-auto">
              From thoughtful packaging to responsibly sourced ingredients, we hold ourselves to
              a standard that considers not just how a product performs, but what it leaves
              behind.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
