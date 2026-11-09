'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { OfferModal } from '@/components/offer-modal'

export default function Hero() {
  const [offerModalOpen, setOfferModalOpen] = useState(false)

  return (
    <section className="relative w-full h-screen pt-20 overflow-hidden bg-black">
      {/* Hero Vimeo Background */}
      <div className="hero-video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1188015134?background=1&autoplay=1&muted=1&loop=1&controls=0&autopause=0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          title="hero-bg"
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full w-full flex-col items-start justify-end text-left px-4 md:px-12 lg:px-20 pb-12 md:pb-16">
        <h1 className="max-w-5xl text-left text-[30px] md:text-[42px] text-white leading-[1.12]" style={{ fontFamily: "'Saira Expanded', sans-serif", fontWeight: 600, letterSpacing: 'normal', textTransform: 'none' }}>
          Uzticams partneris mežsaimniecībā jau vairāk nekā 15 gadus visā Latvijā
        </h1>

        <button
          type="button"
          onClick={() => setOfferModalOpen(true)}
          className="group mt-6 md:mt-8 inline-flex items-center gap-3 rounded-sm bg-gold px-6 py-3.5 md:px-8 md:py-4 text-[14px] md:text-[15px] font-semibold text-black transition-colors duration-300 hover:bg-[#B38D48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          style={{ fontFamily: "'Saira Expanded', sans-serif", letterSpacing: 'normal', textTransform: 'none' }}
        >
          Pieteikt apsaimniekošanu
          <ArrowRight
            size={18}
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </button>
      </div>

      <OfferModal open={offerModalOpen} onOpenChange={setOfferModalOpen} />
    </section>
  )
}
