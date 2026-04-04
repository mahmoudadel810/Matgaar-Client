import React from "react";
import { Apple, Carrot, Milk, Croissant, Coffee, Cookie, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Fruits", icon: Apple, color: "bg-red-50 text-red-600 ring-red-100" },
  { name: "Vegetables", icon: Carrot, color: "bg-orange-50 text-orange-600 ring-orange-100" },
  { name: "Dairy", icon: Milk, color: "bg-sky-50 text-sky-600 ring-sky-100" },
  { name: "Bakery", icon: Croissant, color: "bg-amber-50 text-amber-700 ring-amber-100" },
  { name: "Beverages", icon: Coffee, color: "bg-stone-50 text-stone-700 ring-stone-200" },
  { name: "Snacks", icon: Cookie, color: "bg-lime-50 text-lime-700 ring-lime-100" },
];

export default function CategoriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shop by category</h2>
          <p className="mt-2 text-gray-600 max-w-xl">
            Find what you need faster — browse our most popular departments.
          </p>
        </div>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700"
        >
          View all
          <LinkIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
        {categories.map(({ name, icon: Icon, color }) => (
          <Link
            key={name}
            to="/shop"
            className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-green-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${color} transition group-hover:scale-105`}
            >
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <span className="mt-4 text-center font-semibold text-gray-800 group-hover:text-green-700">
              {name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
