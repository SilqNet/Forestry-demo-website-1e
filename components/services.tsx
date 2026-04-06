import Image from 'next/image'

const services = [
  {
    title: 'Iepērkam mežus',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Iepērkam cirsmas',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Iepērkam zarus šķeldai',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Iepērkam kokmateriālus pie ceļa',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mežu apsaimniekošana',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Kokmateriālu tirdzniecība',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Iepērkam mežus, cirsmas un kokmateriālus
          </h2>
          <p className="text-muted-foreground text-lg">
            Piedāvājam izdevīgus nosacījumus, konkurētspējīgas cenas un godīgu attieksmi!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {services.map((service, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-sm transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-5">
                <h3 className="font-semibold text-foreground mb-3 text-lg">
                  {service.title}
                </h3>
                <button className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-semibold text-foreground transition-all hover:bg-[#22c55e] hover:text-white hover:border-[#22c55e]">
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
