export default function Newsletter() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/newsletter-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="text-white mb-6"
          style={{
            fontFamily: "'Saira Expanded', sans-serif",
            fontSize: '28px',
            fontWeight: 600,
            lineHeight: '1.2',
            letterSpacing: 'normal',
            textTransform: 'none',
          }}
        >
          <p>Tavs mežs ir vērtība.</p>
          <p>Parūpējies, lai to novērtē pareizi.</p>
        </div>

        <p
          className="text-white/85 mx-auto mb-10 max-w-3xl"
          style={{
            fontFamily: "'Saira', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '1.6',
            letterSpacing: 'normal',
            textTransform: 'none',
          }}
        >
          Iegūsti partneri, kurš pret mežu izturas ar izpratni, ilgtermiņa redzējumu, kā pret unikālu dabas resursu —
          mēs būsim īstajā vietā, īstajā brīdī.
        </p>

        <a
          href="#"
          className="group inline-flex items-center gap-2 rounded-sm border border-white/20 px-8 py-4 text-[15px] font-medium text-white transition-all hover:bg-gold hover:text-white hover:border-gold uppercase tracking-widest"
        >
          <span>Sazinies ar mums</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
