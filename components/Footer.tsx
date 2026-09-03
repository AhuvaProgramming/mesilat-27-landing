export default function Footer() {
  return (
    <footer className="border-t border-[#D9D5CD] bg-white px-6 py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        
        <div>
          <div className="font-serif text-xl tracking-[0.14em]">
            CAPITAL GOLD
          </div>

          <div className="mt-1 text-[8px] tracking-[0.32em] text-[#B89B5E]">
            LUXURY FIRST
          </div>

          <p className="mt-5 text-sm text-[#716D66]">
            מסילת ישרים 27, ירושלים
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#716D66]">
          <a href="#building">הבניין</a>
          <a href="#apartments">הדירות</a>
          <a href="#location">המיקום</a>
          <a href="#contact">צור קשר</a>
        </div>

      </div>
    </footer>
  );
}