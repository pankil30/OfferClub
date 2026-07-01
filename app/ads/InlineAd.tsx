'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    atOptions: {
      key: string
      format: string
      height: number
      width: number
      params: Record<string, unknown>
    }
  }
}

export default function InlineAd({
  keyId = '7eaaa38a25d1c0ccd770967e75b261cd',
  width = 160,
  height = 300,
}: {
  keyId?: string
  width?: number
  height?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    ref.current.innerHTML = ''

    window.atOptions = {
      key: keyId,
      format: 'iframe',
      height,
      width,
      params: {},
    }

    const script = document.createElement('script')
    script.src = `https://ruffianattorneymargarine.com/${keyId}/invoke.js`
    script.async = true
    ref.current.appendChild(script)

    return () => {
      try {
        ref.current?.replaceChildren()
      } catch (e) {}
    }
  }, [keyId, width, height])

  return (
    <div
      ref={ref}
      className="flex items-center justify-center"
      style={{ width: `${width}px`, height: `${height}px`, margin: '0 auto' }}
    />
  )
}
