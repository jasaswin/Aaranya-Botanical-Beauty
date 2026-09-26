export default function SectionHeading({ label, title, align = "left", className = "" }) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {label && (
        <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-3">{label}</p>
      )}
      {title && (
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest leading-tight">
          {title}
        </h2>
      )}
    </div>
  );
}
