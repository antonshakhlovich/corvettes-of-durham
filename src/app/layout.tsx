import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Corvettes of Durham - Durham Region Corvette Club',
  description: 'A dedicated group of Corvette enthusiasts in Durham Region, Ontario, Canada. Join us for meetings, cruises, car shows, and charity events.',
  keywords: ['Corvette', 'Durham Region', 'Car Club', 'Ontario', 'Corvette Club', 'Car Shows'],
  openGraph: {
    title: 'Corvettes of Durham',
    description: 'Durham Region Corvette enthusiast club since 2000',
    type: 'website',
    locale: 'en_CA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
