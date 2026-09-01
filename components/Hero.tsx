export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 bg-[linear-gradient(125deg,#20201e,#827b70,#292825)]" />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute right-0 top-0 h-full w-px bg-gold/50" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-6 pb-14 pt-40 lg:px-10 lg:pb-20">
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-4 text-xs tracking-[0.3em] text-light-gold">
            <span>CAPITAL GOLD</span>
            <span className="h-px w-12 bg-gold" />
            <span>JERUSALEM</span>
          </div>

          <h1 className="font-serif text-5xl font-normal leading-[1.05] md:text-7xl lg:text-[92px]">
            מסילת ישרים 27
          </h1>

          <div className="mt-6 max-w-2xl border-r border-gold pr-5">
            <p className="text-2xl font-light md:text-4xl">
              מגורים חדשים בלב ירושלים
            </p>

            <p className="mt-4 text-base leading-8 text-white/75 md:text-lg">
              16 דירות בוטיק במיקום מרכזי בירושלים.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#short-term"
              className="bg-gold px-8 py-4 text-center text-sm transition-colors duration-300 hover:bg-light-gold"
            >
              השכרה לטווח קצר
            </a>

            <a
              href="#long-term"
              className="border border-white/60 px-8 py-4 text-center text-sm transition-colors duration-300 hover:bg-white hover:text-black"
            >
              השכרה לטווח ארוך
            </a>
          </div>
        </div>

        <div className="mt-14 hidden items-center gap-4 text-[10px] tracking-[0.3em] text-white/50 md:flex">
          <span>גלו את הפרויקט</span>
          <span className="h-px w-16 bg-white/30" />
        </div>
      </div>
    </section>
  );
}
