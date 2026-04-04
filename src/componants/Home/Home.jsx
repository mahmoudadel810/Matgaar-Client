import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HeroSlider from "./HeroSlider";
import CategoriesSection from "./CategoriesSection";
import ProductsSection from "./ProductsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <CategoriesSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
}
