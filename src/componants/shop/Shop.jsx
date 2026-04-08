import React from 'react'
import ProductsSection from '../Home/ProductsSection'


export default function shop() {
  return (
    <div>
      
      <header className="bg-emerald-400 border-b border-gray-100 p-40">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Shop</h1>
        </div>
      </header>
      <ProductsSection/>
    </div>
  )
}
