'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { OfferModal } from '@/components/offer-modal'

const stats = [
  { value: '15+', label: 'Gadu pieredze' },
  { value: '100+', label: 'Sadarbības ar meža īpašniekiem' },
  { value: '50+', label: 'Ilgtermiņa sadarbības' },
]

export default function Hero() {
  const [offerModalOpen, setOfferModalOpen] = useState(false)

  const scrollToWhyUs = () => {
    document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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

      <div className="relative z-10 flex h-full w-full flex-col justify-end px-4 md:px-12 lg:px-20 pb-12 md:pb-16">
        {/* Top: headline + subheader — wide enough for 2-line desktop title */}
        <div className="w-full max-w-[56rem] xl:max-w-[62rem]">
          <h1
            className="w-full text-left text-[clamp(1.65rem,3.6vw,2.85rem)] leading-[1.12] tracking-[-0.045em]"
            style={{ fontWeight: 400 }}
          >
            <span
              className="block text-white lg:whitespace-nowrap"
              style={{
                fontFamily: "var(--font-playfair), ui-serif, Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              Jūsu mežs ir vērtība.
            </span>
            <span
              className="mt-[0.08em] block text-gold lg:whitespace-nowrap"
              style={{
                fontFamily: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                letterSpacing: '-0.045em',
              }}
            >
              Mēs palīdzam to saglabāt un vairot.
            </span>
          </h1>

          <p
            className="mt-4 md:mt-5 max-w-2xl text-left text-[15px] sm:text-[16px] leading-[1.5] tracking-[-0.01em] text-white/80"
            style={{
              fontFamily: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
            }}
          >
            No meža apsaimniekošanas un cirsmu izstrādes līdz kokmateriālu transportam — nodrošinām pārdomātus mežsaimniecības risinājumus visā Latvijā. Ar individuālu pieeju, skaidru komunikāciju un atbildību par paveikto.
          </p>
        </div>

        {/* Bottom action row: CTAs left + statistics right */}
        <div className="mt-5 md:mt-6 flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={() => setOfferModalOpen(true)}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 md:px-5 md:py-2.5 text-[13px] md:text-[14px] font-semibold text-black transition-colors duration-300 hover:bg-[#B38D48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              style={{ fontFamily: "'Saira Expanded', sans-serif", letterSpacing: 'normal', textTransform: 'none' }}
            >
              Pieteikt apsaimniekošanu
              <ArrowRight
                size={14}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </button>

            <button
              type="button"
              onClick={scrollToWhyUs}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold/70 bg-black/35 px-4 py-2.5 md:px-5 md:py-2.5 text-[13px] md:text-[14px] font-semibold text-white backdrop-blur-[2px] transition-colors duration-300 hover:border-gold hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              style={{ fontFamily: "'Saira Expanded', sans-serif", letterSpacing: 'normal', textTransform: 'none' }}
            >
              Uzzināt Vairāk
              <ArrowRight
                size={14}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </button>
          </div>

          <div
            className="hero-statistics shrink-0 pr-14 sm:pr-16 lg:pr-20"
            aria-label="Uzņēmuma sasniegumi"
          >
            {stats.map((stat) => (
              <div key={stat.value + stat.label} className="hero-statistics-item">
                <div className="hero-statistics-number">{stat.value}</div>
                <p className="hero-statistics-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OfferModal open={offerModalOpen} onOpenChange={setOfferModalOpen} />
    </section>
  )
}
