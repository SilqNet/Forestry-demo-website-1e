'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Phone } from 'lucide-react'

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
    <section className="relative w-full h-screen pt-16 overflow-hidden">
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

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-6">
          BEGIN YOUR FORESTRY PROJECT TODAY WITH OUR EXPERT, RELIABLE TEAM
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-8 text-balance">
          At Treant, we harvest forests responsibly, provide premium timber, and replant for tomorrow — ensuring strength, sustainability, and trust in every Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="bg-primary hover:bg-primary-foreground/10 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Get Started
          </button>
          <button className="bg-primary hover:bg-primary-foreground/10 text-white p-3 rounded-full transition-colors">
            <Phone size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
