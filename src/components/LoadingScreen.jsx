import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-forest flex flex-col items-center justify-center gap-4 transition-opacity duration-500">
      <Logo variant="light" size="large" />
      <p className="text-offwhite/70 text-xs tracking-widest2 uppercase font-sans">
        Botanical Beauty, Thoughtfully Made
      </p>
    </div>
  );
}
