// 'use client'

// import ProductCard from '@/components/product-card'
// import Link from 'next/link'
// import Image from 'next/image'

// import { products } from '@/lib/products'

// export default function CollectionsPage() {

//   // ✅ GROUP PRODUCTS BY CATEGORY (REAL DATA ONLY)
//   const grouped = products.reduce((acc, product) => {
//     const key = product.category

//     if (!acc[key]) {
//       acc[key] = []
//     }

//     acc[key].push(product)

//     return acc
//   }, {} as Record<string, typeof products>)

//   const categories = Object.keys(grouped)

//   return (
//     <>


//       <main className="min-h-screen bg-background">

//         {/* HERO */}
//         <section className="bg-secondary py-16 md:py-24">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//             <h1 className="text-4xl md:text-5xl font-bold">
//               Our Collections
//             </h1>

//             <p className="text-muted-foreground mt-3">
//               Explore products grouped by category
//             </p>

//           </div>
//         </section>

//         {/* COLLECTIONS FROM REAL DATA */}
//         <section className="py-16">

//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//             {categories.map((category) => (

//               <div key={category} className="mb-14">

//                 {/* CATEGORY TITLE */}
//                 <h2 className="text-3xl font-bold mb-6">
//                   {category}
//                 </h2>

//                 {/* PRODUCTS */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//                   {grouped[category].map((product) => (
//                     <ProductCard
//                       key={product.id}
//                       id={product.id}
//                       name={product.name}
//                       price={product.price}
//                       image={product.images?.[0] || '/images/placeholder.png'}
//                       category={product.category}
//                     />
//                   ))}

//                 </div>

//               </div>

//             ))}

//           </div>

//         </section>



//       </main>

  
//     </>
//   )
// }






'use client'

import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/product-card'
import ProductLoader from '@/components/product-loader'
import { useProducts } from '@/lib/use-products'
import AdsterraNative from '../ads/AdsterraNative'
import AdsterraBanner from '../ads/AdsterraBanner'
import ResponsiveAdsterraBanner from '../ads/ResponsiveAdsterraBanner'

export default function CollectionsPage() {
  const { products, loading } = useProducts()
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const grouped = products.reduce((acc, product) => {
    const key = product.category;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(product);

    return acc;
  }, {} as Record<string, typeof products>);

  const categories = Object.keys(grouped)

return ( <main className="min-h-screen bg-background">

  {/* Hero */}
  <section className="bg-secondary/30 py-10 md:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
      <h1 className="text-3xl md:text-5xl font-bold">
        Our Collections
      </h1>

      <p className="mt-3 text-sm md:text-base text-muted-foreground">
        Explore products grouped by category
      </p>
<div className='mt-13'>
     <ResponsiveAdsterraBanner />
  </div>
    </div>
  </section>

  {/* Collections */}
  <section className="py-8 md:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {loading ? (
        <ProductLoader />
      ) : categories.map((category) => (
        <div
          key={category}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-3xl font-bold">
              {category}
            </h2>

            <span className="text-sm text-muted-foreground">
              {grouped[category].length} products
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {grouped[category].map((product, index) => (
              <React.Fragment key={product.id}>
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  salePrice={product.salePrice}
                  image={
                    product.images?.[0] ||
                    '/images/placeholder.png'
                  }
                  category={product.category}
                />

                {/* Show ad after every 12 products */}
                {(index + 1) % 12 === 0 && index !== grouped[category].length - 1 && (
                  <div className="col-span-2 md:col-span-3 lg:col-span-4">
                    <AdsterraNative />
                  </div>
                )}
              </React.Fragment>
            ))}
            
          </div>
        </div>
      ))}

    </div>
  </section>

</main>

)
}
