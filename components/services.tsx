import Image from 'next/image'

const services = [
  {
    title: 'Mežsaimniecība',
    image: '/services/mezsaimnieciba.webp',
  },
  {
    title: 'Transports un loģistika',
    image: '/services/transports-un-logistika.jpg',
  },
  {
    title: 'Kokmateriālu tirdzniecība',
    image: '/services/kokmaterialu-tirdznieciba.jpg',
  },
  {
    title: 'Malkas tirdzniecība',
    image: '/services/malkas-tirdznieciba.jpg',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between mb-16">
          <div className="lg:w-[40%]">
            <h2 className="text-black" style={{ fontFamily: "'Saira Expanded', sans-serif", fontSize: '28px', fontWeight: 600, lineHeight: '1.2', letterSpacing: 'normal', textTransform: 'none' }}>
              Biznesa virzieni
            </h2>
          </div>
          <div className="lg:w-[55%]">
            <div className="max-w-[600px] text-black/80 text-left">
              <p style={{ fontFamily: "'Saira', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '1.6', letterSpacing: 'normal', textTransform: 'none' }}>
                Galvenie darbības virzieni aptver visu koksnes ceļu — no meža līdz gatavam produktam. Katrs no tiem papildina otru un palīdz nodrošināt stabilu, ilgtermiņā un uzticamu sadarbību ar biznesa partneriem.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {services.map((service, index) => (
            <article key={index} className="group cursor-pointer flex flex-col">
              <div className="image-wrapper relative w-full aspect-video overflow-hidden bg-muted rounded-sm mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-2 flex items-start gap-2">
                <h3 className="text-black group-hover:text-gold transition-colors" style={{ fontFamily: "'Saira', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '1.6', letterSpacing: 'normal', textTransform: 'none' }}>
                  {service.title}
                </h3>
                <svg
                  className="w-4 h-4 mt-[3px] text-black group-hover:text-gold transition-colors flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
