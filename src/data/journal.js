import rosePetals from "../assets/images/editorial/rose-petals.jpg";
import neemLeaf from "../assets/images/editorial/neem-leaf.jpg";
import lotusImg from "../assets/images/editorial/lotus.jpg";
import jasmineImg from "../assets/images/editorial/jasmine.jpg";
import hibiscusImg from "../assets/images/editorial/hibiscus.jpg";
import greenLeavesBeige from "../assets/images/editorial/green-leaves-beige.jpg";

export const journalArticles = [
  {
    id: 1,
    title: "5 Botanical Ingredients Your Skin Will Love",
    category: "Botanical Knowledge",
    image: rosePetals,
    readingTime: "4 min read",
    excerpt:
      "From rose to lotus, discover five time-honoured botanicals and how each one supports calm, healthy-looking skin.",
    content:
      "Botanicals have been part of beauty rituals for centuries, and for good reason. Rose extract soothes and balances, while lotus is prized for its gentle brightening properties. Neem purifies, sandalwood grounds, and saffron is treasured for the radiance it lends the skin. When chosen thoughtfully and used consistently, these ingredients work with your skin rather than against it, supporting a calmer, more balanced complexion over time.",
  },
  {
    id: 2,
    title: "Building a Slower Beauty Ritual",
    category: "Rituals",
    image: greenLeavesBeige,
    readingTime: "5 min read",
    excerpt:
      "A slower approach to your daily routine can be as good for your mind as it is for your skin. Here's where to start.",
    content:
      "In a world of ten-step routines and constant new launches, there is something grounding about slowing down. A slower beauty ritual asks you to notice — the texture of an oil as it warms in your palms, the scent of a cleanser, the few quiet minutes before bed. Start small: choose two or three products you trust, use them with intention, and let the ritual itself become part of the benefit.",
  },
  {
    id: 3,
    title: "Inside India's Botanical Traditions",
    category: "Ingredients",
    image: lotusImg,
    readingTime: "6 min read",
    excerpt:
      "A look at the botanical wisdom passed down through generations, and how it continues to shape modern beauty.",
    content:
      "Long before modern skincare, households across India relied on botanicals found in their own kitchens and gardens — turmeric, sandalwood, neem, hibiscus. These weren't just remedies; they were rituals passed between generations. Today, this wisdom continues to inform thoughtful, modern formulations that honour tradition while meeting the needs of contemporary routines.",
  },
  {
    id: 4,
    title: "Why Small-Batch Beauty Matters",
    category: "Sustainability",
    image: neemLeaf,
    readingTime: "4 min read",
    excerpt:
      "Small-batch production means fresher formulas and a lighter footprint. Here's why it's worth the extra care.",
    content:
      "Producing in small batches takes more time and more care, but it means every formulation is fresher, ingredients are sourced more responsibly, and waste is kept to a minimum. It's a slower way of making things — one that prioritises quality and consideration over speed and scale.",
  },
  {
    id: 5,
    title: "The Quiet Power of Jasmine",
    category: "Botanical Knowledge",
    image: jasmineImg,
    readingTime: "3 min read",
    excerpt:
      "Mogra, or jasmine, has long been associated with calm. We look at why this delicate flower remains a beauty staple.",
    content:
      "Jasmine, known as mogra across much of India, has a fragrance so distinct it's instantly recognisable — soft, warm and calming. Beyond its scent, jasmine has long featured in beauty traditions for its gentle, comforting qualities. A few drops or a light mist can turn an ordinary moment into something a little more restorative.",
  },
  {
    id: 6,
    title: "Caring for Hair the Traditional Way",
    category: "Rituals",
    image: hibiscusImg,
    readingTime: "5 min read",
    excerpt:
      "Hibiscus, fenugreek and amla have supported hair rituals for generations. Here's how to bring them into your routine.",
    content:
      "Traditional hair care often leaned on what was close at hand: hibiscus for strength, fenugreek for conditioning, amla for shine. These ingredients, applied consistently and given time to work, remain some of the most trusted names in hair care today — a reminder that some of the best routines are also the simplest.",
  },
];

export const getArticleById = (id) => journalArticles.find((a) => a.id === Number(id));
