'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import {
    Truck,
    Clock,
    MapPin,
    Package,
} from 'lucide-react'

export default function ShippingPage() {
    return (
        <div className="flex flex-col min-h-screen">
        

            {/* Hero */}
            <section className="bg-secondary border-b border-border">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        Shipping Information
                    </h1>

                    <p className="mt-4 text-muted-foreground max-w-2xl">
                        Learn about our delivery process, shipping timelines,
                        and order tracking details.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="flex-1 py-16">
                <div className="max-w-5xl mx-auto px-4 space-y-8">

                    {/* Delivery Time */}
                    {/* Delivery Time */}
                    <div className="border border-border rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="w-6 h-6" />
                            <h2 className="text-2xl font-semibold">
                                Delivery Time
                            </h2>
                        </div>

                        <ul className="space-y-2 text-muted-foreground">
                            <li>• Order Processing: 1–2 Business Days</li>
                            <li>• Standard Delivery: 7–10 Business Days</li>
                            <li>• Delivery time may vary depending on location</li>
                        </ul>
                    </div>

                    {/* Shipping Charges */}
                    <div className="border border-border rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Truck className="w-6 h-6" />
                            <h2 className="text-2xl font-semibold">
                                Shipping Charges
                            </h2>
                        </div>

                        <ul className="space-y-2 text-muted-foreground">
                            <li>• Free Shipping on orders above ₹100</li>
                            <li>• ₹50 Shipping Charge on orders below ₹100</li>
                            <li>• Cash on Delivery (COD) Available</li>
                            <li>• No hidden charges</li>
                        </ul>
                    </div>

                    {/* Tracking */}
                    <div className="border border-border rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Package className="w-6 h-6" />
                            <h2 className="text-2xl font-semibold">
                                Order Tracking
                            </h2>
                        </div>

                        <p className="text-muted-foreground">
                            Once your order is shipped, you will receive a
                            tracking ID via SMS or email. You can use it
                            to track your shipment status.
                        </p>
                    </div>

                    {/* Service Areas */}
                    <div className="border border-border rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-6 h-6" />
                            <h2 className="text-2xl font-semibold">
                                Service Areas
                            </h2>
                        </div>

                        <p className="text-muted-foreground">
                            We currently deliver across India through
                            trusted courier partners.
                        </p>
                    </div>

                </div>
            </section>

  
        </div>
    )
}