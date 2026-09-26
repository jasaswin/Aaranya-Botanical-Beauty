import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Heart, ShoppingBag, Check, ChevronDown } from "lucide-react";
import Rating from "../components/Rating";
import QuantitySelector from "../components/QuantitySelector";
import ProductGrid from "../components/ProductGrid";
import SectionHeading from "../components/SectionHeading";
import { getProductById, getRelatedProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useToast } from "../context/ToastContext";
import { formatCurrency } from "../utils/formatCurrency";

const TABS = ["Ingredients", "Benefits", "How to Use"];

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openTab, setOpenTab] = useState("Ingredients");
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  if (!product) return <Navigate to="/404" replace />;

  const images = [product.image, product.secondaryImage].filter(Boolean);
  const inWishlist = isInWishlist(product.id);
  const related = getRelatedProducts(product);

  function handleAddToCart() {
    addToCart(product, quantity);
    showToast(`${product.name} added to cart`);
  }

  function handleBuyNow() {
    addToCart(product, quantity);
    window.location.href = "/checkout";
  }

  function handleWishlist() {
    toggleWishlist(product);
    showToast(inWishlist ? "Removed from wishlist" : "Added to wishlist");
  }

  return (
    <div className="pt-28 md:pt-32 pb-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs font-sans text-charcoal/50 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-forest">Home</Link> /{" "}
          <Link to="/shop" className="hover:text-forest">Shop</Link> /{" "}
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-square bg-sand/40 overflow-hidden mb-3">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-20 overflow-hidden border-2 ${
                      activeImage === i ? "border-gold" : "border-transparent"
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-xs tracking-widest2 uppercase text-sage font-sans mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-forest mb-3">{product.name}</h1>
            <div className="mb-4">
              <Rating value={product.rating} reviewCount={product.reviewCount} size={15} />
            </div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-sans text-2xl text-charcoal">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="font-sans text-base text-charcoal/40 line-through">
                    {formatCurrency(product.originalPrice)}
                  </span>
                  <span className="text-xs font-sans text-rose">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                  </span>
                </>
              )}
            </div>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-8">
              {product.longDescription}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-widest2 font-sans text-charcoal/50">
                Quantity
              </span>
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity((q) => q + 1)}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-forest text-offwhite text-xs uppercase tracking-widest2 font-sans py-4 hover:bg-charcoal transition-colors"
              >
                <ShoppingBag size={15} /> Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 border border-forest text-forest text-xs uppercase tracking-widest2 font-sans py-4 hover:bg-forest hover:text-offwhite transition-colors"
              >
                Buy Now
              </button>
              <button
                onClick={handleWishlist}
                aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
                aria-pressed={inWishlist}
                className="w-14 h-14 flex-shrink-0 border border-charcoal/20 flex items-center justify-center hover:border-rose transition-colors self-center sm:self-auto"
              >
                <Heart size={18} className={inWishlist ? "fill-rose text-rose" : "text-charcoal"} />
              </button>
            </div>

            {product.stock > 0 ? (
              <p className="text-xs font-sans text-sage flex items-center gap-1.5">
                <Check size={13} /> In stock, ready to ship
              </p>
            ) : (
              <p className="text-xs font-sans text-rose">Out of stock</p>
            )}

            {/* Accordion tabs */}
            <div className="mt-10 border-t border-charcoal/10">
              {TABS.map((tab) => (
                <div key={tab} className="border-b border-charcoal/10">
                  <button
                    onClick={() => setOpenTab(openTab === tab ? null : tab)}
                    className="w-full flex items-center justify-between py-4 text-left"
                    aria-expanded={openTab === tab}
                  >
                    <span className="font-serif text-lg text-forest">{tab}</span>
                    <ChevronDown
                      size={18}
                      className={`text-charcoal/50 transition-transform ${
                        openTab === tab ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openTab === tab && (
                    <div className="pb-5 font-sans text-sm text-charcoal/70 leading-relaxed animate-fade-in">
                      {tab === "Ingredients" && (
                        <ul className="list-disc list-inside space-y-1">
                          {product.ingredients.map((ing) => (
                            <li key={ing}>{ing}</li>
                          ))}
                        </ul>
                      )}
                      {tab === "Benefits" && (
                        <ul className="list-disc list-inside space-y-1">
                          {product.benefits.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}
                      {tab === "How to Use" && <p>{product.howToUse}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24">
            <SectionHeading label="You May Also Like" title="Related Rituals" className="mb-10" />
            <ProductGrid products={related} />
          </div>
        )}
      </div>
    </div>
  );
}
