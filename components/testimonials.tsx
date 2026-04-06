'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRIEDES_AG_idx2EYih-G_0-IDEmBj870UOzG6tTJr8eGVhv9vpFeo.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    authorName: 'John Smith',
    authorTitle: 'CEO, Forest Solutions',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/idrwgez9Ah_logos-baoHiIfVmEYHwLsR4jR7s4pkEFBAgQ.png',
    text: 'Exceptional service and professional team. They delivered exactly what we needed on time and within budget.',
    authorName: 'Jane Doe',
    authorTitle: 'Director, Timber Co',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BONO_Group_idEVZYswIK_0-qy86XHPfxe4ihFkK4Tbwum7FKQ7te8.png',
    text: 'Outstanding forestry solutions. Highly recommend their services to any business in the timber industry.',
    authorName: 'Robert Johnson',
    authorTitle: 'Manager, Wood Products',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Me%C5%BEa_Ener%C4%A3ija_id8_-DePEl_0-tCTzCysLsU9f81Q4iIZz7ptVZzPafX.png',
    text: 'Great partnership experience. Their expertise and reliability make them stand out in the market.',
    authorName: 'Maria Garcia',
    authorTitle: 'Partner, Energy Solutions',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Latvijas_Finieris_AS_id_fVQzm0I_0-uXuwLNZnUIr5ni6TPwwOSY67qGBxj0.png',
    text: 'Sadarbība ir ļoti profesionāla, lēmumi tiek pieņemti ātri un korekti.',
    authorName: 'Andris Ozols',
    authorTitle: 'Ražošanas vadītājs',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Latvijas_valsts_me%C5%BEi_idTn3M4yWl_0-fjAMJ9l5pCaFj1Afge3RYX5rZEfXgm.png',
    text: 'Komanda vienmēr nodrošina skaidru komunikāciju un precīzu darbu izpildi.',
    authorName: 'Ilze Kalniņa',
    authorTitle: 'Projektu koordinatore',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRIEDES_AG_idx2EYih-G_0-IDEmBj870UOzG6tTJr8eGVhv9vpFeo.png',
    text: 'Pakalpojumi ir stabili kvalitatīvi, arī sarežģītos objektos.',
    authorName: 'Mārtiņš Bērziņš',
    authorTitle: 'Iepirkumu speciālists',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/id7judnuyL_logos-eVMQHZxZLuSqlYZp03vId3CLlas7lg.png',
    text: 'Piedāvātie nosacījumi ir konkurētspējīgi un caurspīdīgi.',
    authorName: 'Santa Liepa',
    authorTitle: 'Valdes locekle',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BONO_Group_idEVZYswIK_0-qy86XHPfxe4ihFkK4Tbwum7FKQ7te8.png',
    text: 'Ilgtermiņā uzticams partneris ar augstu atbildības sajūtu.',
    authorName: 'Jānis Krasts',
    authorTitle: 'Attīstības vadītājs',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(1)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const itemsPerView = isMobile ? 1 : 2
  const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ]

  const next = useCallback(() => {
    setCurrent((prev) => prev + 1)
    setIsAutoPlay(false)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => prev - 1)
    setIsAutoPlay(false)
  }, [])

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1)
    }, 4500)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  useEffect(() => {
    if (!isAutoPlay) {
      const timeout = setTimeout(() => setIsAutoPlay(true), 6000)
      return () => clearTimeout(timeout)
    }
  }, [isAutoPlay])

  useEffect(() => {
    if (current === 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        setCurrent(testimonials.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }

    if (current === testimonials.length + 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        setCurrent(1)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [current])

  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => setIsTransitioning(true))
      return () => cancelAnimationFrame(raf)
    }
  }, [isTransitioning])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Klientu atsauksmes
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 p-2 border border-border rounded-full bg-white hover:bg-muted transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2 border border-border rounded-full bg-white hover:bg-muted transition-colors"
          >
            <ChevronRight size={22} />
          </button>

          <div className="mx-12 overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${(current * 100) / itemsPerView}%)`,
                transition: isTransitioning ? 'transform 2s ease-in-out' : 'none',
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.authorName}-${index}`}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="text-center py-3 md:py-6 min-h-[280px]">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-32 h-16">
                        <Image
                          src={testimonial.companyLogo}
                          alt="Company logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-foreground mb-6 italic text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.authorName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.authorTitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
