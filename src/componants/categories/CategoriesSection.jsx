import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";
import { CategContext } from "../../contexts/categories.context.jsx";

export default function CategoriesSection() {
  const { categories } = React.useContext(CategContext);

  const myRef = React.useRef({}); // ✅ object مش undefined

  const getCategoriesId = (id) => {
    const el = myRef.current[id];
    //console.log("ID:", el.id); // ✅ هيطبع الـ _id
  };

  return (
    <section className="container  mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="flex sm:items-end justify-between items-center gap-4 mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Shop by <span className="text-green-600 font-semibold">category</span>
        </h2>
        <Link
          to="/categories"
          className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700"
        >
          View all
          <LinkIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-6 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {categories.map((category) => (
          <Link
            id={category._id}
            ref={(el) => (myRef.current[category._id] = el)} // ✅
            key={category._id}
            onClick={() => getCategoriesId(category._id)}    // ✅ pass الـ id
            to={`/categories/${category._id}`}
            className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-green-200 hover:shadow-md"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-14 h-14 rounded-2xl object-cover"
            />
            <span className="mt-4 text-center font-semibold text-gray-800 group-hover:text-green-700">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}