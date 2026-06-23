// 'use client'

// import Header from '@/components/header'
// import Footer from '@/components/footer'
// import ProductCard from '@/components/product-card'
// import Link from 'next/link'
// import Image from 'next/image'

// const collections = [
//   {
//     id: 'season-2024',
//     name: 'Spring Collection 2024',
//     description: 'Fresh, vibrant pieces for the new season',
//     image: '/images/product-1.png',
//     itemCount: 24,
//   },
//   {
//     id: 'essentials',
//     name: 'Essentials',
//     description: 'Timeless wardrobe staples that never go out of style',
//     image: '/images/product-4.png',
//     itemCount: 18,
//   },
//   {
//     id: 'accessories',
//     name: 'Accessories',
//     description: 'Complete your look with our curated selection',
//     image: '/images/product-2.png',
//     itemCount: 32,
//   },
//   {
//     id: 'limited-edition',
//     name: 'Limited Edition',
//     description: 'Exclusive pieces available in limited quantities',
//     image: '/images/product-3.png',
//     itemCount: 8,
//   },
// ]

// const collectionProducts = [
//   { id: '1', name: 'Minimal Leather Jacket', price: 1200, image: '/images/product-1.png', category: 'Fashion' },
//   { id: '2', name: 'Premium Sunglasses', price: 350, image: '/images/product-2.png', category: 'Accessories' },
//   { id: '3', name: 'Silk Evening Dress', price: 890, image: '/images/product-3.png', category: 'Fashion' },
//   { id: '4', name: 'Designer Handbag', price: 1450, image: '/images/product-4.png', category: 'Accessories' },
// ]

// export default function CollectionsPage() {
//   return (
//     <>
//       <Header />
//       <main className="min-h-screen bg-background">
//         {/* Hero Section */}
//         <section className="bg-secondary py-16 md:py-24">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance mb-4">
//               Our Collections
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-2xl">
//               Explore our carefully curated collections, each designed to reflect elegance, quality, and timeless style.
//             </p>
//           </div>
//         </section>

//         {/* Collections Grid */}
//         <section className="py-16 md:py-24">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
//               {collections.map((collection) => (
//                 <div
//                   key={collection.id}
//                   className="group cursor-pointer overflow-hidden rounded-lg"
//                 >
//                   <div className="relative h-80 bg-secondary overflow-hidden rounded-lg">
//                     <Image
//                       src={collection.image}
//                       alt={collection.name}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="mt-4">
//                     <h3 className="text-xl font-serif font-bold text-foreground mb-2">
//                       {collection.name}
//                     </h3>
//                     <p className="text-muted-foreground mb-4">{collection.description}</p>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-muted-foreground">
//                         {collection.itemCount} items
//                       </span>
//                       <button className="text-primary font-medium hover:text-primary/80 transition-colors">
//                         Explore →
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Featured Products from Collections */}
//             <div>
//               <div className="mb-12">
//                 <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
//                   Featured Pieces
//                 </h2>
//                 <p className="text-muted-foreground">
//                   Handpicked favorites from across our collections
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {collectionProducts.map((product) => (
//                   <ProductCard key={product.id} {...product} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="bg-primary text-primary-foreground py-16 md:py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
//               Discover What&apos;s New
//             </h2>
//             <p className="text-lg mb-8 opacity-90">
//               Browse our complete collection and find your next favorite piece
//             </p>
//             <Link
//               href="/shop"
//               className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
//             >
//               Shop All Items
//             </Link>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }



'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import Link from 'next/link'
import Image from 'next/image'

import { products } from '@/lib/products'

export default function CollectionsPage() {

  // ✅ GROUP PRODUCTS BY CATEGORY (REAL DATA ONLY)
  const grouped = products.reduce((acc, product) => {
    const key = product.category

    if (!acc[key]) {
      acc[key] = []
    }

    acc[key].push(product)

    return acc
  }, {} as Record<string, typeof products>)

  const categories = Object.keys(grouped)

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">

        {/* HERO */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h1 className="text-4xl md:text-5xl font-bold">
              Our Collections
            </h1>

            <p className="text-muted-foreground mt-3">
              Explore products grouped by category
            </p>

          </div>
        </section>

        {/* COLLECTIONS FROM REAL DATA */}
        <section className="py-16">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {categories.map((category) => (

              <div key={category} className="mb-14">

                {/* CATEGORY TITLE */}
                <h2 className="text-3xl font-bold mb-6">
                  {category}
                </h2>

                {/* PRODUCTS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                  {grouped[category].map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.images?.[0] || '/images/placeholder.png'}
                      category={product.category}
                    />
                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>



      </main>

      <Footer />
    </>
  )
}