// Product images
import roseVeilLipTint from "../assets/images/products/rose-veil-lip-tint.webp";
import forestDewSerum from "../assets/images/products/forest-dew-serum.webp";
import sandalwoodBodyPolish from "../assets/images/products/sandalwood-body-polish.webp";
import neemSageCleanser from "../assets/images/products/neem-sage-cleanser.webp";
import lotusGlowFacialOil from "../assets/images/products/lotus-glow-facial-oil.webp";
import wildRoseHairElixir from "../assets/images/products/wild-rose-hair-elixir.webp";
import mograBodyMist from "../assets/images/products/mogra-body-mist.webp";
import kumkumadiNightOil from "../assets/images/products/kumkumadi-night-oil.webp";
import aloeBotanicalGel from "../assets/images/products/aloe-botanical-gel.webp";
import saffronLipBalm from "../assets/images/products/saffron-lip-balm.webp";
import vetiverBodyWash from "../assets/images/products/vetiver-body-wash.webp";
import hibiscusHairMask from "../assets/images/products/hibiscus-hair-mask.webp";

// Editorial images reused as secondary product images
import rosePetals from "../assets/images/editorial/rose-petals.jpg";
import hibiscusImg from "../assets/images/editorial/hibiscus.jpg";
import neemLeaf from "../assets/images/editorial/neem-leaf.jpg";
import lotusImg from "../assets/images/editorial/lotus.jpg";
import jasmineImg from "../assets/images/editorial/jasmine.jpg";
import greenLeavesBeige from "../assets/images/editorial/green-leaves-beige.jpg";
import heroBotanical from "../assets/images/editorial/hero-botanical.jpg";

export const products = [
  {
    id: 1,
    name: "Rose Veil Lip Tint",
    slug: "rose-veil-lip-tint",
    category: "Lip Care",
    price: 649,
    originalPrice: 749,
    description: "A sheer, buildable lip tint infused with rose extract for a natural flush.",
    longDescription:
      "Rose Veil Lip Tint glides on weightless and blooms into a soft, your-lips-but-better flush. Formulated with cold-pressed rose extract and shea butter, it hydrates as it colours, leaving lips soft and subtly tinted from morning to night.",
    image: roseVeilLipTint,
    secondaryImage: rosePetals,
    rating: 4.7,
    reviewCount: 128,
    ingredients: ["Rose Extract", "Shea Butter", "Jojoba Oil", "Vitamin E"],
    benefits: ["Sheer buildable colour", "8-hour hydration", "Non-sticky finish"],
    howToUse: "Dab onto clean lips and blend with fingertip. Layer for deeper colour.",
    stock: 24,
    tags: ["lip", "tint", "rose", "hydrating"],
  },
  {
    id: 2,
    name: "Forest Dew Face Serum",
    slug: "forest-dew-face-serum",
    category: "Skin Care",
    price: 1299,
    originalPrice: 1499,
    description: "A lightweight botanical serum that restores calm, hydrated skin.",
    longDescription:
      "Forest Dew Face Serum is an everyday ritual for calm, hydrated skin. A blend of centella, hyaluronic acid and forest botanicals works to soothe visible redness while locking in long-lasting moisture, for a dewy, healthy glow.",
    image: forestDewSerum,
    secondaryImage: heroBotanical,
    rating: 4.8,
    reviewCount: 214,
    ingredients: ["Centella Asiatica", "Hyaluronic Acid", "Green Tea Extract", "Aloe Vera"],
    benefits: ["Calms redness", "Deep hydration", "Softens fine lines"],
    howToUse: "Apply 3-4 drops onto damp skin morning and night before moisturiser.",
    stock: 40,
    tags: ["skin", "serum", "hydrating", "calming"],
  },
  {
    id: 3,
    name: "Sandalwood Body Polish",
    slug: "sandalwood-body-polish",
    category: "Body Care",
    price: 899,
    originalPrice: 999,
    description: "A fine botanical scrub that buffs away dullness, scented with sandalwood.",
    longDescription:
      "This gentle exfoliating polish combines fine walnut granules with sandalwood and almond oil to slough away dry skin while leaving behind a warm, woody fragrance and a satin-soft finish.",
    image: sandalwoodBodyPolish,
    secondaryImage: greenLeavesBeige,
    rating: 4.6,
    reviewCount: 96,
    ingredients: ["Sandalwood Powder", "Walnut Shell Granules", "Almond Oil", "Shea Butter"],
    benefits: ["Gently exfoliates", "Softens skin texture", "Warm woody scent"],
    howToUse: "Massage onto wet skin in circular motions, then rinse thoroughly.",
    stock: 30,
    tags: ["body", "scrub", "sandalwood", "exfoliating"],
  },
  {
    id: 4,
    name: "Neem & Sage Cleanser",
    slug: "neem-sage-cleanser",
    category: "Skin Care",
    price: 749,
    originalPrice: 849,
    description: "A purifying gel cleanser with neem and sage for clear, balanced skin.",
    longDescription:
      "Neem & Sage Cleanser gently lifts away impurities without stripping the skin. Neem purifies while sage calms, leaving skin feeling clean, balanced and comfortable — never tight or dry.",
    image: neemSageCleanser,
    secondaryImage: neemLeaf,
    rating: 4.5,
    reviewCount: 152,
    ingredients: ["Neem Extract", "Sage Oil", "Aloe Vera", "Glycerin"],
    benefits: ["Purifies pores", "Balances oil", "Non-drying formula"],
    howToUse: "Massage onto damp face, lather gently, and rinse with lukewarm water.",
    stock: 35,
    tags: ["skin", "cleanser", "neem", "purifying"],
  },
  {
    id: 5,
    name: "Lotus Glow Facial Oil",
    slug: "lotus-glow-facial-oil",
    category: "Skin Care",
    price: 1499,
    originalPrice: 1699,
    description: "A nourishing facial oil that restores radiance with lotus and botanical extracts.",
    longDescription:
      "Lotus Glow Facial Oil is a rich blend of lotus extract and cold-pressed botanical oils that seals in moisture and restores a healthy, luminous glow. A few drops transform dry, tired skin into a radiant canvas.",
    image: lotusGlowFacialOil,
    secondaryImage: lotusImg,
    rating: 4.9,
    reviewCount: 187,
    ingredients: ["Lotus Extract", "Squalane", "Rosehip Oil", "Vitamin E"],
    benefits: ["Restores radiance", "Deeply nourishes", "Softens skin"],
    howToUse: "Warm 2-3 drops between palms and press into face and neck at night.",
    stock: 22,
    tags: ["skin", "facial oil", "lotus", "glow"],
  },
  {
    id: 6,
    name: "Wild Rose Hair Elixir",
    slug: "wild-rose-hair-elixir",
    category: "Hair Care",
    price: 1099,
    originalPrice: 1249,
    description: "A lightweight hair oil that strengthens and adds natural shine.",
    longDescription:
      "Wild Rose Hair Elixir blends rose extract with strengthening botanical oils to nourish strands from root to tip. Regular use leaves hair looking healthier, glossier and more resilient.",
    image: wildRoseHairElixir,
    secondaryImage: rosePetals,
    rating: 4.6,
    reviewCount: 88,
    ingredients: ["Rose Extract", "Argan Oil", "Castor Oil", "Vitamin E"],
    benefits: ["Strengthens strands", "Adds natural shine", "Tames frizz"],
    howToUse: "Apply a few drops to damp or dry hair, focusing on mid-lengths and ends.",
    stock: 27,
    tags: ["hair", "oil", "rose", "shine"],
  },
  {
    id: 7,
    name: "Mogra Body Mist",
    slug: "mogra-body-mist",
    category: "Body Care",
    price: 799,
    originalPrice: 899,
    description: "A delicate jasmine-scented mist for an all-day botanical fragrance.",
    longDescription:
      "Mogra Body Mist captures the delicate, heady scent of jasmine in a lightweight, alcohol-friendly mist. Spritz it on for a soft botanical fragrance that lingers gently through the day.",
    image: mograBodyMist,
    secondaryImage: jasmineImg,
    rating: 4.4,
    reviewCount: 63,
    ingredients: ["Jasmine (Mogra) Extract", "Aloe Water", "Glycerin"],
    benefits: ["Long-lasting fragrance", "Lightweight formula", "Refreshes skin"],
    howToUse: "Mist onto pulse points or all over body after showering.",
    stock: 45,
    tags: ["body", "mist", "jasmine", "fragrance"],
  },
  {
    id: 8,
    name: "Kumkumadi Night Oil",
    slug: "kumkumadi-night-oil",
    category: "Skin Care",
    price: 1699,
    originalPrice: 1899,
    description: "A traditional Ayurvedic-inspired night oil for radiant morning skin.",
    longDescription:
      "Inspired by traditional Ayurvedic beauty rituals, Kumkumadi Night Oil blends saffron with nourishing botanical oils. Massaged in before bed, it works overnight to restore softness and a natural glow by morning.",
    image: kumkumadiNightOil,
    secondaryImage: heroBotanical,
    rating: 4.8,
    reviewCount: 176,
    ingredients: ["Saffron", "Sandalwood", "Almond Oil", "Licorice Extract"],
    benefits: ["Overnight radiance", "Evens skin tone", "Deeply nourishing"],
    howToUse: "Massage a few drops onto face and neck before bed as the last step.",
    stock: 18,
    tags: ["skin", "night oil", "saffron", "ayurvedic"],
  },
  {
    id: 9,
    name: "Aloe Botanical Gel",
    slug: "aloe-botanical-gel",
    category: "Skin Care",
    price: 549,
    originalPrice: 649,
    description: "A soothing multi-purpose gel with pure aloe for instant comfort.",
    longDescription:
      "This lightweight, fast-absorbing gel is made from pure aloe vera and calming botanicals. Use it to soothe sun-exposed skin, calm irritation, or as a light daily moisturiser under makeup.",
    image: aloeBotanicalGel,
    secondaryImage: greenLeavesBeige,
    rating: 4.5,
    reviewCount: 141,
    ingredients: ["Aloe Vera", "Cucumber Extract", "Allantoin"],
    benefits: ["Soothes instantly", "Lightweight hydration", "Multi-purpose use"],
    howToUse: "Apply a thin layer to face or body as needed, day or night.",
    stock: 50,
    tags: ["skin", "gel", "aloe", "soothing"],
  },
  {
    id: 10,
    name: "Saffron Lip Balm",
    slug: "saffron-lip-balm",
    category: "Lip Care",
    price: 449,
    originalPrice: 499,
    description: "A rich, nourishing balm with saffron for soft, brightened lips.",
    longDescription:
      "Saffron Lip Balm melts into lips with a rich, buttery texture, delivering deep nourishment and a subtle brightening effect. A little jar of comfort for daily lip care.",
    image: saffronLipBalm,
    secondaryImage: heroBotanical,
    rating: 4.7,
    reviewCount: 104,
    ingredients: ["Saffron Extract", "Cocoa Butter", "Beeswax", "Vitamin E"],
    benefits: ["Deep nourishment", "Brightens lips", "Long-lasting comfort"],
    howToUse: "Apply generously to lips whenever needed throughout the day.",
    stock: 60,
    tags: ["lip", "balm", "saffron", "nourishing"],
  },
  {
    id: 11,
    name: "Vetiver Body Wash",
    slug: "vetiver-body-wash",
    category: "Body Care",
    price: 699,
    originalPrice: 799,
    description: "A grounding botanical body wash scented with earthy vetiver.",
    longDescription:
      "Vetiver Body Wash cleanses gently while enveloping you in an earthy, grounding fragrance. Infused with botanical extracts, it leaves skin feeling clean, soft and calm — never stripped.",
    image: vetiverBodyWash,
    secondaryImage: greenLeavesBeige,
    rating: 4.4,
    reviewCount: 58,
    ingredients: ["Vetiver Extract", "Coconut-derived Cleansers", "Aloe Vera"],
    benefits: ["Gentle cleansing", "Grounding fragrance", "Soft skin feel"],
    howToUse: "Lather onto wet skin in the shower and rinse thoroughly.",
    stock: 33,
    tags: ["body", "wash", "vetiver", "cleansing"],
  },
  {
    id: 12,
    name: "Hibiscus Hair Mask",
    slug: "hibiscus-hair-mask",
    category: "Hair Care",
    price: 999,
    originalPrice: 1149,
    description: "A deep-conditioning mask with hibiscus for stronger, fuller-looking hair.",
    longDescription:
      "Hibiscus Hair Mask is a deep-conditioning treatment traditionally used to strengthen and add fullness to hair. Rich in botanical extracts, it leaves strands feeling nourished, soft and revitalised.",
    image: hibiscusHairMask,
    secondaryImage: hibiscusImg,
    rating: 4.6,
    reviewCount: 72,
    ingredients: ["Hibiscus Extract", "Fenugreek", "Coconut Oil", "Amla Extract"],
    benefits: ["Strengthens hair", "Adds fullness", "Deep conditioning"],
    howToUse: "Apply generously to damp hair, leave for 20 minutes, then rinse and shampoo.",
    stock: 20,
    tags: ["hair", "mask", "hibiscus", "strengthening"],
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductById = (id) => products.find((p) => p.id === Number(id));
export const getRelatedProducts = (product, count = 4) =>
  products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, count);
