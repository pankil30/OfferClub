import Header from '@/components/header'
import Footer from '@/components/footer'

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
     

      {/* Hero Section */}
      <section className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Cookies Policy
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how we use cookies and similar technologies to improve your
            browsing experience on our website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              What Are Cookies?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device when you visit
              a website. They help websites remember user preferences and
              improve overall user experience.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              How We Use Cookies
            </h2>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Remember your shopping cart items.</li>
              <li>• Save user preferences and settings.</li>
              <li>• Improve website performance.</li>
              <li>• Analyze website traffic and visitor behavior.</li>
              <li>• Enhance security and prevent fraud.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Types of Cookies We Use
            </h2>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Essential Cookies – Required for website functionality.</li>
              <li>• Analytics Cookies – Help us understand site usage.</li>
              <li>• Performance Cookies – Improve speed and reliability.</li>
              <li>• Preference Cookies – Remember your settings.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Managing Cookies
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              You can control or disable cookies through your browser settings.
              However, disabling certain cookies may affect website
              functionality and shopping features.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Third-Party Cookies
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              We may use trusted third-party services such as analytics and
              advertising partners that place cookies on your device to help us
              improve our services and website experience.
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">
              Contact Us
            </h2>

            <p className="text-muted-foreground mb-3">
              If you have any questions about our Cookies Policy, please contact
              us.
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

   
    </div>
  )
}