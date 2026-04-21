import Image from 'next/image'

const services = [
  {
    title: 'Iepērkam mežus',
    image: '/services/ieperkam-mezus.jpg',
  },
  {
    title: 'Iepērkam cirsmas',
    image: '/services/ieperkam-cirsmas.jpg',
  },
  {
    title: 'Iepērkam zarus šķeldai',
    image: '/services/ieperkam-zarus-skeldai.jpg',
  },
  {
    title: 'Iepērkam kokmateriālus pie ceļa',
    image: '/services/ieperkam-kokmaterialus.jpg',
  },
  {
    title: 'Mežu apsaimniekošana',
    image: '/services/mezu-apsaimniekosana.jpg',
  },
  {
    title: 'Kokmateriālu tirdzniecība',
    image: '/services/kokmaterialu-tirdznieciba.webp',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="text-[22px] leading-[1.18] font-bold text-black mb-4 text-balance">
            Iepērkam mežus, cirsmas un kokmateriālus
          </h2>
          <p className="text-muted-foreground text-[19px] leading-[1.6] font-normal">
            Piedāvājam izdevīgus nosacījumus, konkurētspējīgas cenas un godīgu attieksmi!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {services.map((service, index) => (
            <article key={index} className="group cursor-pointer flex flex-col">
              <div className="relative w-full aspect-video overflow-hidden bg-muted rounded-sm transition-transform duration-500 mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-0">
                <h3 className="text-[18px] md:text-[20px] leading-[1.3] font-normal text-black mb-4">
                  {service.title}
                </h3>
                <button className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-[15px] font-normal text-foreground transition-all hover:bg-gold hover:text-white hover:border-gold">
                  Uzzināt vairāk
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
