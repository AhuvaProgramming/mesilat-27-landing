export default function ProjectIntro() {
  return (
    <section id="building" className="section-cream px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] gold">THE PROJECT</p>

            <h2 className="font-serif text-4xl font-normal leading-tight md:text-6xl">
              מגורים חדשים
              <br />
              בלב ירושלים
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 muted">
              מסילת ישרים 27 הוא פרויקט מגורים חדש הכולל 16 דירות בוטיק, בתכנון
              מוקפד ובמיקום מרכזי בירושלים.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border-t border-gold pt-5">
              <div className="font-serif text-6xl">16</div>

              <p className="mt-2 text-sm muted">דירות</p>
            </div>

            <div className="border-t border-stone pt-5">
              <div className="font-serif text-6xl">01</div>

              <p className="mt-2 text-sm muted">כתובת</p>
            </div>

            <div className="border-t border-stone pt-5">
              <div className="font-serif text-6xl">02</div>

              <p className="mt-2 text-sm muted">סוגי דירות</p>
            </div>
          </div>
        </div>

        <div className="mt-20 aspect-[16/7] overflow-hidden bg-stone">
          <div className="flex h-full items-center justify-center text-sm muted">
            הדמיית הבניין תופיע כאן
          </div>
        </div>
      </div>
    </section>
  );
}
