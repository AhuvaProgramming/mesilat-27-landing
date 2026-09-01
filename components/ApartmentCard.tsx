export default function VideoSection() {
  return (
    <section className="bg-[#f7f6f2] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm tracking-[0.2em] text-[#b79a63]">
            הצצה לדירה
          </p>

          <h2 className="mb-5 text-4xl font-semibold md:text-5xl">
            להכיר את הדירות מקרוב
          </h2>

          <p className="text-lg leading-8 text-[#6f6b64]">
            הצצה לאחד מסוגי הדירות בפרויקט.
          </p>
        </div>

        <div className="aspect-video w-full overflow-hidden bg-[#e8e5de]">
          <div className="flex h-full items-center justify-center text-[#6f6b64]">
            <div className="text-center">
              <div className="mb-3 text-4xl">▶</div>
              <p>הסרטון יתווסף כאן</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
