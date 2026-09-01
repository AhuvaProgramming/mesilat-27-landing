export default function BrandLogo() {
  return (
    <div className="flex items-center gap-3" aria-label="Capital Gold Luxury">
      <div className="h-11 w-px bg-gold" />

      <div className="leading-none">
        <div className="font-serif text-[18px] tracking-[0.16em]">
          CAPITAL GOLD
        </div>

        <div className="mt-1 text-[8px] tracking-[0.32em] text-[#d6c39a]">
          LUXURY FIRST
        </div>
      </div>
    </div>
  );
}
