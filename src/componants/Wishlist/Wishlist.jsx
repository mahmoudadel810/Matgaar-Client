import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ScanHeart } from "lucide-react";
import React from "react";
import { useState } from "react";
import { ReloadDots } from "../loading/loading";



export default function Wishlist() {
  const queryClient = useQueryClient();
  const [cartItems] = useState([]);
  const userToken = localStorage.getItem("userToken");

  const handleDeleteFromWishlist = async (productId) => {
    try {
      await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        headers: {
          token: userToken,
        },
      });
      
      
      queryClient.invalidateQueries(["dataOfWhisList"]);
      alert("Product removed from wishlist");
    } catch (error) {
      console.error("Error deleting product from wishlist:", error);
    }
  };

  //console.log(userToken);
  

  function getWhishlList() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers: {
          token: userToken,
        },
      })
      .then((res) => res.data.data);
  }
  
  let { isLoading, data } = useQuery({
    queryKey: ["dataOfWhisList"],
    queryFn: getWhishlList,
  });
  
  
  // we need to map data to items state

  //add to cart function
  const addToCart = async (productId) => {
    try {
        const response = await axios.post('https://ecommerce.routemisr.com/api/v1/cart', { productId }, {
          headers: {
            token: userToken,   
            },
        });
        console.log(response);
        if (response.status === 200){
            alert(response.data.message);
        }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="">
      <div className="container mx-auto  px-4 md:px-6 py-4 mt-20">
        <span className="text-sm text-gray-500">
          <a href="/" className="hover:text-green-500 me-1">
            Home
          </a>
          / <span className="text-gray-950 ms-1">Wishlist</span>
        </span>
        {/**
        header
         */}
        <div className="header flex items-center gap-4 mt-4 mb-8">
          <ScanHeart className="w-10 h-10 text-red-500 fill-current" />
          <div className="header-bdy">
            <h2 className="text-black text-2xl font-bold">My Wishlist</h2>
            <p>{data?.length || 0} items</p>
          </div>
        </div>

        {/* Table */}
        <div className="min-h-screen bg-gray-50 py-10 px-4">
          <div className=" mx-auto">
            {/* Table Header */}
            <div className="grid grid-cols-12 px-4 pb-3 border-b border-gray-200">
              <div className="col-span-6 text-sm text-gray-500 font-medium">
                Product
              </div>
              <div className="col-span-2 text-sm text-gray-500 font-medium text-center">
                Price
              </div>
              <div className="col-span-2 text-sm text-gray-500 font-medium text-center">
                Status
              </div>
              <div className="col-span-2 text-sm text-gray-500 font-medium text-right">
                Actions
              </div>
            </div>

            {/* Items */}
            <div className="bg-white rounded-xl shadow-sm mt-2 divide-y divide-gray-100">
              {data?.length === 0 ? (
                <div className="py-16 text-center text-gray-400 text-sm">
                  Your wishlist is empty.
                </div>
              ) : (isLoading ? <ReloadDots/> : data?.map((item) => (
                  <div
                    key={item._id}
                    className="grid grid-cols-12 items-center px-4 py-5 hover:bg-gray-50 transition-colors duration-150"
                  >
                    {/* Product Info */}
                    <div className="col-span-6 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img
                          src={item.imageCover}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {item.category.name}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-center">
                      <span className="text-sm font-bold text-gray-800">
                        {item.price} EGP
                      </span>
                    </div>

                    {/* Status */}
                    <div className="col-span-2 flex justify-center">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                          item.inStock
                            ? "text-green-600 bg-green-50"
                            : "text-red-500 bg-red-50"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.quantity > 0 ? "bg-green-500" : "bg-red-400"
                          }`}
                        />
                        {item.quantity > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 flex items-center justify-end gap-2">
                      <button
                        onClick={() => addToCart(item._id)}
                        disabled={item.quantity <= 0 || cartItems.includes(item._id)}
                        className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                          cartItems.includes(item._id)
                            ? "bg-green-700 text-white cursor-default"
                            : item.quantity > 0
                              ? "bg-green-500 hover:bg-green-600 text-white active:scale-95"
                              : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h11M10 19a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                        Add to Cart
                                              
                         </button>

                      <button
                        onClick={() => handleDeleteFromWishlist(item._id)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all duration-150 active:scale-95"
                        title="Remove from wishlist"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4h6v3M3 7h18"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <a
                href="/shop"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors duration-150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
