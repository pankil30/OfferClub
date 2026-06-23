// 'use client'

// import { useState } from 'react'
// import { Heart, Share2 } from 'lucide-react'
// import { useRouter } from 'next/navigation'

// interface ProductActionsProps {
//   inStock: boolean
//   product: {
//     id: string
//     name: string
//     price: number
//     image: string
//   }
// }

// export default function ProductActions({ inStock }: ProductActionsProps) {
//   const router = useRouter()

//   const [quantity, setQuantity] = useState(1)
//   const [isFavorited, setIsFavorited] = useState(false)

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center gap-4">
//         <label className="text-sm font-semibold text-foreground">
//           Quantity:
//         </label>

//         <div className="flex items-center border border-border">
//           <button
//             onClick={() => setQuantity(Math.max(1, quantity - 1))}
//             className="px-3 py-2 hover:bg-secondary"
//             disabled={!inStock}
//           >
//             −
//           </button>

//           <span className="px-4 py-2 text-center w-12">{quantity}</span>

//           <button
//             onClick={() => setQuantity(quantity + 1)}
//             className="px-3 py-2 hover:bg-secondary"
//             disabled={!inStock}
//           >
//             +
//           </button>
//         </div>
//       </div>

//       <div className="flex gap-4">
//         <button
//           disabled={!inStock}
//           className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Add to Cart
//         </button>

//         <button
//           onClick={() => router.push('/cart')}
//           className="px-6 py-3 border border-border text-foreground hover:bg-secondary transition-colors"
//         >
//           Go to Cart
//         </button>

//         <button
//           onClick={() => setIsFavorited(!isFavorited)}
//           className="px-4 py-3 border border-border hover:bg-secondary transition-colors"
//         >
//           <Heart
//             className={`w-5 h-5 ${
//               isFavorited ? 'fill-current text-red-500' : ''
//             }`}
//           />
//         </button>

//         <button className="px-4 py-3 border border-border hover:bg-secondary transition-colors">
//           <Share2 className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   )
// }



'use client'

import { useState } from 'react'
import { Heart, Share2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { Product } from '@/lib/products'

interface ProductActionsProps {
  inStock: boolean
  product: Product
}

export default function ProductActions({
  inStock,
  product,
}: ProductActionsProps) {
  const router = useRouter()

  const [quantity, setQuantity] = useState(1)
  const [isFavorited, setIsFavorited] = useState(false)

  const handleAddToCart = () => {
    const existingCart = JSON.parse(
      localStorage.getItem('cart') || '[]'
    )

    const existingItem = existingCart.find(
      (item: any) => item.id === product.id
    )

    let updatedCart

    if (existingItem) {
      updatedCart = existingCart.map((item: any) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      )
    } else {
      updatedCart = [
        ...existingCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0] || '/images/placeholder.png',
          quantity,
        },
      ]
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart))

    router.push('/cart')
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label className="text-sm font-semibold text-foreground">
          Quantity:
        </label>

        <div className="flex items-center border border-border">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 hover:bg-secondary"
            disabled={!inStock}
          >
            −
          </button>

          <span className="px-4 py-2 text-center w-12">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 hover:bg-secondary"
            disabled={!inStock}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!inStock}
          className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add to Cart
        </button>

        <button
          type="button"
          onClick={() => router.push('/cart')}
          className="px-6 py-3 border border-border text-foreground hover:bg-secondary transition-colors"
        >
          Go to Cart
        </button>

        <button
          type="button"
          onClick={() => setIsFavorited(!isFavorited)}
          className="px-4 py-3 border border-border hover:bg-secondary transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorited ? 'fill-current text-red-500' : ''
            }`}
          />
        </button>

        <button
          type="button"
          className="px-4 py-3 border border-border hover:bg-secondary transition-colors"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}