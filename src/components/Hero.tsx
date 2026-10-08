import { Cormorant_Garamond } from "next/font/google";
import HeroDitherField from "@/components/HeroDitherField";

const PORTRAIT = "/images/hero-portrait.jpg";

const displayName = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
});

export default function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-[#0c0806] text-[#e8b070]">
      <HeroDitherField src={PORTRAIT} alt="Portrait of Nigar Hesenzade" />

      <div className="pointer-events-none relative z-10 flex min-h-dvh flex-col items-center justify-end px-4 pb-14 pt-24 sm:pb-16">
        <div className="relative z-20 mx-auto flex w-full max-w-2xl items-center justify-center gap-3 px-2 sm:gap-4">
          <span className="h-px flex-1 bg-[#e8b070]/40" aria-hidden />
          <p className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f0c88a] drop-shadow-[0_0_18px_rgba(12,8,6,0.95)] sm:text-sm sm:tracking-[0.22em]">
            <span className="text-[#ffe4b8]">Front-end</span> developer
          </p>
          <span className="h-px flex-1 bg-[#e8b070]/40" aria-hidden />
        </div>

        <h1
          className={`${displayName.className} mx-auto mt-4 w-full max-w-5xl text-center text-[clamp(2.85rem,10.5vw,6.75rem)] italic leading-[0.95] text-[#e8b070] drop-shadow-[0_0_28px_rgba(232,176,112,0.22)] text-balance`}
        >
          Nigar Hesenzade
        </h1>
      </div>
    </section>
  );
}
