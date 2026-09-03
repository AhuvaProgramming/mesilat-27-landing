import { site } from "@/data/site";

export default function RentalOptions() {
  return (
    <section className="bg-[#151514] px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1440px]">
        
        <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
          
          <div>
            <p className="text-xs tracking-[0.3em] text-[#D6C39A]">
              SHORT TERM RENTAL
            </p>

            <h2 className="mt-6 font-serif text-5xl font-normal leading-tight md:text-7xl">
              להתארח
              <br />
              בלב ירושלים
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-lg leading-9 text-white/65">
              דירות בוטיק להשכרה לטווח קצר, במיקום מרכזי
              ובבניין חדש.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B89B5E] px-8 py-4 text-center text-sm transition-colors hover:bg-[#D6C39A]"
              >
                לצפייה וזמינות
              </a>

              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 px-8 py-4 text-center text-sm transition-colors hover:bg-white hover:text-black"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}