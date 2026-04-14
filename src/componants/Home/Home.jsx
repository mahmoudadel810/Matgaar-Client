

import ProductsSection from "./ProductsSection";
import HeroSlider from "../MainSlider/HeroSlider";
import CategoriesSection from "../categories/CategoriesSection";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      <main className="flex-1 ">
        <HeroSlider />
        <CategoriesSection />
        <ProductsSection />
      </main>
      
    </div>
  );
}
