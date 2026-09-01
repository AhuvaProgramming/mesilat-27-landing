export default function VideoSection() {
  return (
    <section className="section-cream px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] gold">
              A GLIMPSE INSIDE
            </p>

            <h2 className="font-serif text-4xl font-normal md:text-6xl">
              הצצה לדירה
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 muted">
            הצצה לאחד מסוגי הדירות בפרויקט ולשפה העיצובית של מסילת ישרים 27.
          </p>
        </div>

        <div className="group relative aspect-video overflow-hidden bg-soft-black">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#47443f,#8b8478,#272623)]" />

          <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/30" />

          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/10 text-2xl text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
            aria-label="הפעלת הסרטון"
          >
            ▶
          </button>

          <div className="absolute bottom-6 right-6 text-xs tracking-[0.25em] text-white/50">
            MESILAT YESHARIM 27
          </div>
        </div>
      </div>
    </section>
  );
}
