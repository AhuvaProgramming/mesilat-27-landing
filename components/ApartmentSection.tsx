const apartments = Array.from({ length: 16 }, (_, index) => ({
  number: index + 1,
}));

export default function ApartmentSection() {
  return (
    <section
      id="apartments"
      className="bg-[#F5F3EE] px-6 py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          
          <div>
            <p className="text-xs tracking-[0.3em] text-[#B89B5E]">
              THE APARTMENTS
            </p>

            <h2 className="mt-5 font-serif text-5xl font-normal md:text-7xl">
              הדירות
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#716D66]">
            16 דירות בוטיק בשני סוגי תכנון.
            פרטים וזמינות יעודכנו בהמשך.
          </p>

        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {apartments.map((apartment) => (
            <article key={apartment.number} className="group">
              
              <div className="aspect-[4/5] overflow-hidden bg-[#DDD8CF]">
                <div className="flex h-full items-end p-5 text-xs tracking-[0.2em] text-[#716D66] transition-transform duration-700 group-hover:scale-105">
                  APARTMENT {String(apartment.number).padStart(2, "0")}
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#D9D5CD] py-5">
                <div>
                  <p className="text-xs text-[#B89B5E]">
                    APARTMENT
                  </p>

                  <h3 className="mt-1 text-lg">
                    דירה {String(apartment.number).padStart(2, "0")}
                  </h3>
                </div>

                <a
                  href="#contact"
                  className="text-sm text-[#716D66] transition-colors hover:text-[#B89B5E]"
                >
                  לפרטים ←
                </a>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}