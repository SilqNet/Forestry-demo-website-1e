import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import type { CSSProperties } from 'react'

export default function Footer() {
  const footerHeaderStyle: CSSProperties = {
    fontFamily: "'Saira Expanded', sans-serif",
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '1.25',
    letterSpacing: 'normal',
    textTransform: 'none',
  }

  const footerLinkStyle: CSSProperties = {
    fontFamily: "'Saira', sans-serif",
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: 'normal',
    textTransform: 'none',
  }

  return (
    <footer className="bg-[#0f1211] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GR_GRUPA_idKuYPu1P0_0-bVHcO5QoufDlT9oMbc8MWmHEZEcl88.png"
                alt="GR GRUPA"
                width={160}
                height={50}
                className="h-auto"
              />
            </Link>
            <p className="text-white/85 font-normal max-w-xs" style={footerLinkStyle}>
              Mūsu uzņēmums nodrošina pilnu mežizstrādes ciklu, sākot no meža taksācijas līdz gatavās produkcijas realizācijai.
            </p>
          </div>

          {/* Uzņēmums */}
          <div>
            <h3 className="mb-6 text-gold" style={footerHeaderStyle}>Uzņēmums</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Par mums
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Jaunumi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  BUJ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Kontaktinformācija
                </Link>
              </li>
            </ul>
          </div>

          {/* Iepērkam */}
          <div>
            <h3 className="mb-6 text-gold" style={footerHeaderStyle}>Iepērkam</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Pārdot mežu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Pārdot augošu koku cirsmu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Zaru iepirkšana šķeldai
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Iepērkam kokmateriālus pie ceļa
                </Link>
              </li>
            </ul>
          </div>

          {/* Pakalpojumi un produkti */}
          <div>
            <h3 className="mb-6 text-gold" style={footerHeaderStyle}>Pakalpojumi un produkti</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Mežu apsaimniekošana
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Transports / Loģistika
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Kokmateriālu tirdzniecība
                </Link>
              </li>
            </ul>
          </div>

          {/* Transports / Loģistika */}
          <div>
            <h3 className="mb-6 text-gold" style={footerHeaderStyle}>Transports / Loģistika</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Kokmateriālu pārvadājumi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Šķeldas un beramkravu pārvadājumi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                  Smagās tehnikas pārvadājumi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakti */}
          <div>
            <h3 className="mb-6 text-gold" style={footerHeaderStyle}>Kontakti</h3>
            <div className="space-y-4">
              <a href="mailto:info@grgrupa.lv" className="flex items-center gap-3 text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                <Mail size={18} className="text-gold" />
                info@grgrupa.lv
              </a>
              <a href="tel:+37129611110" className="flex items-center gap-3 text-white hover:text-gold transition-colors font-normal" style={footerLinkStyle}>
                <Phone size={18} className="text-gold" />
                +371 29611110
              </a>

              <div className="pt-2">
                <h4 className="mb-3 text-gold" style={footerHeaderStyle}>Grobiņa</h4>
                <div className="flex items-start gap-3 text-white font-normal" style={footerLinkStyle}>
                  <MapPin size={18} className="text-gold mt-[2px]" />
                  <div>
                    <p>Saules iela 92,</p>
                    <p>Grobiņa, LV-3430</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              Copyright © 2026 GR GRUPA. Visas tiesības aizsargātas.
            </p>
            <div className="flex gap-6">
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

