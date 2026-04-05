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
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const itemsPerView = isMobile ? 1 : 2
  const totalSlides = Math.ceil(testimonials.length / itemsPerView)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }, [])

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  // Resume autoplay after user interaction
  useEffect(() => {
    if (!isAutoPlay) {
      const timeout = setTimeout(() => setIsAutoPlay(true), 6000)
      return () => clearTimeout(timeout)
    }
  }, [isAutoPlay])

  const startIndex = isMobile ? current : current * 2
  const visibleTestimonials = isMobile
    ? [testimonials[current]]
    : [testimonials[current * 2 % testimonials.length], testimonials[(current * 2 + 1) % testimonials.length]]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Partners Say
            </h2>
          </div>
          <div className="hidden md:flex gap-4">
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

        {/* Testimonials Carousel */}
        <div
          className={`grid gap-12 ${
            isMobile ? 'grid-cols-1' : 'grid-cols-2'
          } min-h-[300px]`}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div key={startIndex + index} className="text-center">
              {/* Company Logo */}
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

              {/* Quote */}
              <p className="text-foreground mb-6 italic text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.authorName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.authorTitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation - Mobile */}
        <div className="md:hidden flex gap-4 mt-8 justify-center">
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
    </section>
  )
}
