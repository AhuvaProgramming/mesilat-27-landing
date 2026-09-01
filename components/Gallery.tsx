export default function Gallery() {
  return (
    <section className="section-white px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] gold">GALLERY</p>

            <h2 className="font-serif text-4xl font-normal md:text-6xl">
              הצצה לפרויקט
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 muted">
            תמונות והדמיות של מסילת ישרים 27.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          <div className="group relative min-h-[520px] overflow-hidden bg-stone md:col-span-7">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#d1c8ba,#8e877c)] transition-transform duration-700 group-hover:scale-105" />

            <div className="absolute bottom-6 right-6 text-xs tracking-[0.25em] text-black/50">
              BUILDING
            </div>
          </div>

          <div className="grid gap-5 md:col-span-5">
            <div className="group relative min-h-[250px] overflow-hidden bg-[#e9e5dd]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#eeeae2,#bbb2a5)] transition-transform duration-700 group-hover:scale-105" />

              <div className="absolute bottom-5 right-5 text-xs tracking-[0.25em] text-black/50">
                DETAIL
              </div>
            </div>

            <div className="group relative min-h-[250px] overflow-hidden bg-soft-black">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#4a4741,#252421)] transition-transform duration-700 group-hover:scale-105" />

              <div className="absolute bottom-5 right-5 text-xs tracking-[0.25em] text-white/40">
                LIVING
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
