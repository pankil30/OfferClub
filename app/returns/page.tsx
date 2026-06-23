import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ReturnsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Returns & Refunds Policy
          </h1>

          <p className="text-muted-foreground max-w-2xl">
            We want you to be completely satisfied with your purchase.
            Please read our return and refund policy below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              Return Eligibility
            </h2>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Returns are accepted within 7 days of delivery.</li>
              <li>• Product must be unused and in original packaging.</li>
              <li>• All tags, accessories, and invoices must be included.</li>
              <li>• Damaged or used products are not eligible for return.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              Refund Process
            </h2>

            <ul className="space-y-2 text-muted-foreground">
              <li>• After receiving the returned product, we inspect it.</li>
              <li>• Approved refunds are processed within 5-7 business days.</li>
              <li>• Refunds are issued to the original payment method.</li>
              <li>• For Cash on Delivery orders, refunds are transferred to your bank account.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              Non-Returnable Items
            </h2>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Used or damaged products.</li>
              <li>• Products without original packaging.</li>
              <li>• Clearance or final sale items.</li>
              <li>• Personalized or custom-made products.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              How to Request a Return
            </h2>

            <ol className="space-y-2 text-muted-foreground">
              <li>1. Contact our support team.</li>
              <li>2. Provide your Order ID and product details.</li>
              <li>3. Our team will arrange return pickup if eligible.</li>
              <li>4. Refund will be processed after verification.</li>
            </ol>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              Need Help?
            </h2>

            <p className="text-muted-foreground">
              For any return or refund queries, contact our customer support team.
            </p>

            <p className="mt-3 font-medium">
              Email: support@yourstore.com
            </p>

            <p className="font-medium">
              Phone: +91 XXXXX XXXXX
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}