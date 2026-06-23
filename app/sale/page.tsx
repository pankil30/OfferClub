'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/products'

export default function SalePage() {
  // Fake discount logic (you can replace with real data later)
  const saleProducts = products.filter((p) => p.onSale)
  return (
    <div className="flex flex-col min-h-screen">
      <Header />


      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {saleProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >

              {/* IMAGE */}
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <Image
                  src={product.images?.[0] || '/images/placeholder.png'}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* DISCOUNT BADGE */}
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                {product.discountPercent}% OFF
              </div>


              {/* CONTENT */}
              <div className="p-5 space-y-2">

                <h3 className="text-lg font-semibold text-foreground">
                  {product.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>

                {/* PRICE */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-red-600">
                    ₹{product.salePrice}
                  </span>

                  <span className="text-sm line-through text-muted-foreground">
                    ₹{product.price}
                  </span>
                </div>

                <p className="text-sm text-green-600 font-medium">
                  Save ₹{product.price - (product.salePrice || 0)}
                </p>

                {/* BUTTON */}
                <Link
                  href={`/products/${product.id}`}
                  className="block mt-4 w-full rounded-lg bg-primary py-2.5 text-center text-primary-foreground font-medium hover:opacity-90 transition"
                >
                  View Product
                </Link>

              </div>
            </div>
          ))}

        </div>
      </section>
      {saleProducts.length === 0 && (
        <div className="col-span-full text-center py-20">
          <h3 className="text-2xl font-semibold">
            No Sale Products Available
          </h3>
          <p className="text-muted-foreground mt-2">
            Check back later for new deals.
          </p>
        </div>
      )}

      <Footer />
    </div>
  )
}