export default function LocationSection() {
  return (
    <section id="location" className="section-cream px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] gold">THE LOCATION</p>

            <h2 className="font-serif text-4xl font-normal leading-tight md:text-6xl">
              בלב ירושלים.
              <br />
              קרוב להכל.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 muted">
              מסילת ישרים 27 ממוקמת במיקום מרכזי בירושלים, עם גישה נוחה למרכז
              העיר ולאזורי העניין המרכזיים.
            </p>

            <div className="mt-10 border-t border-stone pt-6">
              <p className="text-xs tracking-[0.2em] gold">ADDRESS</p>

              <p className="mt-3 text-lg">מסילת ישרים 27, ירושלים</p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Mesilat+Yesharim+27+Jerusalem"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-4 border border-charcoal px-7 py-4 text-sm transition-colors hover:bg-charcoal hover:text-white"
            >
              פתיחת המיקום במפה
              <span>←</span>
            </a>
          </div>

          <div className="h-[450px] overflow-hidden border border-stone md:h-[600px]">
            <iframe
              title="מיקום מסילת ישרים 27"
              src="https://www.google.com/maps?q=Mesilat%20Yesharim%2027%2C%20Jerusalem&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
