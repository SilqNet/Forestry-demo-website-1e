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
        {/* Left: copy + CTAs */}
        <div className="flex max-w-2xl xl:max-w-3xl flex-col items-start text-left lg:pb-0">
          <h1
            className="w-full text-left text-[clamp(1.75rem,4.2vw,3.25rem)] leading-[1.12] tracking-[-0.045em]"
            style={{ fontWeight: 400 }}
          >
            <span
              className="block text-white"
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
              className="mt-[0.08em] block text-gold"
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
            className="mt-4 md:mt-5 max-w-[46rem] text-left text-[15px] sm:text-[16px] leading-[1.5] tracking-[-0.01em] text-white/80"
            style={{
              fontFamily: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
            }}
          >
            No meža apsaimniekošanas un cirsmu izstrādes līdz kokmateriālu transportam — nodrošinām pārdomātus mežsaimniecības risinājumus visā Latvijā. Ar individuālu pieeju, skaidru komunikāciju un atbildību par paveikto.
          </p>

          <div className="mt-5 md:mt-6 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
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
        </div>

        {/* Stats: identical fixed widths + identical gap — not stretched by parent flex */}
        <div
          className="mt-10 w-full lg:mt-0 lg:absolute lg:bottom-16 lg:right-20 xl:right-24"
          aria-label="Uzņēmuma sasniegumi"
        >
          <div className="flex w-max max-w-full items-start gap-6 sm:gap-8 pr-14 sm:pr-16 lg:ml-auto lg:pr-[4.5rem]">
            {stats.map((stat) => (
              <div
                key={stat.value + stat.label}
                className="w-[5.75rem] sm:w-[6.75rem] lg:w-[7.75rem] shrink-0 text-left"
                style={{ textShadow: '0 1px 14px rgba(0,0,0,0.55)' }}
              >
                <div
                  className="text-[28px] sm:text-[34px] lg:text-[40px] leading-none text-white tabular-nums"
                  style={{
                    fontFamily: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {stat.value}
                </div>
                <p
                  className="mt-2 text-[12px] sm:text-[13px] leading-[1.35] text-white/80"
                  style={{
                    fontFamily: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OfferModal open={offerModalOpen} onOpenChange={setOfferModalOpen} />
    </section>
  )
}
