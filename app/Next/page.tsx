'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ResponsiveAdsterraBanner from '../ads/ResponsiveAdsterraBanner'
import AdsterraNative from '../ads/AdsterraNative'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export default function Nextpage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const router = useRouter()

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')

    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const shipping = subtotal > 100 ? 0 : 15
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="flex flex-col min-h-screen">
    

      {/* Page Header */}
        <section className="bg-secondary/30 py-10 md:py-15">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Checkout
          </h1>
        </div>
      </section>
<div className='mt-8 flex row'>
             <ResponsiveAdsterraBanner />
          </div>
      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT - ORDER SUMMARY */}
        <div className="lg:col-span-2 space-y-6">

          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Your Order</h2>

            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">

                  <div className="relative h-20 w-20 rounded-xl overflow-hidden bg-secondary">
                    <Image
                      src={item.image || '/images/placeholder.png'}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <div className="font-semibold">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
         

        {/* RIGHT - SUMMARY + BUTTON */}
        <div className="space-y-6">

          <div className="bg-card border border-border rounded-2xl p-6 shadow-md sticky top-6">

            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>

            </div>

            <div className="border-t border-border my-4" />

            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            {/* FIXED BUTTON INSIDE CARD */}
            <button
              type="button"
              onClick={() =>{
window.open(
      "https://ruffianattorneymargarine.com/n61k1bpx3?key=c2414e037cc988772633834d67eb97d6",
      "_blank",
      "noopener,noreferrer"
    );
                router.push('/thank-you')
              } 
            }
              className="
            w-full
            py-4
            rounded-xl
            bg-primary
            text-primary-foreground
            font-semibold
            text-lg
            shadow-md
            hover:shadow-xl
            hover:scale-[1.02]
            active:scale-[0.98]
            transition-all
            duration-200
          "
            >
              Place Order
            </button>

            <p className="text-xs text-muted-foreground text-center mt-3">
              Secure checkout • Instant confirmation
            </p>

          </div>
           

        </div>
        

      </div>
       <div className="w-full max-w-3xl mx-auto flex justify-center items-center">
              <AdsterraNative />
            </div>

   
    </div>
  )
}