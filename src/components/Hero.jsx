import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="h-screen relative flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/download.webp')",
        backgroundSize: "cover",
        backgroundPosition: `center ${offset * 0.3}px`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade">
        <p className="text-xs md:text-sm tracking-[0.3em] text-pink-200 mb-3">
          THE WEDDING OF
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Raka & Sinta
        </h1>

        <p className="text-base md:text-lg text-gray-200 mb-8">
          12 Desember 2026
        </p>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm text-pink-300 mb-1">Scroll</span>
          <span className="text-xl">↓</span>
        </div>
      </div>
    </section>
  );
}
