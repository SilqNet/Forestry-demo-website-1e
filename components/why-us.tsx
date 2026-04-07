import { Check } from 'lucide-react'

export default function WhyUs() {
  const values = [
    {
      title: 'Godīgums un atbildība',
      description: 'Mēs ticam caurspīdīgai sadarbībai un vienmēr pildām savus solījumus pret klientiem un partneriem.'
    },
    {
      title: 'Kvalitāte katrā posmā',
      description: 'No mežu taksācijas līdz loģistikai – mēs nodrošinām augstākos standartus visā procesā.'
    },
    {
      title: 'Mūsdienīgi risinājumi',
      description: 'Izmantojam modernāko tehniku un tehnoloģijas, lai maksimāli palielinātu efektivitāti.'
    },
    {
      title: 'Ilgtspējīga mežsaimniecība',
      description: 'Rūpējamies par Latvijas dabas vērtību saglabāšanu un gudru mežu apsaimniekošanu.'
    }
  ]

  const stats = [
    { label: 'Gadu pieredze', value: '15+' },
    { label: 'Tehnikas vienības', value: '50+' },
    { label: 'Šķeldotāji', value: '10+' },
    { label: 'Baļķvedēji', value: '20+' }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
          
          {/* Values Section */}
          <div className="flex-[2]">
            <div className="bg-[#00a651] p-10 md:p-16 text-white h-full">
              <h2 className="text-[28px] md:text-[42px] leading-[1.1] font-bold mb-12">
                Mūsu vērtības
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
                {values.map((v, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-bold mb-3 italic tracking-tight">{v.title}</h3>
                      <p className="text-[15px] leading-relaxed opacity-90 font-normal">
                        {v.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Infrastructure Stats Section */}
          <div className="flex-1">
            <div className="bg-[#0b2d1c] p-10 md:p-16 text-white h-full flex flex-col justify-center">
              <h2 className="text-[28px] md:text-[36px] font-bold mb-14 text-center lg:text-left leading-[1.1]">
                Mūsu infrastruktūra
              </h2>
              <div className="grid grid-cols-2 gap-y-16 gap-x-8">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="text-[48px] md:text-[56px] font-bold leading-none mb-3 text-[#00a651] tracking-tighter">
                      {s.value}
                    </span>
                    <span className="text-[12px] uppercase tracking-[0.2em] opacity-60 font-bold leading-tight">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
