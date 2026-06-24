import Header from '@/components/header'
import Footer from '@/components/footer'

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
           

            {/* Hero Section */}
            <section className="bg-secondary border-b border-border">
                <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <h1 className="text-5xl font-bold text-foreground mb-4">
                        Terms & Conditions
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Please read these terms carefully before using our website or
                        placing an order.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="flex-1 py-16">
                <div className="max-w-4xl mx-auto px-4 space-y-8">

                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Acceptance of Terms
                        </h2>

                        <p className="text-muted-foreground leading-relaxed">
                            By accessing and using our website, you agree to comply with
                            these Terms & Conditions. If you do not agree with any part of
                            these terms, please do not use our website.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Orders & Payments
                        </h2>

                        <ul className="space-y-2 text-muted-foreground">
                            <li>• All orders are subject to availability.</li>
                            <li>• We reserve the right to cancel any order.</li>
                            <li>• Cash on Delivery (COD) is available on eligible orders.</li>
                            <li>• Prices are listed in Indian Rupees (₹).</li>
                        </ul>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Shipping & Delivery
                        </h2>

                        <ul className="space-y-2 text-muted-foreground">
                            <li>• Free shipping on orders above ₹100.</li>
                            <li>• Orders below ₹100 may incur shipping charges.</li>
                            <li>• Delivery generally takes 7–10 business days.</li>
                            <li>• Delivery timelines may vary by location.</li>
                        </ul>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Returns & Refunds
                        </h2>

                        <ul className="space-y-2 text-muted-foreground">
                            <li>• Returns are accepted within 7 days of delivery.</li>
                            <li>• Products must be unused and in original packaging.</li>
                            <li>• Refunds are processed after product inspection.</li>
                            <li>• COD refunds are issued via bank transfer.</li>
                        </ul>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            User Responsibilities
                        </h2>

                        <ul className="space-y-2 text-muted-foreground">
                            <li>• Provide accurate order and contact information.</li>
                            <li>• Do not misuse or attempt to disrupt the website.</li>
                            <li>• Respect applicable laws while using our services.</li>
                        </ul>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Intellectual Property
                        </h2>

                        <p className="text-muted-foreground leading-relaxed">
                            All content, images, logos, designs, and materials on this
                            website are the property of the company and may not be copied,
                            distributed, or reproduced without permission.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Limitation of Liability
                        </h2>

                        <p className="text-muted-foreground leading-relaxed">
                            We are not liable for indirect, incidental, or consequential
                            damages arising from the use of our website, products, or
                            services.
                        </p>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-3">
                            Contact Information
                        </h2>

                        <p className="text-muted-foreground mb-3">
                            If you have questions about these Terms & Conditions, please
                            contact us.
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