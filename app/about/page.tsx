'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Award, Leaf, Heart, Users } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We are committed to delivering products of the highest quality and craftsmanship.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Responsible sourcing and eco-friendly practices guide every decision we make.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for design and luxury drives us to create extraordinary experiences.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in building meaningful relationships with our customers and partners.',
  },
]

export default function AboutPage() {
  return (
    <>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-12 md:py-20"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance mb-4">
            About OfferClub
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Crafting elegance and luxury for the discerning customer since 2015
          </p>
        </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2015, OfferClub began as a vision to bring exceptional, curated luxury items to discerning customers worldwide. What started as a small boutique has grown into a recognized name in premium fashion and lifestyle products.
                </p>
                <p>
                  We believe that true luxury isn&apos;t about excess—it&apos;s about intention. Every product we offer has been carefully selected for its quality, design, and the story it tells. Our team travels the world to discover emerging designers and established craftspeople who share our commitment to excellence.
                </p>
                <p>
                  Today, OfferClub serves customers across the globe who appreciate the finer things in life. We remain dedicated to our founding principles: exceptional quality, ethical practices, and an unwavering commitment to customer satisfaction.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="p-6 bg-secondary rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary rounded-lg text-primary-foreground flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 py-12 border-y border-border">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">50K+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Curated Products</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">40+</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Sofia Marchetti', role: 'Founder & CEO', expertise: 'Luxury Fashion' },
                { name: 'James Chen', role: 'Creative Director', expertise: 'Product Curation' },
                { name: 'Elena Rodriguez', role: 'Head of Operations', expertise: 'Customer Experience' },
              ].map((member) => (
                <div key={member.name} className="bg-background p-6 rounded-lg text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions? We&apos;d love to hear from you.
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
    </>
  )
}
