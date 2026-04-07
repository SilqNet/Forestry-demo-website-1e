'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const partners = [
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
  const tripledPartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Mūsu sadarbības partneri
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll">
            {tripledPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-[200px] md:w-[250px] px-8 flex items-center justify-center"
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

      <style jsx>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </section>
  )
}
