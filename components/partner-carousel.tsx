'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const partners = [
  {
    name: 'Latvijas valsts meži',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Latvijas_valsts_me%C5%BEi_idTn3M4yWl_0-fjAMJ9l5pCaFj1Afge3RYX5rZEfXgm.png',
  },
  {
    name: 'Latvijas Finieris',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Latvijas_Finieris_AS_id_fVQzm0I_0-uXuwLNZnUIr5ni6TPwwOSY67qGBxj0.png',
  },
  {
    name: 'Nidrāji MR',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/idjbpsM6kj_logos-qGeiEqG3rxesqFF9E8RQCFDoHPmiSq.png',
  },
  {
    name: 'R GRUPA',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R_GRUPA_idsfYm-39J_0-gWFApMxGizbCUonoz7EOKJPoAonBxg.png',
  },
  {
    name: 'PRIEDES AG',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRIEDES_AG_idx2EYih-G_0-IDEmBj870UOzG6tTJr8eGVhv9vpFeo.png',
  },
  {
    name: 'PATA',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/idrwgez9Ah_logos-baoHiIfVmEYHwLsR4jR7s4pkEFBAgQ.png',
  },
  {
    name: 'BONO Group',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BONO_Group_idEVZYswIK_0-qy86XHPfxe4ihFkK4Tbwum7FKQ7te8.png',
  },
  {
    name: 'Meža Enerģija',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Me%C5%BEa_Ener%C4%A3ija_id8_-DePEl_0-tCTzCysLsU9f81Q4iIZz7ptVZzPafX.png',
  },
  {
    name: 'BALTU KOKS',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/id7judnuyL_logos-eVMQHZxZLuSqlYZp03vId3CLlas7lg.png',
  },
]

export default function PartnerCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const itemsPerView = 3
  const totalSlides = Math.ceil(partners.length / itemsPerView)

  const next = useCallback(() => {
    setCurrent((current + 1) % totalSlides)
    setIsAutoPlay(false)
  }, [totalSlides])

  const prev = useCallback(() => {
    setCurrent((current - 1 + totalSlides) % totalSlides)
    setIsAutoPlay(false)
  }, [totalSlides, current])

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSlides])

  // Resume autoplay after user interaction
  useEffect(() => {
    if (!isAutoPlay) {
      const timeout = setTimeout(() => setIsAutoPlay(true), 5000)
      return () => clearTimeout(timeout)
    }
  }, [isAutoPlay])

  const startIndex = current * itemsPerView
  const visiblePartners = partners.slice(startIndex, startIndex + itemsPerView)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Trusted Partners
          </h2>
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[150px]">
          {visiblePartners.map((partner, index) => (
            <div
              key={startIndex + index}
              className="flex items-center justify-center bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-20">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index)
                setIsAutoPlay(false)
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
