import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { AboutDecorations } from "@/components/sections/about/AboutDecorations";
import {
  aboutSectionMeta,
  homeAboutPreview,
} from "@/config/about";
import { profile } from "@/config/profile";
import { sectionIds } from "@/config/sections";
import { SectionShell } from "@/components/sections/SectionShell";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
});

export default function AboutSection() {
  const latestJob = profile.experience[0];

  return (
    <SectionShell
      id={sectionIds.about}
      className="relative overflow-hidden border-t border-[#e8b070]/15"
    >
      <AboutDecorations />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#e8b070]/55 sm:text-[11px]">
              {aboutSectionMeta.index} — {aboutSectionMeta.fileLabel}
            </p>
            <h2
              className={`${display.className} mt-3 text-3xl italic text-[#e8b070] sm:text-4xl`}
            >
              {aboutSectionMeta.title}
            </h2>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e8b070]/40">
            {profile.identity.location}
          </p>
        </header>

        <p className="max-w-2xl text-base leading-relaxed text-[#f0c88a]/95 sm:text-lg">
          {homeAboutPreview.text}
        </p>

        <div className="mt-6 rounded-xl border border-[#e8b070]/15 bg-[#e8b070]/[0.03] p-5 sm:max-w-xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e8b070]/45">
            Hazırkı rol
          </p>
          <p className="mt-2 font-mono text-sm text-[#f0c88a]">
            {latestJob.title} · {latestJob.company}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#e8b070]/50">
            {latestJob.period}
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {homeAboutPreview.stackTags.map((tag) => (
            <li key={tag}>
              <span className="inline-block rounded-md border border-[#e8b070]/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[#f0c88a]">
                {tag}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffe4b8] transition hover:text-[#f0c88a]"
          >
            Tam profil və təcrübə
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
