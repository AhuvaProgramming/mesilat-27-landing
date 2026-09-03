import { site } from "@/data/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#F5F3EE] px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1100px] text-center">
        
        <p className="text-xs tracking-[0.3em] text-[#B89B5E]">
          CONTACT
        </p>

        <h2 className="mt-6 font-serif text-5xl font-normal md:text-8xl">
          מעוניינים בדירה?
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-9 text-[#716D66]">
          לפרטים נוספים, זמינות והזמנה — צרו איתנו קשר.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="bg-[#151514] px-9 py-4 text-sm text-white transition-colors hover:bg-[#B89B5E]"
          >
            התקשרו אלינו
          </a>

          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#151514] px-9 py-4 text-sm transition-colors hover:bg-[#151514] hover:text-white"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm text-[#716D66]">
          {site.phoneDisplay}
        </p>

      </div>
    </section>
  );
}