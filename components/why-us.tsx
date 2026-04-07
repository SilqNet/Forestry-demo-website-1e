export default function WhyUs() {
  const values = [
    {
      title: 'Ilgtspējība',
      icon: '/icons/conservation.png',
      description: 'Mēs ticam caurspīdīgai sadarbībai un vienmēr pildām savus solījumus pret klientiem un partneriem.'
    },
    {
      title: 'Ilgtermiņa sadarbība',
      icon: '/icons/hourglass.png',
      description: 'No mežu taksācijas līdz loģistikai – mēs nodrošinām augstākos standartus visā procesā.'
    },
    {
      title: 'Godīga attieksme',
      icon: '/icons/trust.png',
      description: 'Izmantojam modernāko tehniku un tehnoloģijas, lai maksimāli palielinātu efektivitāti.'
    },
    {
      title: 'Attīstība',
      icon: '/icons/career-opportunity.png',
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
            <div key={i} className="flex flex-col items-center text-center">
              <img 
                src={v.icon} 
                alt={v.title} 
                className="w-[48px] h-[48px] object-contain mx-auto block mb-4" 
              />
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
