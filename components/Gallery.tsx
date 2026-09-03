export default function Gallery() {
  return (
    <section className="bg-white px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-[#B89B5E]">
            GALLERY
          </p>

          <h2 className="mt-6 font-serif text-5xl font-normal md:text-7xl">
            הפרויקט
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          
          <div className="group min-h-[560px] overflow-hidden bg-[#D9D5CD] md:col-span-7">
            <div className="flex h-full items-end bg-[linear-gradient(135deg,#DAD5CC,#AAA398)] p-6 transition-transform duration-700 group-hover:scale-105">
              <span className="text-xs tracking-[0.2em] text-[#716D66]">
                BUILDING
              </span>
            </div>
          </div>

          <div className="grid gap-5 md:col-span-5">
            
            <div className="group min-h-[270px] overflow-hidden bg-[#ECE8E1]">
              <div className="flex h-full items-end bg-[linear-gradient(135deg,#EEEAE3,#C2BAAE)] p-6 transition-transform duration-700 group-hover:scale-105">
                <span className="text-xs tracking-[0.2em] text-[#716D66]">
                  DETAILS
                </span>
              </div>
            </div>

            <div className="group min-h-[270px] overflow-hidden bg-[#22211F]">
              <div className="flex h-full items-end bg-[linear-gradient(135deg,#45423D,#262522)] p-6 transition-transform duration-700 group-hover:scale-105">
                <span className="text-xs tracking-[0.2em] text-white/50">
                  LIVING
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}