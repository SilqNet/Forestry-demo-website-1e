import Image from 'next/image'

const services = [
  {
    title: 'lepērkam mežus',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20185513-5SN7nZCRf8LoKItWfOROnNPR40sjPA.png',
  },
  {
    title: 'lepērkam zarus šķeldai',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20185513-5SN7nZCRf8LoKItWfOROnNPR40sjPA.png',
  },
  {
    title: 'lepērkam cirsmas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20185513-5SN7nZCRf8LoKItWfOROnNPR40sjPA.png',
  },
  {
    title: 'lepērkam kokmaterials pie ceja',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20185513-5SN7nZCRf8LoKItWfOROnNPR40sjPA.png',
  },
  {
    title: 'lepirkumi ostās',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20185513-5SN7nZCRf8LoKItWfOROnNPR40sjPA.png',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            lepērkam mežus, cirsmas un kokmaterialus
          </h2>
          <p className="text-muted-foreground text-lg">
            Piedāvājam izdevīgus nosacijumus un loti konkuretspējigas cenas!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 bg-card">
                <h3 className="font-semibold text-foreground mb-3 text-sm uppercase">
                  {service.title}
                </h3>
                <button className="text-primary text-sm font-semibold hover:text-primary-foreground transition-colors flex items-center gap-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
