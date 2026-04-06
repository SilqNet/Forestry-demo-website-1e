import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Laskana_idu8tcMQMk_0-RIvPGKSn4kvQftBCCaxsEFMEiuHRbP.png"
              alt="LASKANA"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-white/70 leading-relaxed">
              Professional forestry services with sustainable practices and expert team.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Meža apsaimniekošana
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Iepērkam
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Transports / Loģistika
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Kokmateriālu tirdzniecība
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Par mums
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Kontakti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:hello@treant.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Mail size={16} />
                hello@treant.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Phone size={16} />
                +1 (234) 567-8901
              </a>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              &copy; 2026 LASKANA. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
