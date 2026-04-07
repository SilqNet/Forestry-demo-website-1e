import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-foreground py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
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
            <p className="text-[15px] text-black leading-relaxed font-normal max-w-xs">
              Mūsu uzņēmums nodrošina pilnu mežizstrādes ciklu, sākot no meža taksācijas līdz gatavās produkcijas realizācijai.
            </p>
          </div>

          {/* Uzņēmums */}
          <div>
            <h3 className="text-[17px] font-bold mb-6 text-black uppercase tracking-wider">Uzņēmums</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-[15px] text-black hover:text-gold transition-colors font-normal">
                  Par mums
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[15px] text-black hover:text-gold transition-colors font-normal">
                  Kontaktinformācija
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[15px] text-black hover:text-gold transition-colors font-normal">
                  Privātuma Politika
                </Link>
              </li>
            </ul>
          </div>

          {/* Iepērkam */}
          <div>
            <h3 className="text-[17px] font-bold mb-6 text-black uppercase tracking-wider">Iepērkam</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-[15px] text-black hover:text-gold transition-colors font-normal">
                  Pārdot mežu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[15px] text-black hover:text-gold transition-colors font-normal">
                  Pārdot augošu koku cirsmu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[15px] text-black hover:text-gold transition-colors font-normal">
                  Zaru iepirkšana šķeldai
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[15px] text-black hover:text-gold transition-colors font-normal">
                  Iepērkam kokmateriālus pie ceļa
                </Link>
              </li>
            </ul>
          </div>

          {/* Pakalpojumi & Loģistika */}
          <div>
            <h3 className="text-[17px] font-bold mb-6 text-black uppercase tracking-wider">Pakalpojumi</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-[15px] text-black hover:text-gold transition-colors font-normal">
                  Mežizstrāde
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[15px] text-black hover:text-gold transition-colors font-normal">
                  Meža atjaunošana
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[15px] text-black hover:text-gold transition-colors font-normal">
                  Jaunaudzes kopšana
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[15px] text-black hover:text-gold transition-colors font-normal">
                  Meža inventarizācija
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakti */}
          <div>
            <h3 className="text-[17px] font-bold mb-6 text-black uppercase tracking-wider">Kontakti</h3>
            <div className="space-y-4">
              <a href="mailto:info@grgrupa.lv" className="flex items-center gap-3 text-[15px] text-black hover:text-gold transition-colors font-normal">
                <Mail size={18} className="text-gold" />
                info@grgrupa.lv
              </a>
              <a href="tel:+37129611110" className="flex items-center gap-3 text-[15px] text-black hover:text-gold transition-colors font-normal">
                <Phone size={18} className="text-gold" />
                +371 29611110
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black/60">
              &copy; {new Date().getFullYear()} GR GRUPA. Visas tiesības aizsargātas.
            </p>
            <div className="flex gap-6">
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

