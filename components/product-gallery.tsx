'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductGalleryProps {
  name: string
  images: string[]
}

export default function ProductGallery({ name, images }: ProductGalleryProps) {
  const galleryImages = images.length > 0 ? images : ['/images/placeholder.png']
  const [selectedImage, setSelectedImage] = useState(galleryImages[0])

  return (
    <div>
      <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
        <Image
          src={selectedImage}
          alt={name}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mt-4 flex gap-2 items-start overflow-x-auto pb-1">
        {galleryImages.map((img, index) => {
          const isSelected = img === selectedImage

          return (
            <button
              key={`${img}-${index}`}
              type="button"
              onClick={() => setSelectedImage(img)}
              className={`relative w-20 h-20 shrink-0 bg-secondary rounded overflow-hidden border-2 transition-colors ${
                isSelected ? 'border-primary' : 'border-transparent'
              }`}
              aria-label={`View ${name} image ${index + 1}`}
            >
              <Image
                src={img}
                alt={`${name} ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
