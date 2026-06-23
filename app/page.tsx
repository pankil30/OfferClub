'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

import { products } from '@/lib/products'   // ✅ REAL DATA

export default function Page() {

  // Use real products instead of mock
  const featuredProducts = products.slice(0, 4) // or any logic you want


  // NEW ARRIVALS (latest products)
const newArrivals = [...products].slice(-4).reverse()

  // SALE PRODUCTS (assuming discount or random fallback)
  const saleProducts = products
    .filter((p) => p.onSale)
    .slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* HERO SECTION */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Curated Luxury for the Discerning Taste
              </h1>

              <p className="text-lg text-muted-foreground max-w-md">
                Discover premium products crafted for elegance and modern lifestyle.
              </p>

              <div className="flex gap-4">
                <Link
                  href="/shop"
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold"
                >
                  Shop Collection
                  <ChevronRight className="inline w-5 h-5 ml-2" />
                </Link>

                <Link
                  href="/collections"
                  className="px-8 py-3 border border-foreground"
                >
                  View Collections
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] bg-secondary rounded-lg overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="Hero"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS (REAL DATA) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold mb-10">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.images?.[0] || '/images/placeholder.png'}
                category={product.category}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/shop"
              className="border-b border-foreground hover:text-primary"
            >
              View All Products →
            </Link>
          </div>

        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold mb-10">
            New Arrivals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.images?.[0] || '/images/placeholder.png'}
                category={product.category}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SALE SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold ">
              🔥 Sale Products
            </h2>

            <Link
              href="/sale"
              className="text-sm border-b  hover:opacity-80"
            >
              View All Sale →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {saleProducts.length > 0 ? (
              saleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  salePrice={product.salePrice}
                  price={product.price}
                  image={product.images?.[0] || '/images/placeholder.png'}
                  category={product.category}
                />
              ))
            ) : (
              <p className="text-muted-foreground">
                No sale products available right now.
              </p>
            )}

          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}