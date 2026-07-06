import { NextResponse } from 'next/server'

const ALLOWED_IMAGE_HOSTS = new Set(['loanpeoffer.soon.it'])

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get('url')

  if (!imageUrl) {
    return NextResponse.json({ error: 'Missing image URL' }, { status: 400 })
  }

  let parsedUrl: URL

  try {
    parsedUrl = new URL(imageUrl)
  } catch {
    return NextResponse.json({ error: 'Invalid image URL' }, { status: 400 })
  }

  if (
    !['http:', 'https:'].includes(parsedUrl.protocol) ||
    !ALLOWED_IMAGE_HOSTS.has(parsedUrl.hostname)
  ) {
    return NextResponse.json({ error: 'Image host is not allowed' }, { status: 400 })
  }

  const response = await fetch(parsedUrl.toString(), {
    cache: 'no-store',
    redirect: 'follow',
  })

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Image could not be loaded' },
      { status: response.status }
    )
  }

  const contentType = response.headers.get('content-type') ?? 'image/jpeg'
  const imageBuffer = await response.arrayBuffer()

  return new NextResponse(imageBuffer, {
    status: 200,
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
