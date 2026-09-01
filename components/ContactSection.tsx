export default function ContactSection() {
  return (
    <section id="contact" className="section-dark px-6 py-28 md:py-40">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="mb-5 text-xs tracking-[0.3em] gold">GET IN TOUCH</p>

        <h2 className="font-serif text-5xl font-normal leading-tight md:text-7xl">
          מעוניינים בדירה?
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-white/60">
          לקבלת מידע נוסף על הדירות במסילת ישרים 27, בחרו באפשרות המתאימה לכם.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#short-term"
            className="bg-gold px-8 py-4 text-sm transition-colors hover:bg-light-gold"
          >
            השכרה לטווח קצר
          </a>

          <a
            href="#long-term"
            className="border border-white/40 px-8 py-4 text-sm transition-colors hover:bg-white hover:text-black"
          >
            השכרה לטווח ארוך
          </a>
        </div>
      </div>
    </section>
  );
}
