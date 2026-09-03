export default function VideoSection() {
  return (
    <section className="bg-white px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#B89B5E]">
              INSIDE
            </p>

            <h2 className="mt-5 font-serif text-5xl font-normal md:text-7xl">
              הצצה לדירה
            </h2>
          </div>

          <p className="max-w-md self-end text-lg leading-8 text-[#716D66]">
            הצצה לאחד מסוגי הדירות בפרויקט.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden bg-[#D9D5CD]">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,#D9D5CD,#BDB6AA)]" />

          <button
            type="button"
            aria-label="הפעלת הסרטון"
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl shadow-lg transition-transform duration-300 hover:scale-110"
          >
            ▶
          </button>

          <div className="absolute bottom-6 right-6 text-xs tracking-[0.2em] text-[#716D66]">
            VIDEO
          </div>
        </div>

      </div>
    </section>
  );
}