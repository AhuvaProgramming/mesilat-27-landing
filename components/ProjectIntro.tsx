export default function ProjectIntro() {
  return (
    <section
      id="building"
      className="bg-white px-6 py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] text-[#B89B5E]">
              THE PROJECT
            </p>

            <h2 className="font-serif text-4xl font-normal leading-tight md:text-6xl">
              מגורים חדשים
              <br />
              בלב ירושלים
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[#746F67]">
              מסילת ישרים 27 הוא פרויקט מגורים חדש הכולל 16
              דירות בוטיק, בתכנון מוקפד ובמיקום מרכזי בירושלים.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="border-t border-[#B89B5E] pt-5">
              <div className="font-serif text-6xl text-[#171716]">
                16
              </div>

              <p className="mt-2 text-sm text-[#746F67]">
                דירות
              </p>
            </div>

            <div className="border-t border-[#D8D1C5] pt-5">
              <div className="font-serif text-6xl text-[#171716]">
                01
              </div>

              <p className="mt-2 text-sm text-[#746F67]">
                כתובת
              </p>
            </div>

            <div className="border-t border-[#D8D1C5] pt-5">
              <div className="font-serif text-6xl text-[#171716]">
                02
              </div>

              <p className="mt-2 text-sm text-[#746F67]">
                סוגי דירות
              </p>
            </div>

          </div>
        </div>

        <div className="mt-20 aspect-[16/7] overflow-hidden">
          <img
            src="/side%20view%20building.jpg"
            alt="מבט צדדי על מסילת ישרים 27"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
