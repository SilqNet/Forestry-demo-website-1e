'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    company: 'Company One',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    rating: 5,
  },
  {
    company: 'Company Two',
    text: 'Exceptional service and professional team. They delivered exactly what we needed on time and within budget.',
    rating: 5,
  },
  {
    company: 'Company Three',
    text: 'Outstanding forestry solutions. Highly recommend their services to any business in the timber industry.',
    rating: 5,
  },
  {
    company: 'Company Four',
    text: 'Great partnership experience. Their expertise and reliability make them stand out in the market.',
    rating: 5,
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
    setCurrent((current + 1) % totalSlides)
    setIsAutoPlay(false)
  }, [totalSlides, current])

  const prev = useCallback(() => {
    setCurrent((current - 1 + totalSlides) % totalSlides)
    setIsAutoPlay(false)
  }, [totalSlides, current])

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSlides])

  // Resume autoplay after user interaction
  useEffect(() => {
    if (!isAutoPlay) {
      const timeout = setTimeout(() => setIsAutoPlay(true), 6000)
      return () => clearTimeout(timeout)
    }
  }, [isAutoPlay])

  const startIndex = current * itemsPerView
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerView
  )

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
          className={`grid gap-8 ${
            isMobile ? 'grid-cols-1' : 'grid-cols-2'
          } min-h-[300px]`}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={startIndex + index}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 italic text-lg">
                "{testimonial.text}"
              </p>

              {/* Company */}
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.company}
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
