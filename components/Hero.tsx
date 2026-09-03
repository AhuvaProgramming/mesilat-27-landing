import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="bg-[#F5F3EE]">
      <div className="mx-auto flex min-h-[calc(100vh-82px)] max-w-[1440px] flex-col lg:flex-row">

        {/* Building image */}
        <div className="order-1 min-h-[50vh] w-full bg-[#D9D5CD] lg:min-h-0 lg:w-1/2">
          <div className="flex h-full min-h-[50vh] items-end p-6 lg:min-h-[calc(100vh-82px)] lg:p-10">
            <span className="text-xs tracking-[0.25em] text-[#716D66]">
              MESILAT YESHARIM 27
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="order-2 flex w-full items-center px-6 py-20 lg:w-1/2 lg:px-16">
          <div className="w-full max-w-2xl">

            <p className="mb-6 text-xs tracking-[0.3em] text-[#B89B5E]">
              CAPITAL GOLD · JERUSALEM
            </p>

            <h1 className="font-serif text-6xl font-normal leading-[0.92] md:text-8xl lg:text-[96px]">
              מסילת
              <br />
              ישרים 27
            </h1>

            <div className="mt-8 border-r border-[#B89B5E] pr-6">
              <p className="text-2xl font-light leading-tight md:text-4xl">
                מגורים חדשים
                <br />
                בלב ירושלים
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#716D66] md:text-lg">
                16 דירות בוטיק להשכרה לטווח קצר,
                במיקום מרכזי בירושלים.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#apartments"
                className="inline-flex items-center gap-4 bg-[#151514] px-8 py-4 text-sm text-white transition-colors duration-300 hover:bg-[#B89B5E]"
              >
                לצפייה בדירות
                <span>←</span>
              </a>
            </div>

            <div className="mt-14 flex items-center gap-4 text-[10px] tracking-[0.25em] text-[#9A948A]">
              <span>SHORT TERM RENTAL</span>
              <span className="h-px w-12 bg-[#B89B5E]" />
              <span>JERUSALEM</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}