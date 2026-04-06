import React, { useState } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X, Headphones, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  return (
    <header className="w-full border-b">
      {/* Top Bar (desktop only) */}
      <div className="lg:flex md:flex sm:hidden justify-between items-center text-sm px-6 py-2 bg-gray-50  ">
        <div className="flex gap-6">
          <span>🚚 Free Shipping on Orders 500 EGP</span>
          <span>🆕 New Arrivals Daily</span>
        </div>
        <div className="flex gap-6 items-center">
          <span>📞 +1 (800) 123-4567</span>
          <span>✉️ support@freshcart.com</span>
          <button className="hover:text-green-600">Sign In</button>
          <button className="hover:text-green-600">Sign Up</button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4 fixed z-50 w-full bg-white scrolling-touch">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <div className="flex items-center gap-2">
            <div className="text-green-600 text-2xl">🛒</div>
            <h1 className="text-lg md:text-xl font-bold">FreshCart</h1>
          </div>
        </div>

        {/* Search */}
        <div className=" md:flex lg:flex sm:hidden items-center w-1/3 border-2 border-green-500 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-green-400 transition">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 px-4 py-2 outline-none"
          />
          <button className="bg-green-600 text-white p-3">
            <Search size={18} />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className=" sm:hidden md:flex lg:flex  items-center gap-6">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Shop</a>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center gap-1 hover:text-green-600"
            >
              Categories <ChevronDown size={16} />
            </button>

            {catOpen && (
              <div className="absolute top-8 left-0 bg-white border rounded-lg shadow-lg w-40">
                <a className="block px-4 py-2 hover:bg-green-50">Fruits</a>
                <a className="block px-4 py-2 hover:bg-green-50">Vegetables</a>
                <a className="block px-4 py-2 hover:bg-green-50">Dairy</a>
                <a className="block px-4 py-2 hover:bg-green-50">Snacks</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-green-600">Brands</a>

          <a href="#" className="flex items-center gap-1 text-green-600">
            🎧 Support
          </a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Heart className=" md:block hover:text-green-600 cursor-pointer" />

          <div className="relative  sm:hidden  lg:flex  md:block">
            <ShoppingCart className="cursor-pointer hover:text-green-600" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full">
              1
            </span>
          </div>

          <button className="md:flex sm:hidden items-center gap-2 border-2 border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition">
            <User size={16} />
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile + Tablet Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="relative bg-white w-72 h-full p-5 flex flex-col gap-6 shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="text-green-600 text-xl">🛒</div>
                <h1 className="font-bold">FreshCart</h1>
              </div>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            {/* Search */}
            <div className="flex items-center border-2 border-green-500 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-3 py-2 outline-none"
              />
              <button className="bg-green-600 text-white p-2">
                <Search size={16} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4 text-gray-700">
              <a href="#">Home</a>
              <a href="#">Shop</a>

              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setCatOpen(!catOpen)}
                  className="flex items-center justify-between w-full"
                >
                  Categories <ChevronDown size={16} />
                </button>

                {catOpen && (
                  <div className="ml-3 mt-2 flex flex-col gap-2 text-sm">
                    <a>Fruits</a>
                    <a>Vegetables</a>
                    <a>Dairy</a>
                    <a>Snacks</a>
                  </div>
                )}
              </div>

              <a href="#">Brands</a>
            </nav>

            <hr />

            {/* Wishlist & Cart */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Heart className="text-red-500" /> Wishlist
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="text-green-600" /> Cart
                </div>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                  1
                </span>
              </div>
            </div>

            <hr />

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:opacity-90">
                Sign In
              </button>
              <button className="flex-1 border-2 border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-600 hover:text-white transition">
                Sign Up
              </button>
            </div>

            {/* Support */}
            <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
              <Headphones className="text-green-600" />
              <div>
                <p className="text-sm">Need Help?</p>
                <p className="text-green-600 text-sm">Contact Support</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
