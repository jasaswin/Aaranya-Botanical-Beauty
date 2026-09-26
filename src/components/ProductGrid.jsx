import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onQuickView }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="font-serif text-2xl text-forest mb-2">No products found.</p>
        <p className="text-sm text-charcoal/60 font-sans">
          Try adjusting your filters or search term.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  );
}
