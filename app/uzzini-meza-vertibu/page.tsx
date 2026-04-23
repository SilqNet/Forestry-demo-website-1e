'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Check, Phone, Mail, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function MezaVertibaPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property: '',
    message: ''
  })

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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/forest-hero.png"
            alt="Forest background"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight uppercase">
                Uzzini sava meža <span className="text-gold">reālo vērtību</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 font-light">
                Mēs palīdzēsim Jums gūt maksimālu peļņu no Jūsu meža īpašuma, nodrošinot godīgu un caurspīdīgu procesu.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Augstākā tirgus cena',
                  'Bezmaksas juridiskais atbalsts',
                  'Avanss 1 darba dienas laikā',
                  'Cilvēciska un vienkārša komunikācija'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg font-medium">
                    <div className="bg-gold rounded-full p-1 shrink-0">
                      <Check size={16} className="text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-6 items-center">
                <a href="tel:+37120000000" className="flex items-center gap-3 text-xl font-bold hover:text-gold transition-colors">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  +371 2000 0000
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full max-w-lg">
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-black uppercase tracking-tight">Piesakies konsultācijai</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vārds, Uzvārds</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                        placeholder="+371 ..."
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-pasts</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                        placeholder="janis@piemers.lv"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Īpašuma nosaukums / Kadastra Nr.</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="Meža mājas, 1234567890"
                      onChange={(e) => setFormData({...formData, property: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ziņa (pēc izvēles)</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="Vēlos uzzināt vairāk par..."
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#004225] hover:bg-[#00301b] text-white font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    SAŅEMT PIEDĀVĀJUMU <ArrowRight size={20} />
                  </button>
                  <p className="text-[10px] text-gray-500 text-center mt-4">
                    Nospiežot pogu, Jūs piekrītat mūsu privātuma politikai un datu apstrādei.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#004225] uppercase mb-4">Kāpēc izvēlēties mūs?</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Saimnieciski izdevīgākie piedāvājumi',
                desc: 'Mēs strādājam bez starpniekiem, nodrošinot Jums vislabāko iespējamo cenu tirgū.'
              },
              {
                title: 'Samaksa pirms darbu uzsākšanas',
                desc: 'Mēs uzticamies saviem partneriem un veicam samaksu vēl pirms mežizstrādes darbu sākuma.'
              },
              {
                title: 'Avanss 1 darba dienas laikā',
                desc: 'Ja nepieciešami steidzami līdzekļi, mēs piedāvājam avansa maksājumu tūlīt pēc dokumentu saskaņošanas.'
              },
              {
                title: '100% Latvijas kapitāls',
                desc: 'Mēs esam vietējais uzņēmums, kas rūpējas par Latvijas mežu ilgtspējīgu apsaimniekošanu.'
              },
              {
                title: 'Augsta pievienotā vērtība',
                desc: 'Mēs paši realizējam koksni, radot tai augstu pievienoto vērtību un sildot Latvijas ekonomiku.'
              },
              {
                title: 'Rūpes par ilgtspēju',
                desc: 'Mūsu vērtības ietver atbildīgu attieksmi pret dabu un sabiedrības labklājību.'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-gold">
                  <Check size={28} strokeWidth={3} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-[#004225] uppercase tracking-tight">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#004225] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold uppercase mb-4 text-gold">Tikai 4 soļi līdz darījumam</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Mēs esam vienkāršojuši procesu, lai Jūs varētu saņemt samaksu pēc iespējas ātrāk.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Sazinies',
                desc: 'Zvani vai aizpildi pieteikumu mūsu mājaslapā.'
              },
              {
                step: '02',
                title: 'Uzzini',
                desc: 'Saņem bezmaksas konsultāciju un uzzini meža vērtību.'
              },
              {
                step: '03',
                title: 'Saņem',
                desc: 'Saņem mūsu labāko piedāvājumu un, ja nepieciešams, avansu.'
              },
              {
                step: '04',
                title: 'Saņem samaksu',
                desc: 'Noformē darījumu un saņem pilnu samaksu dienas laikā.'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-black text-gold/30 mb-4">{step.step}</div>
                <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">{step.title}</h4>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
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

      {/* CTA Banner */}
      <section className="py-20 bg-gold text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-black uppercase mb-8 tracking-tighter">Gatavs uzzināt sava meža vērtību?</h2>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#004225] hover:bg-black text-white px-12 py-5 rounded-full text-xl font-bold transition-all hover:scale-105"
          >
            SAŅEMT PIEDĀVĀJUMU TŪLĪT
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
