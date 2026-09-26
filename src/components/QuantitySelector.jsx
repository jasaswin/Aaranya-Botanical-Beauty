import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({ quantity, onIncrease, onDecrease, min = 1 }) {
  return (
    <div className="inline-flex items-center border border-charcoal/20">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="w-9 h-9 flex items-center justify-center text-charcoal hover:bg-sand/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center text-sm font-sans" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="w-9 h-9 flex items-center justify-center text-charcoal hover:bg-sand/60 transition-colors"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
