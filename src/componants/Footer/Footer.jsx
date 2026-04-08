import React from 'react'

const features = [
  {
    title: 'Free Shipping',
    subtitle: 'On orders over $100',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7h11v9H3z" />
        <path d="M14 10h3l4 3v3h-7z" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="17.5" cy="17.5" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'Easy Returns',
    subtitle: '14-day return policy',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12a8 8 0 1 0 3-6.2" />
        <path d="M4 4v4h4" />
      </svg>
    ),
  },
  {
    title: 'Secure Payment',
    subtitle: '100% secure checkout',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 3v5c0 5-3.2 8-7 10-3.8-2-7-5-7-10V6l7-3z" />
        <path d="M9.5 12.5l1.8 1.8 3.2-3.6" />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    subtitle: 'Contact us anytime',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 5h16v10H7l-3 3z" />
        <path d="M8 9h8M8 12h5" />
      </svg>
    ),
  },
]

const columns = {
  shop: ['All Products', 'Categories', 'Brands', 'Electronics', "Men's Fashion", "Women's Fashion"],
  account: ['My Account', 'Order History', 'Wishlist', 'Shopping Cart', 'Sign In', 'Create Account'],
  support: ['Contact Us', 'Help Center', 'Shipping Info', 'Returns & Refunds', 'Track Order'],
  legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const socials = ['f', 'x', 'ig', 'yt']

export default function Footer() {
  return (
    <footer className="w-full">
      <section className="border-y border-emerald-100 bg-emerald-50">
        <div className=" grid grid-cols-4 mx-auto w-full container gap-4 px-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div key={item.title} className="flex items-center  gap-3 rounded-md px-2 py-1">
              <span className="mt-0.5 rounded-full bg-emerald-100 p-2 text-emerald-600">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                <p className="text-xs text-slate-500">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-slate-300">
        <div className="mx-auto grid grid-cols-6  w-full container gap-x-20 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-5 inline-flex items-center rounded-md bg-white/95 px-3 py-2 text-slate-900">
              <span className="mr-2 text-emerald-500">🛒</span>
              <span className="text-lg font-bold">FreshCart</span>
            </div>
            <p className="mb-5 max-w-md text-sm leading-6 text-slate-400">
              FreshCart is your one-stop destination for quality products. From fashion to electronics,
              we bring you the best brands at competitive prices with a seamless shopping experience.
            </p>

            <ul className="space-y-2 text-sm text-slate-400">
              <li>+1 (800) 123-4567</li>
              <li>support@freshcart.com</li>
              <li>123 Commerce Street, New York, NY 10001</li>
            </ul>

            <div className="mt-5 flex items-center gap-2">
              {socials.map((social) => (
                <button
                  key={social}
                  type="button"
                  className="h-8 w-8 rounded-full border border-slate-700 bg-slate-900 text-xs uppercase text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Shop</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {columns.shop.map((item) => (
                <li key={item} className="cursor-pointer transition hover:text-emerald-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Account</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {columns.account.map((item) => (
                <li key={item} className="cursor-pointer transition hover:text-emerald-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {columns.support.map((item) => (
                <li key={item} className="cursor-pointer transition hover:text-emerald-400">
                  {item}
                </li>
              ))}
            </ul>

            
          </div>
          <div>
            <h3 className="mb-4 mt-8 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {columns.legal.map((item) => (
                <li key={item} className="cursor-pointer transition hover:text-emerald-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        <div className="border-t border-slate-800">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 FreshCart. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>PayPal</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
