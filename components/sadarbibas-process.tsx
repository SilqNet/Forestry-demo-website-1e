import Image from 'next/image'
import { FlowHoverButton } from '@/components/ui/flow-hover-button'

const steps = [
  {
    numberIcon: '/icons/number-1.png',
    title: 'Sākotnējā informācija par īpašumu',
    description:
      'Lai noteiktu īpašuma aptuveno vērtību, mums būs nepieciešams īpašuma kadastra numurs un aktuālie meža inventarizācijas dati no Valsts meža dienesta.',
  },
  {
    numberIcon: '/icons/number-2.png',
    title: 'Īpašuma novērtēšana dabā',
    description:
      'Kad noteikta aptuvenā īpašuma vērtība un abas puses tai piekritušas, braucam īpašumu apskatīt. Ja situācija dabā atbilst dokumentos norādītajai, esam gatavi darījumam. Ja situācija atšķiras, veicam korekcijas īpašuma vērtības aprēķinā un sagatavojam jaunu piedāvājumu.',
  },
  {
    numberIcon: '/icons/number-3.png',
    title: 'Līguma sagatavošana',
    description:
      'Lai sagatavotu darījuma līgumu, nepieciešams pārdevēja vārds, uzvārds, personas kods, tālruņa numurs, īpašuma kadastra apzīmējums un bankas konta numurs, uz kuru pārskaitīt darījuma summu. Sagatavoto līguma projektu nosūtām pārdevējam saskaņošanai.',
  },
  {
    numberIcon: '/icons/number-4.png',
    title: 'Līguma parakstīšana',
    description:
      'Kad līgums saskaņots, norunājam tikšanās laiku pie notāra, kur parakstām līgumu un nostiprinājuma lūgumu Zemesgrāmatai. Ja īpašums iegūts kopdzīves laikā, laulātajam jāparaksta piekrišana darījumam. Iepriekš vienojoties, visus dokumentus iespējams parakstīt attālināti.',
  },
  {
    numberIcon: '/icons/number-5.png',
    title: 'Samaksa',
    description: 'Samaksu par darījumu veicam līgumā norunātajā termiņā.',
  },
]

export default function SadarbibasProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
          <div className="lg:w-[40%]">
            <h2
              className="text-black"
              style={{
                fontFamily: "'Saira Expanded', sans-serif",
                fontSize: '28px',
                fontWeight: 600,
                lineHeight: '1.2',
                letterSpacing: 'normal',
                textTransform: 'none',
              }}
            >
              Sadarbības process
            </h2>

            <div className="mt-6 max-w-[600px] text-black/80 text-left">
              <p
                style={{
                  fontFamily: "'Saira', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  letterSpacing: 'normal',
                  textTransform: 'none',
                }}
              >
                Ja tev pieder meža īpašums, ko vēlies pārdot, tad piedāvā to “GR GRUPA”. Pērkam visa veida meža
                īpašumus, neizmantotas vai daļēji aizaugušas lauksaimniecības zemes, kā arī kokmateriālus un zarus
                šķeldai. Ja nepieciešams, veicam īpašumu sadalīšanu. Piedāvājam arī īpašumu maiņu un bezmaksas
                juridisko palīdzību.
              </p>
            </div>

            <div className="mt-8">
              <FlowHoverButton asChild>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-sm border border-black/10 px-8 py-4 text-[15px] font-medium text-black transition-all hover:text-white hover:border-gold active:text-white active:border-gold uppercase tracking-widest"
                >
                  <span>Kļūt par partneri</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 group-active:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </FlowHoverButton>
            </div>
          </div>

          <div className="lg:w-[55%]">
            <div className="max-w-[640px]">
              <div className="flex flex-col gap-8">
                {steps.map((step, idx) => (
                  <div key={step.title} className="flex gap-4 items-start">
                    <div className="pt-[2px] flex-shrink-0">
                      <div
                        aria-hidden
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 9999,
                          backgroundColor: '#c5a063',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: "'Saira Expanded', sans-serif",
                          fontSize: '14px',
                          fontWeight: 700,
                          lineHeight: '1',
                          color: '#111111',
                        }}
                      >
                        {idx + 1}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h3
                        className="text-black mb-2"
                        style={{
                          fontFamily: "'Saira Expanded', sans-serif",
                          fontSize: '18px',
                          fontWeight: 600,
                          lineHeight: '1.25',
                          letterSpacing: 'normal',
                          textTransform: 'none',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-black/80"
                        style={{
                          fontFamily: "'Saira', sans-serif",
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '1.6',
                          letterSpacing: 'normal',
                          textTransform: 'none',
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

