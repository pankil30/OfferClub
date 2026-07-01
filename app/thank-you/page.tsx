'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useRouter } from 'next/navigation'
import ResponsiveAdsterraBanner from '../ads/ResponsiveAdsterraBanner'
import AdsterraNative from '../ads/AdsterraNative'

export default function ThankYouPage() {
  const router = useRouter()

  useEffect(() => {
    localStorage.removeItem('cart')

    window.history.pushState(null, '', window.location.href)

    const handlePopState = () => {
      router.replace('/')
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [router])


  return (
    <div className="flex flex-col min-h-screen">
 <div className='mb-8 mt-8 flex row'>
             <ResponsiveAdsterraBanner />
          </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16 bg-secondary">

        <div className="w-full max-w-4xl bg-card border border-border rounded-2xl shadow-lg p-10 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Thank You for Your Order!
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg mb-8">
            Your order has been placed successfully. We’ll send you an email confirmation shortly.
          </p>

          {/* Order Info */}
          <div className="bg-background border border-border rounded-lg p-6 mb-8 text-left">
            <p className="text-sm text-muted-foreground mb-2">
              Order Status
            </p>

            <p className="text-lg font-semibold text-foreground">
              Processing
            </p>

            <p className="text-sm text-muted-foreground mt-3">
              Estimated delivery: 3–5 business days
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

           <button
      type="button"
      onClick={() => {window.open(
      "https://ruffianattorneymargarine.com/n61k1bpx3?key=c2414e037cc988772633834d67eb97d6",
      "_blank",
      "noopener,noreferrer"
    ); router.push('/')}}
      className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition"
    >
      Continue Shopping
    </button>

            {/* <Link
              href="/orders"
              className="px-6 py-3 border border-border text-foreground rounded-md font-semibold hover:bg-muted transition"
            >
              View Orders
            </Link> */}

             

          </div>
          <div className="w-full max-w-3xl mx-auto flex justify-center items-center mt-6">
              <AdsterraNative />
            </div>

        </div>
      </div>

    
    </div>
  )
}