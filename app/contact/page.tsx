'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@OfferClub.com',
    details: 'We respond within 24 hours',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    details: 'Mon-Fri, 9AM-6PM EST',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Fashion Ave, New York, NY 10001',
    details: 'Visit our flagship store',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon-Sat: 10AM-8PM',
    details: 'Sun: 12PM-6PM',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We&apos;re here to help. Get in touch with our team for any questions or inquiries.
            </p>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <div key={info.label} className="bg-secondary p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary rounded-lg text-primary-foreground">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-foreground">{info.label}</h3>
                    </div>
                    <p className="font-medium text-foreground mb-1">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.details}</p>
                  </div>
                )
              })}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="order-issue">Order Issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>

                  {submitted && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                      Thank you for your message. We&apos;ll get back to you soon!
                    </div>
                  )}
                </form>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Visit Our Store
                </h2>
                <div className="bg-secondary rounded-lg h-full min-h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      123 Fashion Ave, New York, NY 10001
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Map integration coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Check out our frequently asked questions for quick answers.
            </p>
            <a
              href="/faq"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View FAQ
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
