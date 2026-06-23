import Header from '@/components/header'
import Footer from '@/components/footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">

          {/* Information Collection */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Information We Collect
            </h2>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Name and contact information.</li>
              <li>• Shipping and billing address.</li>
              <li>• Email address and phone number.</li>
              <li>• Order and purchase history.</li>
              <li>• Device and browser information.</li>
            </ul>
          </div>

          {/* How We Use Information */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Process and deliver orders.</li>
              <li>• Provide customer support.</li>
              <li>• Improve our website and services.</li>
              <li>• Send order updates and notifications.</li>
              <li>• Prevent fraud and maintain security.</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Data Security
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              We use industry-standard security measures to protect your
              personal information from unauthorized access, misuse,
              disclosure, or loss.
            </p>
          </div>

          {/* Cookies */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Cookies
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies to improve your browsing experience,
              remember preferences, and analyze website traffic.
            </p>
          </div>

          {/* Third Party */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Third-Party Services
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share data with
              trusted service providers such as shipping partners and analytics
              services only when necessary.
            </p>
          </div>

          {/* User Rights */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Your Rights
            </h2>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Request access to your personal data.</li>
              <li>• Request correction of inaccurate information.</li>
              <li>• Request deletion of your data where applicable.</li>
              <li>• Opt out of promotional communications.</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">
              Contact Us
            </h2>

            <p className="text-muted-foreground mb-3">
              If you have any questions regarding this Privacy Policy,
              please contact us.
            </p>

            <p className="font-medium">
              Email: support@yourstore.com
            </p>

            <p className="font-medium">
              WhatsApp: +91 98765 43210
            </p>

            <p className="font-medium">
              Support Hours: Monday – Saturday, 10:00 AM – 6:00 PM
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}