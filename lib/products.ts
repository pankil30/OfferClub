export interface Product {
  id: string
  name: string
  price: number
  category: string
  description: string
  details: string[]
  inStock: boolean

  // ✅ NEW FIELDS
  onSale: boolean
  salePrice?: number
  discountPercent?: number
  images: string[] // multiple images instead of single image
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimal Leather Jacket',
    price: 1200,
    category: 'Fashion',
    description:
      'Crafted from premium Italian leather, this minimal jacket epitomizes timeless elegance.',
    details: [
      'Premium Italian leather',
      'Minimalist button closure',
      'Two side pockets',
      'Adjustable waist straps',
      'Dry clean only',
    ],
    inStock: true,

    // NEW
    onSale: true,
    salePrice: 999,
    discountPercent: 17,
    images: [
      '/images/product-1.png',
      '/images/product-1.png',
      '/images/product-1-3.png',
    ],
  },
  {
    id: '2',
    name: 'Premium Sunglasses',
    price: 50,
    category: 'Accessories',
    description: 'UV-protected premium sunglasses with handcrafted frames.',
    details: [
      'UV 400 protection',
      'Handcrafted frames',
      'Glass lenses',
      'Includes premium case',
      'Anti-reflective coating',
    ],
    inStock: true,

    onSale: false,
    images: [
      '/images/product-2.png',
      '/images/product-2-2.png',
    ],
  },
  {
    id: '3',
    name: 'Silk Evening Dress',
    price: 890,
    category: 'Fashion',
    description: 'An elegant silk evening dress perfect for special occasions.',
    details: [
      '100% mulberry silk',
      'Hand-finished seams',
      'Adjustable straps',
      'Back zip closure',
      'Lining included',
    ],
    inStock: true,

    onSale: true,
    salePrice: 799,
    discountPercent: 10,
    images: [
      '/images/product-3.png',
      '/images/product-3-2.png',
    ],
  },
  {
    id: '4',
    name: 'Designer Handbag',
    price: 1450,
    category: 'Accessories',
    description:
      'A structured designer handbag crafted from premium leather.',
    details: [
      'Premium cream leather',
      'Gold-plated hardware',
      'Interior zip pocket',
      'Adjustable shoulder strap',
      'Dust bag included',
    ],
    inStock: false,

    onSale: false,
    images: [
      '/images/product-4.png',
      '/images/product-4-2.png',
    ],
  },
]



export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}

// export const getProductBySlug = (slug: string) => {
//   return products.find((product) => product.slug === slug)
// }




const allProducts = [
  {
    id: '1',
    name: 'Minimal Leather Jacket',
    price: 1200,
    image: '/images/product-1.png',
    category: 'Fashion',
  },
  {
    id: '2',
    name: 'Premium Sunglasses',
    price: 350,
    image: '/images/product-2.png',
    category: 'Accessories',
  },
  {
    id: '3',
    name: 'Silk Evening Dress',
    price: 890,
    image: '/images/product-3.png',
    category: 'Fashion',
  },
  {
    id: '4',
    name: 'Designer Handbag',
    price: 1450,
    image: '/images/product-4.png',
    category: 'Accessories',
  },
  {
    id: '5',
    name: 'Cashmere Sweater',
    price: 650,
    image: '/images/product-1.png',
    category: 'Fashion',
  },
  {
    id: '6',
    name: 'Gold Watch',
    price: 2200,
    image: '/images/product-2.png',
    category: 'Accessories',
  },
  {
    id: '7',
    name: 'Wool Trousers',
    price: 450,
    image: '/images/product-3.png',
    category: 'Fashion',
  },
  {
    id: '8',
    name: 'Leather Shoes',
    price: 520,
    image: '/images/product-4.png',
    category: 'Footwear',
  },
]