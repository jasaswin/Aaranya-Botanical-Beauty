import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import ProductGrid from "../components/ProductGrid";
import QuickViewModal from "../components/QuickViewModal";
import { products } from "../data/products";

const CATEGORIES = ["Lip Care", "Skin Care", "Hair Care", "Body Care"];
const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Rating" },
  { value: "newest", label: "Newest" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "";
  const searchTerm = searchParams.get("q") || "";
  const sortBy = searchParams.get("sort") || "featured";
  const maxPrice = Number(searchParams.get("maxPrice")) || 2000;
  const minRating = Number(searchParams.get("minRating")) || 0;

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams);
    if (value === "" || value === null) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  }

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    list = list.filter((p) => p.price <= maxPrice);
    list = list.filter((p) => p.rating >= minRating);

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        list.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return list;
  }, [activeCategory, searchTerm, sortBy, maxPrice, minRating]);

  function clearFilters() {
    setSearchParams({});
  }

  const hasActiveFilters = activeCategory || searchTerm || maxPrice < 2000 || minRating > 0;

  return (
    <div className="pt-28 md:pt-32 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-10">
          <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-3">
            Full Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-forest mb-3">Shop All Rituals</h1>
          <p className="font-sans text-sm text-charcoal/60">{filtered.length} products</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters sidebar (desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0 space-y-8">
            <FilterPanel
              activeCategory={activeCategory}
              onCategoryChange={(val) => updateParam("category", val)}
              maxPrice={maxPrice}
              onMaxPriceChange={(val) => updateParam("maxPrice", val)}
              minRating={minRating}
              onMinRatingChange={(val) => updateParam("minRating", val)}
              onClear={clearFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </aside>

          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-charcoal/10">
              <button
                onClick={() => setFiltersOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 text-xs uppercase tracking-widest2 font-sans text-forest"
              >
                <SlidersHorizontal size={15} /> Filters
              </button>
              {searchTerm && (
                <p className="hidden lg:block text-sm font-sans text-charcoal/60">
                  Results for &ldquo;{searchTerm}&rdquo;
                </p>
              )}
              <div className="ml-auto flex items-center gap-2">
                <label htmlFor="sort" className="text-xs uppercase tracking-widest2 font-sans text-charcoal/50 hidden sm:block">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => updateParam("sort", e.target.value)}
                  className="bg-offwhite border border-charcoal/20 text-sm font-sans px-3 py-2 outline-none focus:border-forest"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <ProductGrid products={filtered} onQuickView={setQuickViewProduct} />
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <div className="absolute inset-0 bg-charcoal/50" onClick={() => setFiltersOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-[85%] max-w-xs bg-offwhite p-6 overflow-y-auto thin-scroll">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-forest">Filters</h2>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X size={20} />
              </button>
            </div>
            <FilterPanel
              activeCategory={activeCategory}
              onCategoryChange={(val) => updateParam("category", val)}
              maxPrice={maxPrice}
              onMaxPriceChange={(val) => updateParam("maxPrice", val)}
              minRating={minRating}
              onMinRatingChange={(val) => updateParam("minRating", val)}
              onClear={clearFilters}
              hasActiveFilters={hasActiveFilters}
            />
            <button
              onClick={() => setFiltersOpen(false)}
              className="mt-8 w-full bg-forest text-offwhite text-xs uppercase tracking-widest2 font-sans py-3"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}

      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </div>
  );
}

function FilterPanel({
  activeCategory,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
  minRating,
  onMinRatingChange,
  onClear,
  hasActiveFilters,
}) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs tracking-widest2 uppercase text-forest font-sans mb-4">Category</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onCategoryChange("")}
              className={`text-sm font-sans ${!activeCategory ? "text-forest font-semibold" : "text-charcoal/60"} hover:text-forest transition-colors`}
            >
              All Categories
            </button>
          </li>
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onCategoryChange(cat)}
                className={`text-sm font-sans ${activeCategory === cat ? "text-forest font-semibold" : "text-charcoal/60"} hover:text-forest transition-colors`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs tracking-widest2 uppercase text-forest font-sans mb-4">
          Max Price: ₹{maxPrice}
        </h3>
        <input
          type="range"
          min="400"
          max="2000"
          step="100"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
          className="w-full accent-forest"
        />
      </div>

      <div>
        <h3 className="text-xs tracking-widest2 uppercase text-forest font-sans mb-4">Rating</h3>
        <ul className="space-y-2">
          {[0, 4, 4.5].map((r) => (
            <li key={r}>
              <button
                onClick={() => onMinRatingChange(r || "")}
                className={`text-sm font-sans ${minRating === r ? "text-forest font-semibold" : "text-charcoal/60"} hover:text-forest transition-colors`}
              >
                {r === 0 ? "All Ratings" : `${r}+ Stars`}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {hasActiveFilters && (
        <button
          onClick={onClear}
          className="text-xs uppercase tracking-widest2 font-sans text-rose hover:text-charcoal transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}
