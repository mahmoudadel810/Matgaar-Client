import React from "react";
import { ShoppingCart, Star ,Heart} from "lucide-react";
import { Link } from "react-router-dom";
import { prodContext } from "../../contexts/product.context";



export default function ProductsSection() {
  const { products } = React.useContext(prodContext);
  return (
    <section className="bg-gray-50 border-y border-gray-100 f">
      <div className="mx-auto container px-4 md:px-6 py-12 md:py-16">
        <div className="flex justify-between items-center sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured <span className="text-green-600">products</span></h2>
            
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full border-2 border-green-600 px-5 py-2.5 text-sm font-semibold text-green-600 transition hover:bg-green-600 hover:text-white"
          >
            See full shop
          </Link>
        </div>

        <div className="grid  sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={p.imageCover}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {p.slug && (
                  <span className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    {p.slug}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5 ">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <div className="mt-2 flex items-center justify-between gap-1 text-amber-500">
                  <div flex items-center gap-2 className="flex"> 
                    <Star className="h-4 w-4 fill-current" aria-hidden />
                  <span className="text-sm font-medium text-gray-700">{p.ratingsAverage}</span>
                  </div>
                  <Heart/>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3  ">
                  <p className="text-xl font-bold text-green-700">
                    {p.quantity} <span className="text-sm font-normal text-gray-500">EGP / {p.price}</span>
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
