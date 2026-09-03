export default function ProjectIntro() {
  return (
    <section
      id="building"
      className="bg-white px-6 py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          
          <div>
            <p className="text-xs tracking-[0.3em] text-[#B89B5E]">
              THE PROJECT
            </p>

            <div className="mt-8">
              <span className="font-serif text-8xl leading-none md:text-[150px]">
                16
              </span>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#716D66]">
                דירות
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-4xl font-normal leading-tight md:text-6xl">
              פרויקט מגורים חדש
              <br />
              במיקום מרכזי בירושלים
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#716D66]">
              מסילת ישרים 27 הוא פרויקט מגורים חדש הכולל 16 דירות
              בוטיק, בתכנון מוקפד ובמיקום מרכזי בירושלים.
            </p>
          </div>

        </div>

        <div className="mt-20 grid grid-cols-2 border-t border-[#D9D5CD] md:grid-cols-4">
          
          <div className="border-l border-[#D9D5CD] px-5 py-8">
            <div className="font-serif text-4xl">16</div>
            <p className="mt-2 text-sm text-[#716D66]">דירות</p>
          </div>

          <div className="border-l border-[#D9D5CD] px-5 py-8">
            <div className="font-serif text-4xl">02</div>
            <p className="mt-2 text-sm text-[#716D66]">סוגי דירות</p>
          </div>

          <div className="border-l border-[#D9D5CD] px-5 py-8">
            <div className="font-serif text-4xl">01</div>
            <p className="mt-2 text-sm text-[#716D66]">כתובת</p>
          </div>

          <div className="px-5 py-8">
            <div className="font-serif text-4xl">24/7</div>
            <p className="mt-2 text-sm text-[#716D66]">
              זמינות להזמנה
            </p>
          </div>

        </div>

        <div className="mt-16 aspect-[16/6] bg-[#E3DFD7]">
          <div className="flex h-full items-end p-6 text-xs tracking-[0.2em] text-[#716D66]">
            BUILDING RENDER
          </div>
        </div>

      </div>
    </section>
  );
}