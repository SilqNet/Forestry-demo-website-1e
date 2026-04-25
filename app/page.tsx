import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import WhyUs from '@/components/why-us'
import PartnerCarousel from '@/components/partner-carousel'
import Services from '@/components/services'
import ServicesPirkums from '@/components/services-pirkums'
import SadarbibasProcess from '@/components/sadarbibas-process'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhyUs />
      <PartnerCarousel />
      <Services />
      <ServicesPirkums />
      <SadarbibasProcess />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}
