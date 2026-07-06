'use client'

import { useEffect, useState } from 'react'

import type { Product } from './products'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadProducts() {
      try {
        const response = await fetch('/api/products?page=1')
        const data = (await response.json()) as { products?: Product[] }

        if (isMounted) {
          setProducts(data.products ?? [])
        }
      } catch (error) {
        console.error('Failed to load products:', error)
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      isMounted = false
    }
  }, [])

  return { products, loading }
}
