import { NextResponse } from 'next/server'

import { getProducts } from '@/lib/products'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page') ?? 1)
  const products = await getProducts(Number.isFinite(page) ? page : 1)

  return NextResponse.json({ products })
}
