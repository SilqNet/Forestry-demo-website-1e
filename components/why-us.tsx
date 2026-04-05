import Image from 'next/image'
import { Leaf, Users, TreePine, Award, Cog, Handshake } from 'lucide-react'

export default function WhyUs() {
  const reasons = [
    {
      icon: Leaf,
      title: 'ECO FRIENDLY',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      icon: Users,
      title: 'EXPERT TEAM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      icon: TreePine,
      title: 'QUALITY WOOD',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      icon: Award,
      title: 'PROVEN RESULTS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      icon: Cog,
      title: 'FULL SERVICE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      icon: Handshake,
      title: 'TRUSTED PARTNERS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              WHY CHOOSE US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              REASONS TO CHOOSE US WITH CONFIDENCE
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="flex gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-primary text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
