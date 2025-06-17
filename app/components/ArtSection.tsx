"use client";
import { useState, useEffect } from "react";

export default function ArtSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("art-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="art-section"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/20 rounded-full blur-lg animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block text-yellow-300 drop-shadow-lg">PON</span>
            <span className="block text-pink-300 drop-shadow-lg">ARTE</span>
            <span className="block text-cyan-300 drop-shadow-lg">EN TU</span>
            <span className="block text-green-300 drop-shadow-lg text-5xl md:text-7xl lg:text-8xl">
              MESA DE LUZ
            </span>
          </h2>

          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              Cada pieza es única, diseñada para iluminar tu creatividad y dar
              vida a tus espacios favoritos
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["✨ Único", "🎨 Creativo", "💡 Iluminado", "🔥 Moderno"].map(
                (item, index) => (
                  <span
                    key={index}
                    className={`bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold text-lg border border-white/30 transition-all duration-700 hover:scale-110 hover:bg-white/30 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <button className="group bg-white text-purple-600 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-300 flex items-center gap-3 mx-auto">
              <span>¡Descubre la Magia!</span>
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
