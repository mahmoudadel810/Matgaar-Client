import React, { useMemo, useState } from "react";

export default function Cart() {
  const [item, setItem] = useState({
    id: 1,
    name: "Salah Track Top",
    category: "Men's Fashion",
    price: 1094,
    quantity: 1,
  });

  const subtotal = useMemo(
    () => item.price * item.quantity,
    [item.price, item.quantity],
  );

  const increaseQty = () => {
    setItem((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseQty = () => {
    setItem((prev) => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }));
  };

  const clearItem = () => {
    setItem((prev) => ({ ...prev, quantity: 1 }));
  };

  return (
    <section className="min-h-screen bg-slate-50 ">
      <div className=" flex flex-col items-start container  mx-auto  mt-24 justify-center  px-4 py-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 flex items-center gap-2 text-xs text-slate-500"
        >
          <span>Home</span>
          <span>/</span>
          <span className="font-medium text-slate-700">Shopping Cart</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900">Shopping Cart</h1>
          <p className="mt-1 text-sm text-slate-500">
            You have{" "}
            <span className="font-semibold text-emerald-600">1 item</span> in
            your cart
          </p>
        </div>

        <div className="grid gap-7 w-full lg:grid-cols-12">
          <div className="col-span-8">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 text-5xl">
                    👕
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {item.name}
                    </h2>
                    <p className="text-xs text-emerald-600">{item.category}</p>
                    <p className="mt-2 text-xl font-bold text-emerald-600">
                      {item.price.toLocaleString()} EGP
                    </p>

                    <div className="mt-3 inline-flex items-center rounded-md border border-slate-200">
                      <button
                        type="button"
                        onClick={decreaseQty}
                        className="h-8 w-8 text-lg text-slate-600 transition hover:bg-slate-100"
                      >
                        -
                      </button>
                      <span className="w-10 text-center text-sm font-semibold text-slate-800">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={increaseQty}
                        className="h-8 w-8 text-lg text-white transition hover:bg-emerald-700 bg-emerald-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs text-slate-400">Total</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {subtotal.toLocaleString()} EGP
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <button
                type="button"
                className="text-emerald-600 transition hover:text-emerald-700"
              >
                Continue Shopping
              </button>
              <button
                type="button"
                onClick={clearItem}
                className="text-slate-400 transition hover:text-slate-600"
              >
                Clear all items
              </button>
            </div>
          </div>

          <aside className="col-span-4">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-slate-950 px-4 py-3">
                <h3 className="text-lg font-semibold text-white">
                  Order Summary
                </h3>
              </div>

              <div className="space-y-3 p-4 text-sm">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Subtotal (1 items)</span>
                  <span>{subtotal.toLocaleString()} EGP</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-medium text-emerald-600">
                    Calculated at checkout
                  </span>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">
                      Estimated Total
                    </span>
                    <span className="text-lg font-bold text-emerald-600">
                      {subtotal.toLocaleString()} EGP
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-2 w-full rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Login to Checkout
                </button>

                <p className="text-center text-xs text-slate-400">
                  Don&apos;t have an account?{" "}
                  <span className="cursor-pointer text-emerald-600">
                    Sign up
                  </span>
                </p>

                <ul className="space-y-1 border-t border-slate-100 pt-3 text-xs text-slate-400">
                  <li>✓ Your cart items will be saved</li>
                  <li>✓ Track your orders easily</li>
                  <li>✓ Access exclusive member deals</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
