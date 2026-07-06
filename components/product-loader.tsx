interface ProductLoaderProps {
  count?: number
}

export default function ProductLoader({ count = 8 }: ProductLoaderProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="aspect-square bg-secondary rounded-md mb-4" />
          <div className="h-3 w-24 bg-secondary rounded mb-3" />
          <div className="h-4 w-full bg-secondary rounded mb-2" />
          <div className="h-4 w-20 bg-secondary rounded" />
        </div>
      ))}
    </div>
  )
}
