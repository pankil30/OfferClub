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

export default function PortraitAd({
  keyId = '301ee43bd2f47009dd530c18424c705f',
  width = 160,
  height = 600,
}: {
  keyId?: string
  width?: number
  height?: number
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    containerRef.current.innerHTML = ''

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

    containerRef.current.appendChild(script)

    return () => {
      containerRef.current?.replaceChildren()
    }
  }, [keyId, width, height])

  return (
    <div
      ref={containerRef}
      className="mx-auto"
      style={{ width, height, minHeight: height }}
    />
  )
}
