import Image from 'next/image'

export default function Newsletter() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile_background-Vc0f2YhPcxs9jF6RNYgxrxg3IG6RRs.jpg"
          alt="Newsletter background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Saņem jaunumus e-pastā
        </h2>
        <form className="mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Jūsu e-pasta adrese"
            className="h-12 flex-1 rounded-none border border-white/30 bg-white/10 px-4 text-white placeholder-white/70 outline-none focus:border-white"
          />
          <button
            type="button"
            className="h-12 rounded-none bg-[#22c55e] px-8 font-semibold text-white transition-colors hover:bg-[#16a34a]"
          >
            Pierakstīties
          </button>
        </form>
      </div>
    </section>
  )
}
