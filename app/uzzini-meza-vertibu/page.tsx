'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Check, Phone, Mail, ArrowRight, ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function MezaVertibaPage() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)
  const bannerVideoRef = useRef<HTMLVideoElement | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property: '',
    message: ''
  })

  useEffect(() => {
    let rafId: number = 0
    const videos = [heroVideoRef.current, bannerVideoRef.current].filter(Boolean) as HTMLVideoElement[]

    const checkLoop = () => {
      videos.forEach(video => {
        if (video.duration > 0) {
          if (video.currentTime >= video.duration - 0.2) {
            video.currentTime = 0.001
            video.play().catch(() => {})
          }
        }
      })
      rafId = requestAnimationFrame(checkLoop)
    }

    videos.forEach(video => {
      video.muted = true
      video.defaultMuted = true
      video.play().catch(() => {})
    })

    rafId = requestAnimationFrame(checkLoop)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert('Paldies! Mēs ar jums sazināsimies tuvākajā laikā.')
  }

  return (
    <main className="min-h-screen bg-white text-foreground font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            controls={false}
            disablePictureInPicture
            preload="auto"
            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile_background-Vc0f2YhPcxs9jF6RNYgxrxg3IG6RRs.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Forestry_demo_hero_page-xS1LfNF0pdzacu715Hb5bCeueDcRfn.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 text-white">
              <h1 className="text-[36px] lg:text-[42px] font-bold mb-6 leading-tight whitespace-pre-line">
                Pērkam mežus un{"\n"}cirsmas
              </h1>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Augstākā tirgus cena',
                  'Iespēja saņemt avansu',
                  'Bezmaksas juridiskie pakalpojumi',
                  'Vienkārša un cilvēciska komunikācija'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] font-medium">
                    <div 
                      className="w-5 h-5 bg-gold" 
                      style={{ 
                        maskImage: 'url(/icons/right-down.png)', 
                        maskSize: 'contain', 
                        maskRepeat: 'no-repeat',
                        WebkitMaskImage: 'url(/icons/right-down.png)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat'
                      }} 
                    />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-6 items-center">
                <a 
                  href="tel:+37120000000" 
                  className="cta-premium"
                >
                  ZVANĪT
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full max-w-lg">
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-black leading-tight">
                  Saņemiet sava īpašuma vērtējumu <span className="text-gold">bez maksas</span>
                </h3>
                <p className="text-[22px] text-gray-600 mb-8 font-medium">Aizpildiet un mēs ar Jums sazināsimies</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vārds, Uzvārds</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm placeholder:text-sm"
                      placeholder="Jānis Bērziņš"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tālrunis</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm placeholder:text-sm"
                        placeholder="+371 ..."
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-pasts</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm placeholder:text-sm"
                        placeholder="janis@piemers.lv"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Īpašuma nosaukums / Kadastra Nr.</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm placeholder:text-sm"
                      placeholder="Meža mājas, 1234567890"
                      onChange={(e) => setFormData({...formData, property: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ziņa (pēc izvēles)</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-sm placeholder:text-sm"
                      placeholder="Vēlos uzzināt vairāk par..."
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="cta-premium w-full !py-5"
                  >
                    SAŅEMT PIEDĀVĀJUMU
                  </button>
                  <p className="text-[14px] text-gray-500 text-center mt-4">
                    Nospiežot pogu, Jūs piekrītat mūsu privātuma politikai un datu apstrādei.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section: Kāpēc izvēlēties mūs? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* Left Column */}
            <div className="lg:w-1/3 pt-1">
              <span className="text-gold text-[14px] font-bold tracking-widest uppercase mb-4 block">
                KĀPĒC IZVĒLĒTIES GR GRUPA
              </span>
              <h2 className="text-[22px] font-bold text-black leading-tight mb-8">
                Ieguvumi meža īpašniekiem
              </h2>
              <button className="cta-bordered-gold hidden lg:inline-flex">SAŅEMT PIEDĀVĀJUMU</button>
            </div>

            {/* Right Column */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 mb-8 lg:mb-0">
                {[
                  'Saimnieciski izdevīgākie piedāvājumi bez starpniekiem.',
                  'Augsta samaksa par meža īpašumiem.',
                  'Samaksa pirms mežizstrādes darbu uzsākšanas.',
                  'Avanss 1 darba dienas laikā.',
                  '100% Latvijas kapitāla uzņēmums, kas realizē koksni, radot tai augstu pievienoto vērtību.',
                  'GR GRUPAS vērtības ietver rūpes par darbinieku, partneru un sabiedrības labklājības veicināšanu.'
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div 
                      className="w-5 h-5 bg-gold shrink-0 mt-0.5" 
                      style={{ 
                        maskImage: 'url(/icons/right-down.png)', 
                        maskSize: 'contain', 
                        maskRepeat: 'no-repeat',
                        WebkitMaskImage: 'url(/icons/right-down.png)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat'
                      }} 
                    />
                    <div>
                      <p className="text-[14px] font-medium text-black leading-snug">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="cta-bordered-gold lg:hidden">SAŅEMT PIEDĀVĀJUMU</button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Banner Section: Tikai 4 soļi līdz darījumam */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={bannerVideoRef}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            controls={false}
            disablePictureInPicture
            preload="auto"
            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile_background-Vc0f2YhPcxs9jF6RNYgxrxg3IG6RRs.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          >
            <source src="/videos/download.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-[36px] lg:text-[52px] font-bold text-white mb-6 leading-tight">
            Gūsti maksimālu vērtību no meža
          </h2>
          <p className="text-[18px] lg:text-[22px] text-white/90 max-w-3xl mx-auto mb-10">
            Vietējā kapitāla uzņēmums nodrošina ilgtspējīgu mežu apsaimniekošanu
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cta-premium"
          >
            AIZPILDI PIETEIKUMU
          </button>
        </div>
      </section>

      {/* DAUDZU GADU PIEREDZE Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* Left Column */}
            <div className="lg:w-1/3 pt-1">
              <span className="text-gold text-[14px] font-bold tracking-widest uppercase mb-4 block">
                DAUDZU GADU PIEREDZE
              </span>
              <h2 className="text-[28px] lg:text-[32px] font-bold text-black leading-tight mb-8">
                Viegla un ērta sadarbība
              </h2>
              <button className="cta-bordered-gold hidden lg:inline-flex">SAŅEMT PIEDĀVĀJUMU</button>
            </div>

            {/* Right Column */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-12 mb-8 lg:mb-0">
                {[
                  { icon: 'phone-call.png', title: 'SAZINIES', sub: 'zvanot vai aizpildot pieteikumu' },
                  { icon: 'know-how.png', title: 'UZZINI', sub: 'kā gūt peļņu no sava īpašuma' },
                  { icon: 'offer.png', title: 'SAŅEM', sub: 'piedāvājumu un avansu' },
                  { icon: 'check.png', title: 'NOFORMĒ DARĪJUMU', sub: 'un saņem samaksu dienas laikā' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <img 
                      src={`/icons/${item.icon}`}
                      alt={item.title}
                      className="w-10 h-10 object-contain shrink-0 mt-1"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-[16px] font-bold text-black uppercase tracking-tight mb-1">{item.title}</h4>
                      <p className="text-[14px] text-gray-600 font-normal normal-case">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="cta-bordered-gold lg:hidden">SAŅEMT PIEDĀVĀJUMU</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-gold/10">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 8.89543 14.017 10V12M14.017 21H7.01701V15C7.01701 14.4477 7.46472 14 8.01701 14H11.017C12.1216 14 13.017 13.1046 13.017 12V10C13.017 8.89543 12.1216 8 11.017 8H8.01701C6.91244 8 6.01701 8.89543 6.01701 10V16C6.01701 17.1046 6.91244 18 8.01701 18H11.017C11.5693 18 12.017 18.4477 12.017 19V21H14.017Z" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <p className="text-2xl lg:text-3xl italic text-[#004225] font-light leading-relaxed mb-8">
                "Vīri atbrauca, visu izstaigāja, izstāstīja, kas būtu darāms. Neviens neko nepiespieda. Patika, ka man visu skaidroja saprotami – kā savējam. Mežs tagad ir sakopts, nav aizlaists. Kārtība. Un tas man ir svarīgi."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold">
                  JB
                </div>
                <div>
                  <div className="font-bold text-black uppercase tracking-tight">Jānis Bērziņš</div>
                  <div className="text-sm text-gray-500">Meža īpašnieks, Vidzeme</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Section: Gatavs uzzināt sava meža vērtību? */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center gap-8 max-w-lg mx-auto">
            <h2 className="text-[32px] lg:text-[42px] font-bold text-black leading-tight">
              Sazinies ar mums
            </h2>

            <div 
              className="w-16 h-16 bg-gold" 
              style={{ 
                maskImage: 'url(/icons/right-down.png)', 
                maskSize: 'contain', 
                maskRepeat: 'no-repeat',
                WebkitMaskImage: 'url(/icons/right-down.png)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat'
              }} 
            />

            <div className="flex flex-col items-center gap-2">
              <a href="mailto:info@grgrupa.lv" className="text-gold text-[16px] font-bold hover:text-[#B38D48] transition-colors">info@grgrupa.lv</a>
              <a href="tel:+37129611110" className="text-black text-[28px] font-bold hover:text-gold transition-colors">+371 29611110</a>
            </div>
            
            <button className="cta-bordered-gold mt-4">KONTAKTI</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
