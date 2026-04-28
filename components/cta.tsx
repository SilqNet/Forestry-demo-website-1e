'use client'

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

export default function CTA() {
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
    <section className="relative w-full py-32 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile_background-Vc0f2YhPcxs9jF6RNYgxrxg3IG6RRs.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Forestry_demo_hero_page-xS1LfNF0pdzacu715Hb5bCeueDcRfn.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-4">
        <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
          GET STARTED NOW
        </p>
        <h2 className="text-[22px] leading-[1.18] font-bold text-white text-balance mb-6 uppercase">
          BEGIN YOUR FORESTRY PROJECT TODAY WITH OUR EXPERT, RELIABLE TEAM
        </h2>
        <p className="text-[19px] leading-[1.6] font-normal text-white/90 max-w-3xl mb-8">
          At Treant, we harvest forests responsibly, provide premium timber, and replant for tomorrow — ensuring strength, sustainability, and trust in every Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="bg-primary hover:bg-primary-foreground/10 text-white px-8 py-3 rounded-full text-[16px] font-semibold transition-colors">
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
