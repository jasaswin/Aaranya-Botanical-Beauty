import { useState } from "react";

export default function Newsletter({ variant = "section" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'success' | 'error'

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <div className={variant === "footer" ? "" : "max-w-xl mx-auto text-center"}>
      {variant !== "footer" && (
        <>
          <h2 className="font-serif text-3xl md:text-4xl text-offwhite mb-3">
            Stay close to nature.
          </h2>
          <p className="text-offwhite/70 font-sans text-sm mb-6">
            Receive botanical rituals, journal stories and early access to new collections.
          </p>
        </>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus(null);
          }}
          placeholder="YOUR EMAIL"
          aria-label="Email address"
          className="flex-1 bg-transparent border border-offwhite/30 text-offwhite placeholder:text-offwhite/50 px-4 py-3 text-xs tracking-widest2 uppercase font-sans outline-none focus:border-gold"
        />
        <button
          type="submit"
          className="bg-gold text-offwhite text-xs tracking-widest2 uppercase font-sans px-6 py-3 hover:bg-offwhite hover:text-forest transition-colors whitespace-nowrap"
        >
          Join Aaranya
        </button>
      </form>
      {status === "success" && (
        <p className="text-gold text-xs font-sans mt-3">Welcome to the ritual. Check your inbox.</p>
      )}
      {status === "error" && (
        <p className="text-rose text-xs font-sans mt-3">Please enter a valid email address.</p>
      )}
    </div>
  );
}
