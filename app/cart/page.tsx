'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { X, Plus, Minus, Trash } from 'lucide-react'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')

    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }

    setIsLoading(false)
  }, [])

  const saveCart = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
      return
    }

    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )

    saveCart(updatedCart)
  }

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)

    saveCart(updatedCart)
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const shipping = subtotal > 100 ? 0 : 99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="flex flex-col min-h-screen">
  

      <section className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Shopping Cart
          </h1>
        </div>
      </section>

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {isLoading ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Loading cart...</p>
            </div>
          ) : cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border border-border rounded-2xl p-6 bg-card"
                  >
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <Link href={`/products/${item.id}`}>
                        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
                          <Image
                            src={item.image || "/images/placeholder.png"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        {/* Top */}
                        <div className="flex justify-between items-start">
                          <div>
                            <Link
                              href={`/products/${item.id}`}
                              className="text-lg md:text-2xl font-semibold text-foreground hover:text-primary"
                            >
                              {item.name}
                            </Link>

                            <p className="mt-2 text-base text-muted-foreground">
                              ₹{item.price.toFixed(2)} each
                            </p>
                          </div>

                          <div className="text-right">
                            <p className=" md:text-2xl font-bold text-foreground">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>

                        {/* Bottom */}
                        <div className="flex justify-between items-end mt-8">
                          {/* Quantity */}
                         <div className="flex items-center justify-center">
  <span className="px-4 py-2 border border-border rounded-lg">
    Qty: {item.quantity}
  </span>
</div>

                          {/* Delete */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 transition"
                          >
                            <Trash className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <Link
                  href="/shop"
                  className="inline-flex items-center mt-4 text-primary font-semibold hover:underline"
                >
                  ← Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-secondary p-8 rounded-lg sticky top-20">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>

                      <span className="font-semibold">
                        ₹{subtotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>

                      <span className="font-semibold">
                        {shipping === 0
                          ? 'FREE'
                          : `₹${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>

                      <span className="font-semibold">
                        ₹{tax.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-8">
                    <span className="font-semibold">Total</span>

                    <span className="text-lg font-semibold">
                      ₹{total.toFixed(2)}
                    </span>
                  </div>

                  <Link
                    href="/checkout"
                    className="w-full block text-center px-6 py-3 bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity mb-3"
                  >
                    Proceed to Checkout
                  </Link>

                  <Link
                    href="/shop"
                    className="w-full block text-center px-6 py-3 border border-foreground text-foreground font-semibold hover:bg-background transition-colors"
                  >
                    Continue Shopping
                  </Link>

                  {shipping === 0 && (
                    <p className="text-sm text-green-600 mt-4 text-center">
                      You qualify for free shipping!
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Your Cart is Empty
              </h2>

              <p className="text-muted-foreground mb-8">
                Add some products to get started
              </p>

              <Link
                href="/shop"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}