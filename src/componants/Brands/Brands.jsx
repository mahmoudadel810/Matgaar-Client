import React from "react";

const brands = [
  "Canon",
  "Dell",
  "Lenovo",
  "SONY",
  "Infinix",
  "Realme",
  "HONOR",
  "Nokia",
  "OPPO",
  "Huawei",
  "Apple",
  "Xiaomi",
];

export default function Brands() {
  return (
    <div className="min-h-screen mt-20 bg-slate-100">
      <section className="bg-gradient-to-r from-indigo-700 via-violet-600 to-fuchsia-500">
        <div className="mx-auto max-w-6xl px-6 py-10 text-white">
          <p className="text-sm text-white/80">
            Home <span className="mx-2">/</span> Brands
          </p>

          <div className="mt-6 flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <span className="text-xl">🏷️</span>
            </div>

            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">Top Brands</h1>
              <p className="mt-1 text-white/90">Shop from your favorite brands</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto container px-6 py-8">
        <div className="grid grid-cols-5 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <article
              key={brand}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 flex h-24 items-center justify-center rounded-lg bg-slate-50">
                <span className="text-2xl font-bold tracking-wide text-slate-900">
                  {brand}
                </span>
              </div>
              <p className="text-center text-sm font-medium text-slate-700">{brand}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
