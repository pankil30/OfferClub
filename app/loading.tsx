import ProductLoader from '@/components/product-loader'

export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse mb-10">
          <div className="h-8 w-48 bg-secondary rounded mb-3" />
          <div className="h-4 w-72 bg-secondary rounded" />
        </div>

        <ProductLoader />
      </div>
    </main>
  )
}
