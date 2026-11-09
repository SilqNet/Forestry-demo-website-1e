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
        <h1
          className="max-w-5xl text-left text-[30px] md:text-[42px] leading-[1.18]"
          style={{ fontFamily: "'Saira Expanded', sans-serif", fontWeight: 600, letterSpacing: 'normal', textTransform: 'none', fontStyle: 'normal' }}
        >
          <span className="block text-white">Jūsu mežs ir vērtība.</span>
          <span className="block text-gold">Mēs palīdzam to saglabāt un vairot.</span>
        </h1>

        <p
          className="mt-4 md:mt-5 max-w-2xl text-left text-[15px] md:text-[17px] leading-[1.55] text-white/85"
          style={{ fontFamily: "'Saira', sans-serif", fontWeight: 400, letterSpacing: 'normal', textTransform: 'none', fontStyle: 'normal' }}
        >
          No meža apsaimniekošanas un cirsmu izstrādes līdz kokmateriālu transportam — nodrošinām pārdomātus mežsaimniecības risinājumus visā Latvijā. Ar individuālu pieeju, skaidru komunikāciju un atbildību par paveikto.
        </p>

        <button
          type="button"
          onClick={() => setOfferModalOpen(true)}
          className="group mt-5 md:mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 md:px-5 md:py-2.5 text-[13px] md:text-[14px] font-semibold text-black transition-colors duration-300 hover:bg-[#B38D48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          style={{ fontFamily: "'Saira Expanded', sans-serif", letterSpacing: 'normal', textTransform: 'none' }}
        >
          Pieteikt apsaimniekošanu
          <ArrowRight
            size={14}
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </button>
      </div>

      <OfferModal open={offerModalOpen} onOpenChange={setOfferModalOpen} />
    </section>
  )
}
