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
    <section className="relative w-full h-screen pt-20 overflow-hidden">
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

      <div className="relative z-10 flex h-full w-full flex-col items-start justify-end text-left px-4 md:px-12 lg:px-20 pb-12 md:pb-16">
        <h1 className="max-w-5xl text-left text-[30px] md:text-[42px] text-white leading-[1.12] mb-4" style={{ fontFamily: "'Saira Expanded', sans-serif", fontWeight: 600, letterSpacing: 'normal', textTransform: 'none' }}>
          „GR GRUPA” - uzticams partneris mežsaimniecībā ar vairāk nekā 15 gadu pieredzi visā Latvijā
        </h1>
      </div>
    </section>
  )
}
