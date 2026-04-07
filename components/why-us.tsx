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

  const infrastructure = [
    { value: '3', label: 'Ostas' },
    { value: '1 000 000 m³', label: 'Koksnes apjoms gadā' },
    { value: '270 t/h', label: 'Iekraušanas jauda' },
    { value: '6000 m²', label: 'Slēgtās noliktavas' },
    { value: '45 000 m²', label: 'Klaji laukumi' },
    { value: '366 m', label: 'Piestātnes' },
    { value: '50+', label: 'Tehnikas vienības' }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-[28px] md:text-[42px] leading-[1.1] font-bold mb-16 text-black">
          Mūsu vērtības
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-14 h-14 bg-neutral-100 flex items-center justify-center shrink-0 mb-6 rounded-sm">
                 <div className="w-5 h-5 border-[1.5px] border-neutral-300 rounded-[2px]" />
              </div>
              <h3 className="text-[20px] font-bold mb-3 text-black">{v.title}</h3>
              <p className="text-[15px] leading-relaxed text-black/70 font-normal">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[1px] w-full bg-neutral-200 mb-20"></div>
        <h2 className="text-[28px] md:text-[42px] leading-[1.1] font-bold mb-16 text-black">
          Mūsu infrastruktūra un tās iespējas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {infrastructure.map((item, i) => (
            <div key={i} className="flex flex-col group cursor-default">
              <span className="text-[42px] md:text-[52px] font-bold leading-none mb-4 text-black tracking-tighter group-hover:text-gold transition-colors duration-300">
                {item.value}
              </span>
              <span className="text-[13px] uppercase tracking-[0.1em] text-neutral-500 font-bold leading-tight group-hover:text-black transition-colors duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
