export default function Footer() {
  return (
    <footer className="section-cream border-t border-stone px-6 py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-serif text-xl tracking-[0.12em]">
            CAPITAL GOLD
          </div>

          <div className="mt-1 text-[8px] tracking-[0.32em] gold">
            LUXURY FIRST
          </div>

          <p className="mt-5 text-sm muted">מסילת ישרים 27, ירושלים</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm muted">
          <a href="#building">הבניין</a>
          <a href="#apartments">הדירות</a>
          <a href="#location">המיקום</a>
          <a href="#contact">צור קשר</a>
        </nav>
      </div>
    </footer>
  );
}
