import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategContext = createContext();

const fetchCategories = async () => {
  try {
    const response = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    return response.data.data;
  } catch (error) {
    console.error("Failed to load categories:", error);
  }
};

export function CategProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const res = await fetchCategories(); // ✅
      if (res) setCategories(res);         // ✅
    };

    loadCategories();
  }, []);

  return (
    <CategContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategContext.Provider>
  );
}