import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import AdBlockDetector from '@/components/adblock-detector'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'OfferClub - Premium Fashion & Lifestyle',
  description: 'Discover curated premium products for the discerning customer',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/pp.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/pp.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/pp.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      {/* <body className="font-sans antialiased">
        <Header />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
            <Footer />
      </body> */}

      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <script src="https://ruffianattorneymargarine.com/85/bf/5b/85bf5b641f6edfc1797dbedf44b27a1f.js"></script>


        <script src="https://ruffianattorneymargarine.com/54/47/c7/5447c769e82f2b2bfece9508e57afec1.js"></script>


        {process.env.NODE_ENV === 'production' && <Analytics />}

        <Footer />
        <AdBlockDetector />
      </body>

    </html>
  )
}
