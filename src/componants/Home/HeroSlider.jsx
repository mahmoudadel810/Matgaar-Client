import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Fresh groceries, delivered fast",
    subtitle: "Up to 30% off your first order — quality you can taste.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    cta: "Shop now",
    href: "/shop",
  },
  {
    id: 2,
    title: "Seasonal fruits & organic picks",
    subtitle: "Handpicked daily from trusted local suppliers.",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368174cf?auto=format&fit=crop&w=1600&q=80",
    cta: "Browse produce",
    href: "/shop",
  },
  {
    id: 3,
    title: "Pantry essentials in one place",
    subtitle: "Stock up on dairy, snacks, and more with free shipping over 500 EGP.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80",
    cta: "View deals",
    href: "/shop",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <section className="relative w-full overflow-hidden bg-gray-900" aria-roledescription="carousel">
      <div className="relative aspect-[21/9] min-h-[280px] max-h-[520px] md:min-h-[320px]">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <img
              src={s.image}
              alt=""
              className="absolute w-full h-full inset-0 object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
            <div className="relative z-10 flex h-full max-w-7xl mx-auto px-4 md:px-6 items-center">
              <div className="max-w-xl text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {s.title}
                </h2>
                <p className="mt-3 md:mt-4 text-base md:text-lg text-white/90">
                  {s.subtitle}
                </p>
                <Link
                  to={s.href}
                  className="mt-6 inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                >
                  {s.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <dev className="absolute bottom-0 left-0 right-0 top-0  z-30 bg-green-500/50">
        <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-2 md:left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 shadow-md transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-2 md:right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 shadow-md transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
        </dev>
        
     

      

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-green-500" : "w-2.5 bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </section>
  );
}
