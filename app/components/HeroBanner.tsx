"use client";
import { useState, useEffect } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&fit=crop",
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-dark/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-secondary drop-shadow-lg">LUMIQ</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-2">
              Decoración 3D
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Transforma tu espacio con productos únicos impresos en 3D. Lámparas,
            porta lápices y más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-dark px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Ver Productos
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-dark px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
              Conoce Más
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
