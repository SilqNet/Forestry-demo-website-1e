'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'WHAT SERVICES DO YOU PROVIDE?',
    answer: 'We provide comprehensive forestry services including timber harvesting, forest management, sustainable logging practices, and timber trading across Latvia and the Baltic region.',
  },
  {
    question: 'IS YOUR LOGGING PROCESS ENVIRONMENTALLY FRIENDLY?',
    answer: 'Yes, we follow strict environmental protocols and sustainable logging practices. Our processes ensure minimal impact on ecosystems while maintaining forest health for future generations.',
  },
  {
    question: 'HOW DO I REQUEST A SERVICE?',
    answer: 'You can contact us directly through our website contact form, phone number, or email. Our team will respond promptly to discuss your specific forestry needs and provide a customized solution.',
  },
  {
    question: 'ARE YOUR WORKERS AND EQUIPMENT CERTIFIED?',
    answer: 'Yes, all our workers are fully trained and certified according to international standards. Our equipment is regularly maintained and certified for safety and efficiency.',
  },
  {
    question: 'WHAT REGIONS DO YOU OPERATE IN?',
    answer: 'We operate throughout Latvia and service the Baltic region. Our established network allows us to handle projects of any scale efficiently.',
  },
  {
    question: 'CAN YOU ASSIST WITH LAND REPLANTING?',
    answer: 'Yes, we offer comprehensive replanting services as part of our commitment to sustainable forestry and environmental responsibility.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden border border-border">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20190317-zK6SfhQoFQgnkoMDWs2yh9BGtmeYEw.png"
              alt="FAQ"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Accordion */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
              COMMON QUESTIONS ABOUT OUR SERVICES
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <span className="font-semibold text-foreground text-left">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Expanded Content */}
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-background border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
