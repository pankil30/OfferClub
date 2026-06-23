'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqCategories = [
  {
    category: 'Shipping & Delivery',
    questions: [
      {
        q: 'How long does delivery take?',
        a: 'Orders are usually delivered within 7-10 business days across India. Metro cities may receive orders faster.',
      },
      {
        q: 'Do you deliver all over India?',
        a: 'Yes, we deliver to most PIN codes across India through trusted courier partners.',
      },
      {
        q: 'How much is shipping?',
        a: 'Free shipping is available on orders above ₹999. A small delivery fee may apply to lower-value orders.',
      },
      {
        q: 'Can I track my order?',
        a: 'Yes, a tracking link will be sent to your email and mobile number once your order is shipped.',
      },
    ],
  },

  {
    category: 'Returns & Refunds',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'Products can be returned within 7 days of delivery if they are unused and in original packaging.',
      },
      {
        q: 'How do I request a return?',
        a: 'Go to your order details page and click "Request Return" or contact our support team.',
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are processed within 5-7 working days after the returned product passes inspection.',
      },
      {
        q: 'Can I exchange a product?',
        a: 'Yes, exchanges are available for size, color, or defective products subject to stock availability.',
      },
    ],
  },

  {
    category: 'Products',
    questions: [
      {
        q: 'Are your products genuine?',
        a: 'Yes, all products sold on our website are 100% genuine and quality checked before dispatch.',
      },
      {
        q: 'Do products come with warranty?',
        a: 'Selected products include manufacturer warranty. Warranty information is shown on the product page.',
      },
      {
        q: 'What if I receive a damaged product?',
        a: 'Contact us within 48 hours of delivery with photos, and we will arrange a replacement or refund.',
      },
      {
        q: 'Will sold-out products come back in stock?',
        a: 'Popular products are frequently restocked. You can subscribe for stock notifications.',
      },
    ],
  },

  {
    category: 'Orders & Account',
    questions: [
      {
        q: 'Do I need an account to place an order?',
        a: 'No, guest checkout is available, but creating an account helps track orders and save addresses.',
      },
      {
        q: 'How can I view my orders?',
        a: 'Login to your account and visit the Orders section.',
      },
      {
        q: 'Can I cancel my order?',
        a: 'Orders can be cancelled before they are shipped.',
      },
      {
        q: 'Can I change my delivery address?',
        a: 'Address changes are possible before the order is dispatched.',
      },
    ],
  },

  {
  category: 'Payments',
  questions: [
    {
      q: 'What payment method do you accept?',
      a: 'Currently, we offer Cash on Delivery (COD) only for all eligible orders across India.',
    },
    {
      q: 'Do I need to pay online?',
      a: 'No. Payment is collected by the delivery partner when your order is delivered.',
    },
    {
      q: 'Is Cash on Delivery available everywhere?',
      a: 'COD is available for most serviceable PIN codes across India.',
    },
    {
      q: 'Can I pay using UPI at delivery?',
      a: 'Yes. Depending on the courier partner, you may pay using cash or UPI at the time of delivery.',
    },
  ],
},

  {
    category: 'Customer Support',
    questions: [
      {
        q: 'How can I contact customer support?',
        a: 'You can contact us through the Contact page, email, or WhatsApp support.',
      },
      {
        q: 'What are your support hours?',
        a: 'Our support team is available Monday to Saturday, 9:00 AM to 7:00 PM.',
      },
      {
        q: 'Do you offer bulk orders?',
        a: 'Yes, business and bulk order inquiries are welcome.',
      },
      {
        q: 'How can I get special offers?',
        a: 'Subscribe to our newsletter and follow us on social media for exclusive discounts.',
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors"
      >
        <h3 className="text-left font-medium text-foreground">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-secondary border-t border-border text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Find answers to common questions about our products, shipping, returns, and more.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((section) => (
                <div key={section.category}>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    {section.category}
                  </h2>
                  <div className="space-y-3">
                    {section.questions.map((item, index) => (
                      <FAQItem key={index} question={item.q} answer={item.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Didn&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our customer support team is here to help. Get in touch with us directly.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
