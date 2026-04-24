'use client'

import Image from 'next/image'

const testimonials = [
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Latvijas_Finieris_AS_id_fVQzm0I_0-uXuwLNZnUIr5ni6TPwwOSY67qGBxj0.png',
    text: 'Sadarbība ir ļoti profesionāla, lēmumi tiek pieņemti ātri un korekti.',
    authorName: 'Andris Ozols',
    authorTitle: 'Ražošanas vadītājs',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Latvijasmezs-lv_idQkwXJx0w_0-jPrm4GWIp9eth3EzyWnpsSt0MhMMt9.png',
    text: 'Augstu vērtējam GR GRUPA spēju nodrošināt stabilas piegādes un caurspīdīgu sadarbības modeli.',
    authorName: 'Jānis Mežsaimnieks',
    authorTitle: 'Iepirkumu direktors',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/idjbpsM6kj_logos-qGeiEqG3rxesqFF9E8RQCFDoHPmiSq.png',
    text: 'Uzticams partneris, kas vienmēr pilda solīto un nodrošina kvalitatīvu servisu.',
    authorName: 'Pēteris Koks',
    authorTitle: 'Valdes priekšsēdētājs',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R_GRUPA_idsfYm-39J_0-gWFApMxGizbCUonoz7EOKJPoAonBxg.png',
    text: 'Profesionāla pieeja visos darba posmos. Sadarbība, kas orientēta uz ilgtermiņa rezultātu.',
    authorName: 'Kārlis Riekstiņš',
    authorTitle: 'Operatīvais vadītājs',
  },
  {
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRIEDES_AG_idx2EYih-G_0-IDEmBj870UOzG6tTJr8eGVhv9vpFeo.png',
    text: 'Pakalpojumi ir stabili kvalitatīvi, arī sarežģītos objektos.',
    authorName: 'Mārtiņš Bērziņš',
    authorTitle: 'Iepirkumu speciālists',
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
    companyLogo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/id7judnuyL_logos-eVMQHZxZLuSqlYZp03vId3CLlas7lg.png',
    text: 'Piedāvātie nosacījumi ir konkurētspējīgi un caurspīdīgi.',
    authorName: 'Santa Liepa',
    authorTitle: 'Valdes locekle',
  },
]

export default function Testimonials() {
  const tripledTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-black text-center" style={{ fontFamily: "'Saira Expanded', sans-serif", fontSize: '28px', fontWeight: 600, lineHeight: '1.2', letterSpacing: 'normal', textTransform: 'none' }}>
            GR GRUPA partneru un klientu atsauksmes
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll-testimonials">
            {tripledTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.authorName}-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[450px] px-8"
              >
                <div className="text-center py-6 min-h-[320px]">
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

      <style jsx>{`
        .animate-scroll-testimonials {
          animation: scroll-testimonials 80s linear infinite;
        }

        @keyframes scroll-testimonials {
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
