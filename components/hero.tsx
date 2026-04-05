'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative w-full h-screen pt-16 overflow-x-hidden overflow-y-auto">
      {/* Desktop Video Background */}
      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Forestry_demo_hero_page-xS1LfNF0pdzacu715Hb5bCeueDcRfn.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {/* Mobile Image Background */}
      {isMobile && (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile_background-Vc0f2YhPcxs9jF6RNYgxrxg3IG6RRs.jpg"
          alt="Forest background"
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content - Positioned lower to approach next section */}
      <div className="relative h-full flex flex-col items-start justify-end text-left px-4 md:px-12 lg:px-20 pb-24 md:pb-32">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl text-balance leading-tight">
          GR GRUPA - Your Trusted Forestry Partner
        </h1>
      </div>
    </section>
  )
}
