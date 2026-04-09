import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const fetchCategories = async () => {
  try {
    const response = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    return response.data.data;
  } catch (error) {
    console.error("Failed to load categories:", error);
  }
};

export function CartProvider({ children }) {
  const [cart, setCart ] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const res = await fetchCategories(); // ✅
      if (res) setCart(res);         // ✅
    };

    loadCategories();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}