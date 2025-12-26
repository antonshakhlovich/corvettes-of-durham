import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C10001',
}

export const metadata: Metadata = {
  title: {
    default: 'Corvettes of Durham - Durham Region Corvette Club',
    template: '%s | Corvettes of Durham',
  },
  description: 'A dedicated group of Corvette enthusiasts in Durham Region, Ontario, Canada. Join us for meetings, cruises, car shows, and charity events. Established 2000.',
  keywords: ['Corvette', 'Durham Region', 'Car Club', 'Ontario', 'Corvette Club', 'Car Shows', 'Durham Ontario', 'Ajax', 'Whitby', 'Oshawa', 'Corvette Owners'],
  authors: [{ name: 'Corvettes of Durham' }],
  creator: 'Corvettes of Durham',
  publisher: 'Corvettes of Durham',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Corvettes of Durham',
    description: 'Durham Region Corvette enthusiast club since 2000. Monthly meetings, cruises, car shows, and charity events.',
    type: 'website',
    locale: 'en_CA',
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: '/content/images/misc/club-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Corvettes of Durham Club Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corvettes of Durham',
    description: 'Durham Region Corvette enthusiast club since 2000',
    images: ['/content/images/logo/club-logo-full.jpeg'],
  },
  icons: {
    icon: '/content/images/logo/favicon.svg',
    apple: '/content/images/logo/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
