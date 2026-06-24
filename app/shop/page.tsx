'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { products } from '@/lib/products'


export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState<{ min: number; max: number } | null>(null)
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
    const priceMatch = !selectedPrice || (product.price >= selectedPrice.min && product.price <= selectedPrice.max)
    return categoryMatch && priceMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Shop
          </h1>

          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            {sortedProducts.length} Products Available
          </p>
        </div>

        {/* Products */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                salePrice={product.salePrice}
                image={product.images?.[0] || '/images/placeholder.png'}
                category={product.category}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No products found.
            </p>
          </div>
        )}

      </div>
    </div>

  )
}
