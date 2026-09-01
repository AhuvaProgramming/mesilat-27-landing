const apartments = Array.from({ length: 16 }, (_, index) => ({
  number: index + 1,
}));

export default function ApartmentSection() {
  return (
    <section id="apartments" className="section-dark px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-10 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] gold">THE APARTMENTS</p>

            <h2 className="font-serif text-4xl font-normal md:text-6xl">
              הדירות
            </h2>
          </div>

          <div>
            <div className="font-serif text-7xl leading-none gold">16</div>

            <p className="mt-2 text-sm text-white/50">דירות בפרויקט</p>
          </div>
        </div>

        <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {apartments.map((apartment) => (
            <article
              key={apartment.number}
              className="group bg-charcoal transition-colors duration-300 hover:bg-soft-black"
            >
              <div className="aspect-[4/3] bg-[#302E2B]">
                <div className="flex h-full items-center justify-center text-sm text-white/30">
                  תמונת הדירה
                </div>
              </div>

              <div className="flex items-end justify-between p-6">
                <div>
                  <p className="text-xs tracking-[0.2em] gold">APARTMENT</p>

                  <h3 className="mt-2 text-xl font-medium">
                    דירה {String(apartment.number).padStart(2, '0')}
                  </h3>
                </div>

                <a
                  href="#contact"
                  className="text-sm text-white/55 transition-colors group-hover:text-light-gold"
                >
                  לפרטים ←
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
