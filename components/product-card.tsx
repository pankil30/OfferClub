'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  salePrice?: number
  price: number
  image: string
  category: string
}

export default function ProductCard({
  id,
  name,
  price = 0,
  salePrice = 0,
  image,
  category,
}: ProductCardProps) {
  const formattedPrice = Number(price).toFixed(2)
  const formattedSalePrice = Number(salePrice).toFixed(2)

  return (
    <div className="group relative">


      <Link href={`/products/${id}`} className="block">
        <div className="relative overflow-hidden bg-secondary mb-4 aspect-square">
          <Image
            src={image || '/images/placeholder.png'}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {category}
          </p>

          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>

          <p className="text-base font-medium text-foreground">
            {salePrice ? (
              <>
                <span className=" font-semibold">
                  ₹{salePrice.toFixed(2)}
                </span>

                <span className="ml-2 text-sm text-muted-foreground line-through">
                  ₹{price.toFixed(2)}
                </span>
              </>
            ) : (
              <>₹{price.toFixed(2)}</>
            )}
          </p>
        </div>
      </Link>
    </div>
  )
}