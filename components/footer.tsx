import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">OfferClub</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Curated luxury products for the discerning customer seeking quality and elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:opacity-80 transition-opacity">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:opacity-80 transition-opacity">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/sale" className="hover:opacity-80 transition-opacity">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/new" className="hover:opacity-80 transition-opacity">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:opacity-80 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:opacity-80 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:opacity-80 transition-opacity">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns">Returns & Refunds</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:opacity-80 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:opacity-80 transition-opacity">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:opacity-80 transition-opacity">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2024 OfferClub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              Instagram
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              Twitter
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
