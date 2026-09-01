export default function RentalOptions() {
  return (
    <section className="section-dark px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14">
          <p className="mb-5 text-xs tracking-[0.3em] gold">RENTAL OPTIONS</p>

          <h2 className="font-serif text-4xl font-normal md:text-6xl">
            אפשרויות השכרה
          </h2>
        </div>

        <div className="grid gap-px bg-white/10 md:grid-cols-2">
          <div id="short-term" className="bg-charcoal p-8 md:p-14">
            <div className="mb-16 flex items-start justify-between">
              <span className="text-sm gold">01</span>

              <span className="text-xs tracking-[0.25em] text-white/30">
                SHORT TERM
              </span>
            </div>

            <h3 className="mb-5 font-serif text-3xl font-normal md:text-5xl">
              השכרה לטווח קצר
            </h3>

            <p className="mb-10 max-w-md text-base leading-8 text-white/60">
              למידע על אפשרויות ההשכרה לטווח קצר וזמינות, ניתן לעבור לעמוד
              המתאים.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-4 border border-gold px-7 py-4 text-sm text-light-gold transition-colors hover:bg-gold hover:text-white"
            >
              לצפייה בדירות
              <span>←</span>
            </a>
          </div>

          <div id="long-term" className="bg-soft-black p-8 md:p-14">
            <div className="mb-16 flex items-start justify-between">
              <span className="text-sm gold">02</span>

              <span className="text-xs tracking-[0.25em] text-white/30">
                LONG TERM
              </span>
            </div>

            <h3 className="mb-5 font-serif text-3xl font-normal md:text-5xl">
              השכרה לטווח ארוך
            </h3>

            <p className="mb-10 max-w-md text-base leading-8 text-white/60">
              לקבלת מידע על דירות זמינות ולתיאום השכרה, יש לפנות למתווך.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-4 border border-white/50 px-7 py-4 text-sm transition-colors hover:bg-white hover:text-black"
            >
              צור קשר עם המתווך
              <span>←</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
