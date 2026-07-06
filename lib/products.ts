export interface Product {
  id: string
  name: string
  price: number
  category: string
  description: string
  details: string[]
  inStock: boolean
  onSale: boolean
  salePrice?: number
  discountPercent?: number
  images: string[]
  createdAt?: string
}

interface ApiProduct {
  id?: string | number
  name?: string
  price?: string | number
  category?: string
  description?: string
  details?: string[] | string
  inStock?: string | number | boolean
  onSale?: string | number | boolean
  salePrice?: string | number | null
  discountPercent?: string | number | null
  images?: string[] | string
  created_at?: string
}

interface ProductsResponse {
  status?: string
  products?: ApiProduct[]
}

export const PRODUCTS_API_URL = 'http://loanpeoffer.soon.it/api/get.php'
const IMAGE_PROXY_PATH = '/api/image-proxy'

const toNumber = (value: unknown, fallback = 0) => {
  const numberValue = Number(value)
  return Number.isFinite(numberValue) ? numberValue : fallback
}

const toBoolean = (value: unknown) => {
  return value === true || value === 1 || value === '1' || value === 'true'
}

const toStringArray = (value: unknown) => {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === 'string')
  }

  if (typeof value === 'string' && value.trim()) {
    try {
      const parsed = JSON.parse(value)
      return Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === 'string')
        : [value]
    } catch {
      return [value]
    }
  }

  return []
}

export const getProxiedImageUrl = (url: string) => {
  if (!url || url.startsWith('/') || url.startsWith(IMAGE_PROXY_PATH)) {
    return url
  }

  return `${IMAGE_PROXY_PATH}?url=${encodeURIComponent(url)}`
}

export const normalizeProduct = (product: ApiProduct): Product => {
  const price = toNumber(product.price)
  const salePrice = product.salePrice ? toNumber(product.salePrice) : undefined

  return {
    id: String(product.id ?? ''),
    name: product.name ?? 'Untitled Product',
    price,
    category: product.category ?? 'Uncategorized',
    description: product.description ?? '',
    details: toStringArray(product.details),
    inStock: toBoolean(product.inStock),
    onSale: toBoolean(product.onSale),
    salePrice,
    discountPercent: product.discountPercent
      ? toNumber(product.discountPercent)
      : undefined,
    images: toStringArray(product.images).map(getProxiedImageUrl),
    createdAt: product.created_at,
  }
}

export async function getProducts(page = 1): Promise<Product[]> {
  try {
    const response = await fetch(`${PRODUCTS_API_URL}?page=${page}`, {
      cache: 'no-store',
      redirect: 'follow',
    })

    if (!response.ok) {
      throw new Error(`Product API failed with ${response.status}`)
    }

    const data = (await response.json()) as ProductsResponse
    return (data.products ?? []).map(normalizeProduct).filter((p) => p.id)
  } catch (error) {
    console.error('Failed to fetch products:', error)
    return []
  }
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getProducts()
  return products.find((product) => product.id === id)
}
