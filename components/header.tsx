'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react'
import { products } from '@/lib/products'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ResponsiveAdsterraBanner from '@/app/ads/ResponsiveAdsterraBanner'

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState('')

  // ✅ Load cart count from localStorage
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')

    const total = cart.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0
    )

    setCartCount(total)
  }


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const pathname = usePathname()
  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    updateCartCount()

    // 🔥 Listen when cart changes
    const handleStorageChange = () => updateCartCount()
    window.addEventListener('storage', handleStorageChange)

    // Custom event support (important for same tab updates)
    window.addEventListener('cartUpdated', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cartUpdated', handleStorageChange)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center shrink-0">
              <span className="text-primary-foreground font-bold text-sm">
                OC
              </span>
            </div>

            <span className="font-bold text-lg md:text-xl text-foreground">
              OfferClub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors hover:text-primary ${pathname === link.href
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-foreground'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {showSearch && (
            <div className="fixed top-14 md:top-16 left-0 right-0 bg-background border-b border-border shadow-lg z-[60] max-h-[70vh] overflow-y-auto">

              {/* Search input */}
              <div className="max-w-3xl mx-auto p-4 flex gap-2">
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full p-3 border border-border rounded-md focus:outline-none"
                />

                <button
                  onClick={() => {
                    setShowSearch(false)
                    setQuery('')
                  }}
                  className="px-4 py-2 border rounded-md"
                >
                  ✕
                </button>
              </div>
<div className='mb-8 mt-8 flex row'>
             <ResponsiveAdsterraBanner />
          </div>
              {/* Results */}
              <div className="max-w-3xl mx-auto px-4 pb-4 space-y-2">
                {query && filteredProducts.length === 0 && (
                  <p className="text-muted-foreground">No products found</p>
                )}

                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    onClick={() => {
                      setShowSearch(false)
                      setQuery('')
                    }}
                    className="flex items-center gap-4 p-3 hover:bg-secondary rounded-md"
                  >
                    <div className="relative w-12 h-12">
                      <Image
                        src={product.images?.[0] || '/images/placeholder.png'}
                        alt={product.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>

                    <div>
                      <p className="font-medium text-foreground">
                        {product.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ₹{product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSearch(true)}
              className="p-2 hover:bg-secondary rounded-md transition-colors"
            >
              <Search className="w-5 h-5 text-foreground" />
            </button>


            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 hover:bg-secondary rounded-md transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
              {isMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                  />

                  {/* Menu */}
                  <div className="fixed top-14 left-0 right-0 bg-background border-b border-border z-50 md:hidden animate-in slide-in-from-top duration-200">

                    <nav className="flex flex-col p-4">

                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`py-4 border-b border-border text-base font-medium ${pathname === link.href
                            ? 'text-primary'
                            : 'text-foreground'
                            }`}
                        >
                          {link.name}
                        </Link>
                      ))}

                      <Link
                        href="/cart"
                        onClick={() => setIsMenuOpen(false)}
                        className="py-4 border-b border-border"
                      >
                        Cart ({cartCount})
                      </Link>
                    </nav>
                  </div>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}