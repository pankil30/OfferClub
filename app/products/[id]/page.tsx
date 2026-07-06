import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Truck, RotateCcw, ShieldCheck } from 'lucide-react'

import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import ProductActions from '@/components/product-actions'
import ProductGallery from '@/components/product-gallery'

import { getProducts } from '@/lib/products'
import AdsterraNative from '@/app/ads/AdsterraNative'
import ResponsiveAdsterraBanner from '@/app/ads/ResponsiveAdsterraBanner'
import InlineAd from '@/app/ads/InlineAd'

export const dynamic = 'force-dynamic'

interface ProductDetailPageProps {
  params: {
    id: string
    images: string[]
    salePrice?: number
    onSale: boolean
    productId: string
    discountPercent?: number
    details: string[]
    inStock: boolean
    category: string
    name: string
    description: string
    price: number
  }
}



export default async function ProductDetailPage({


  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  console.log('ID:', id)

  const products = await getProducts()
  const product = products.find((p) => p.id === id)

  console.log('PRODUCT:', product)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.id !== id)
    .slice(0, 4)

  console.log('RELATED PRODUCTS:', relatedProducts)

  return (
    <div className="flex flex-col min-h-screen">


      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link
              href="/shop"
              className="hover:text-foreground transition-colors"
            >
              Shop
            </Link>

            <span className="mx-2">/</span>

            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <ProductGallery name={product.name} images={product.images} />

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  {product.category}
                </p>

                <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                {product.onSale && product.salePrice ? (
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold ">
                      ₹{product.salePrice.toFixed(2)}
                    </span>

                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.price.toFixed(2)}
                    </span>

                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                      {product.discountPercent}% OFF
                    </span>
                  </div>
                ) : (
                  <p className="text-3xl font-semibold text-foreground">
                    ₹{product.price.toFixed(2)}
                  </p>
                )}
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Stock Status */}
              <div>
                {product.inStock ? (
                  <p className="text-sm font-semibold text-green-600">
                    In Stock
                  </p>
                ) : (
                  <p className="text-sm font-semibold text-red-600">
                    Out of Stock
                  </p>
                )}
              </div>

              {/* Product Actions */}
              <ProductActions
                inStock={product.inStock}
                product={product}
              />

              {/* Features */}
              <div className="border-y border-border py-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Truck className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />

                  <div>
                    <p className="font-semibold text-foreground">
                      Free Shipping
                    </p>

                    <p className="text-sm text-muted-foreground">
                      Free shipping on orders above ₹100. Orders below ₹100 are charged ₹50 shipping.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <RotateCcw className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />

                  <div>
                    <p className="font-semibold text-foreground">
                      30-Day Returns
                    </p>

                    <p className="text-sm text-muted-foreground">
                      Hassle-free returns
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />

                  <div>
                    <p className="font-semibold text-foreground">
                      Easy Cash on Delivery
                    </p>

                    <p className="text-sm text-muted-foreground">
                      No advance payment required. Pay securely upon delivery.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Product Details
                </h3>

                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground"
                    >
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
 <div className='mb-12'>
             <ResponsiveAdsterraBanner />
          </div>
      {/* Related Products */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12">
            You Might Also Like
          </h2>
 <AdsterraNative />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                id={relatedProduct.id}
                name={relatedProduct.name}
                price={relatedProduct.price}
                salePrice={relatedProduct.salePrice}
                image={relatedProduct.images?.[0] || '/images/placeholder.png'}
                category={relatedProduct.category}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
