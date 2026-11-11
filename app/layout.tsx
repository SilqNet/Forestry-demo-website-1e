import type { Metadata } from 'next'
import { Montserrat, Inter, Saira, Manrope, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import FloatingButton from '@/components/floating-button'
import './globals.css'

const _montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat" 
});

const _inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--font-inter" 
});

const _saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-saira"
});

const _manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
});

const _playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  style: "italic",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://v0-forestry-demo-website.vercel.app/'),
  title: 'Mežsaimniecības pakalpojumi visā Latvijā | MežsLV',
  description: 'Ilgtspējīgi mežu apsaimniekošanas pakalpojumi un meža īpašumu iegāde visā Latvijā. MežsLV – uzticams partneris mežā.',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    url: 'https://v0-forestry-demo-website.vercel.app/',
    title: 'Mežsaimniecības pakalpojumi visā Latvijā | MežsLV',
    description: 'Ilgtspējīgi mežu apsaimniekošanas pakalpojumi un meža īpašumu iegāde visā Latvijā. MežsLV – uzticams partneris mežā.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MežsLV - Profesionāli mežizstrādes pakalpojumi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mežsaimniecības pakalpojumi visā Latvijā | MežsLV',
    description: 'Ilgtspējīgi mežu apsaimniekošanas pakalpojumi un meža īpašumu iegāde visā Latvijā. MežsLV – uzticams partneris mežā.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lv">
      <body className={`${_montserrat.variable} ${_inter.variable} ${_saira.variable} ${_manrope.variable} ${_playfair.variable} font-sans antialiased`}>
        <FloatingButton />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
