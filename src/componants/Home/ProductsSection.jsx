import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "1",
    name: "Organic tomatoes",
    price: 45,
    unit: "kg",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    badge: "Fresh",
  },
  {
    id: "2",
    name: "Whole milk 1L",
    price: 32,
    unit: "bottle",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Mixed salad bowl",
    price: 55,
    unit: "each",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    badge: "Popular",
  },
  {
    id: "4",
    name: "Artisan sourdough",
    price: 28,
    unit: "loaf",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "5",
    name: "Fresh oranges",
    price: 39,
    unit: "kg",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "6",
    name: "Greek yogurt",
    price: 42,
    unit: "500g",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80",
    badge: "Deal",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured products</h2>
            <p className="mt-2 text-gray-600 max-w-xl">
              Customer favorites with great ratings — add them to your cart in one tap.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full border-2 border-green-600 px-5 py-2.5 text-sm font-semibold text-green-600 transition hover:bg-green-600 hover:text-white"
          >
            See full shop
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <div className="mt-2 flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" aria-hidden />
                  <span className="text-sm font-medium text-gray-700">{p.rating}</span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-xl font-bold text-green-700">
                    {p.price} <span className="text-sm font-normal text-gray-500">EGP / {p.unit}</span>
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
