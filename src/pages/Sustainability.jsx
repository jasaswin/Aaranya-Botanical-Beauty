import { Package, Leaf, Factory, HeartHandshake } from "lucide-react";
import Reveal from "../components/Reveal";
import greenLeavesBeige from "../assets/images/editorial/green-leaves-beige.jpg";

const stats = [
  { value: "92%", label: "Recyclable packaging" },
  { value: "18+", label: "Botanical ingredients" },
  { value: "100%", label: "Cruelty free" },
  { value: "0", label: "Animal-derived ingredients" },
];

const pillars = [
  {
    icon: Package,
    title: "Thoughtful Packaging",
    text: "We favour recyclable glass and minimal, purposeful packaging over excess — reducing waste without compromising on quality.",
  },
  {
    icon: Leaf,
    title: "Responsible Ingredients",
    text: "Every botanical is sourced from suppliers who share our respect for the land it comes from.",
  },
  {
    icon: Factory,
    title: "Small Batch Production",
    text: "Producing in smaller quantities means fresher formulas, less waste, and more care at every step.",
  },
  {
    icon: HeartHandshake,
    title: "Conscious Consumption",
    text: "We'd rather you buy less and love it more — products designed to be used fully, not forgotten in a drawer.",
  },
];

export default function Sustainability() {
  return (
    <div className="pt-20 bg-offwhite">
      <section className="relative h-[50vh] min-h-[380px] flex items-end">
        <img
          src={greenLeavesBeige}
          alt="Green leaves on natural fabric"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/50" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pb-16 w-full">
          <Reveal>
            <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-3">
              Sustainability
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-offwhite max-w-2xl">
              Conscious by design.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-forest text-offwhite">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <p className="font-serif text-4xl md:text-5xl text-gold mb-2">{stat.value}</p>
              <p className="font-sans text-xs md:text-sm text-offwhite/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-offwhite/40 text-xs font-sans mt-8">
          Figures shown are illustrative demo content.
        </p>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100} className="flex gap-5">
                <pillar.icon size={28} className="text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-serif text-2xl text-forest mb-3">{pillar.title}</h3>
                  <p className="font-sans text-charcoal/70 leading-relaxed">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
