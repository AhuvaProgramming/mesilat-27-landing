import { site } from "@/data/site";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.5 4.5 8 3.5a1.5 1.5 0 0 1 1.8.8l1.2 2.8a1.5 1.5 0 0 1-.3 1.6L9.2 9.9a14.5 14.5 0 0 0 4.9 4.9l1.2-1.5a1.5 1.5 0 0 1 1.6-.3l2.8 1.2a1.5 1.5 0 0 1 .8 1.8l-1 2.5a1.5 1.5 0 0 1-1.5.9C10.9 18.9 5.1 13.1 4.6 6a1.5 1.5 0 0 1 .9-1.5Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.5c.1.2.1.4-.1.6l-.6.7c.6 1 1.3 1.7 2.3 2.2l.7-.7c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.2-.9.3-1.3.2-2.9-.6-5.3-3-5.9-5.9-.1-.4 0-.9.2-1.3Z"
      />
    </svg>
  );
}

export default function ContactBar() {
  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col gap-3 max-md:bottom-4 max-md:left-1/2 max-md:-translate-x-1/2 max-md:flex-row">
      
      <a
        href={site.phoneHref}
        aria-label={`התקשרו ${site.phoneDisplay}`}
        title={site.phoneDisplay}
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D5CD] bg-white text-[#171716] shadow-lg transition-all duration-300 hover:border-[#B89B5E] hover:bg-[#B89B5E] hover:text-white"
      >
        <PhoneIcon />
      </a>

      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="יצירת קשר ב-WhatsApp"
        title="WhatsApp"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#B89B5E] text-white shadow-lg transition-all duration-300 hover:bg-[#171716]"
      >
        <WhatsAppIcon />
      </a>

    </div>
  );
}