'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react'
import { products } from '@/lib/products'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

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
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-lg">OC</span>
            </div>
            <span className="font-serif text-xl font-bold text-foreground hidden sm:inline">
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
            <div className="absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg z-50">

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
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}