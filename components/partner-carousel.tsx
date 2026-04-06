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
    name: 'Latvijas Mežs',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Latvijasmezs-lv_idQkwXJx0w_0-jPrm4GWIp9eth3EzyWnpsSt0MhMMt9.png',
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
  const [current, setCurrent] = useState(1)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const itemsPerView = isMobile ? 1 : 3
  const extendedPartners = [partners[partners.length - 1], ...partners, partners[0]]

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
      const timeout = setTimeout(() => setIsAutoPlay(true), 5000)
      return () => clearTimeout(timeout)
    }
  }, [isAutoPlay])

  useEffect(() => {
    if (current === 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        setCurrent(partners.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }

    if (current === partners.length + 1) {
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
            Sadarbības partneri
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prev}
            aria-label="Previous partners"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 p-2 border border-border rounded-full bg-white hover:bg-muted transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            aria-label="Next partners"
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
              {extendedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 px-4 py-6 flex items-center justify-center"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="relative w-full h-16 md:h-20">
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
          </div>
        </div>
      </div>
    </section>
  )
}
