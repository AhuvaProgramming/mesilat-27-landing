export default function LocationSection() {
  return (
    <section
      id="location"
      className="bg-[#F5F3EE] px-6 py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          
          <div>
            <p className="text-xs tracking-[0.3em] text-[#B89B5E]">
              THE LOCATION
            </p>

            <h2 className="mt-6 font-serif text-5xl font-normal leading-tight md:text-7xl">
              בלב
              <br />
              ירושלים
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[#716D66]">
              מסילת ישרים 27 ממוקמת במיקום מרכזי בירושלים,
              עם גישה נוחה למרכז העיר ולאזורי העניין המרכזיים.
            </p>

            <div className="mt-10 border-t border-[#D9D5CD] pt-6">
              <p className="text-xs tracking-[0.2em] text-[#B89B5E]">
                ADDRESS
              </p>

              <p className="mt-3 text-lg">
                מסילת ישרים 27, ירושלים
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Mesilat+Yesharim+27+Jerusalem"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex border border-[#151514] px-7 py-4 text-sm transition-colors hover:bg-[#151514] hover:text-white"
            >
              פתיחת המיקום במפה
            </a>
          </div>

          <div className="h-[500px] overflow-hidden border border-[#D9D5CD] md:h-[600px]">
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