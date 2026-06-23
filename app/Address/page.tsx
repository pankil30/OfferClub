'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface CartItem {
    id: string
    name: string
    price: number
    image: string
    quantity: number
}

export default function Addresspage() {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const router = useRouter()
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [error, setError] = useState('')

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
            <Header />

            {/* Page Header */}
            <section className="bg-secondary border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="font-serif text-4xl font-bold text-foreground">
                        Checkout
                    </h1>
                </div>
            </section>
          <div className="flex justify-center py-7 ">
        <div className="w-full max-w-3xl bg-card rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-10">

                    <h2 className="text-3xl font-bold text-foreground mb-7">
                        Your Order
                    </h2>

                    <div className="space-y-8">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-6 items-center">

                                <div className="relative h-28 w-28 overflow-hidden rounded-xl flex-shrink-0 bg-secondary">
                                    <Image
                                        src={item.image || '/images/placeholder.png'}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1 space-y-1">
                                    <h3 className="text-xl font-semibold text-foreground">
                                        {item.name}
                                    </h3>

                                    <p className="text-lg text-muted-foreground">
                                        Quantity: <span className="text-foreground font-medium">{item.quantity}</span>
                                    </p>

                                    <p className="text-lg text-muted-foreground">
                                        Price: <span className="text-foreground font-semibold">₹{item.price}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="my-5 border-t border-border" />

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className=" font-medium text-foreground">Subtotal</span>
                            <span className=" text-foreground">₹{subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className=" font-medium text-foreground">Shipping</span>
                            <span className=" text-foreground">₹{shipping.toFixed(2)}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className=" font-medium text-foreground">Tax</span>
                            <span className=" text-foreground">₹{tax.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="my-5 border-t border-border" />

                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-foreground">
                            Total
                        </span>

                        <span className="text-3xl font-bold text-foreground">
                            ₹{total.toFixed(2)}
                        </span>
                    </div>

                </div>
            </div>
            {/* Main Content */}
            <div className="flex justify-center py-7 mb-10">
        <div className="w-full max-w-3xl bg-card rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-10">


                    {/* Checkout Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">

                            <h2 className="text-3xl font-bold text-foreground mb-8">
                                Billing Details
                            </h2>

                            <form className="space-y-6">

                                <div className="grid grid-cols-1 gap-6">

                                    <div className="w-full">
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Address Line 1
                                        </label>

                                        <input
                                            type="text"
                                            value={address1}
                                            onChange={(e) => {
                                                setAddress1(e.target.value)
                                                setError('')
                                            }}
                                            className="w-full px-4 py-3 border border-border rounded-md bg-background 
  focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Address Line 1"
                                        />
                                        {error && (
                                            <p className="text-red-500 text-sm">{error}</p>
                                        )}
                                    </div>

                                    <div className="w-full">
                                        <label className="block text-sm font-medium text-foreground mb-2 ">
                                            Address Line 2
                                        </label>

                                        <input
                                            type="text"
                                            value={address2}
                                            onChange={(e) => {
                                                setAddress2(e.target.value)
                                                setError('')
                                            }}
                                            className="w-full px-4 py-3 border border-border rounded-md bg-background 
  focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Address Line 2"
                                        />
                                        {error && (
                                            <p className="text-red-500 text-sm">{error}</p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        if (!address1.trim()) {
                                            setError('Address Line 1 is required')
                                            return
                                        }

                                        router.push('/City')
                                    }}
                                    className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 transition"
                                >
                                    Next
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}