import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const prodContext = createContext();

const fetchCategories = async () => {
  try {
    const response = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
    
    
    return response.data.data;
  } catch (error) {
    console.error("Failed to load categories:", error);
  }
};

export function ProdProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetchCategories(); // ✅
      if (res) setProducts(res);         // ✅
    };

    loadProducts();
  }, []);

  return (
    <prodContext.Provider value={{ products, setProducts }}>
      {children}
    </prodContext.Provider>
  );
}