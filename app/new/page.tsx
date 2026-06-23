'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/products'

export default function NewArrivalsPage() {

  // Simulate "new arrivals" (you can replace with real API field like createdAt)
  const newArrivals = products
    .slice()
    .reverse()
    .slice(0, 8)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* HERO SECTION */}
      <section className="bg-black text-white text-center py-16">
        <h1 className="text-5xl font-bold">✨ New Arrivals</h1>
        <p className="mt-3 text-lg text-gray-300">
          Fresh styles added just for you
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {newArrivals.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No new products available.
          </p>
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {newArrivals.map((product) => (
              <div
                key={product.id}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >

                {/* IMAGE */}
                <div className="relative h-56 w-full bg-secondary">
                  <Image
                src={product.images?.[0] || '/images/placeholder.png'}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />

                  {/* NEW BADGE */}
                  <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    NEW
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-2">

                  <h3 className="text-lg font-semibold text-foreground">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {product.category}
                  </p>

                  <p className="text-xl font-bold text-foreground">
                    ₹{product.price.toFixed(2)}
                  </p>

                  <Link
                    href={`/products/${product.id}`}
                    className="block mt-3 text-center w-full py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition"
                  >
                    View Product
                  </Link>

                </div>

              </div>
            ))}

          </div>
        )}

      </section>

      <Footer />
    </div>
  )
}