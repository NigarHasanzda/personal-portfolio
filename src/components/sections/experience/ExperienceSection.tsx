import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { AboutDecorations } from "@/components/sections/about/AboutDecorations";
import ExperienceTimelineItem from "@/components/sections/experience/ExperienceTimelineItem";
import { SectionShell } from "@/components/sections/SectionShell";
import {
  experienceEntries,
  experienceSectionMeta,
} from "@/config/experience";
import { sectionIds } from "@/config/sections";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
});

export default function ExperienceSection() {
  return (
    <SectionShell
      id={sectionIds.experience}
      className="relative overflow-hidden border-t border-[#e8b070]/15"
    >
      <AboutDecorations />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#e8b070]/55 sm:text-[11px]">
              {experienceSectionMeta.index} — {experienceSectionMeta.fileLabel}
            </p>
            <h2
              className={`${display.className} mt-3 text-3xl italic text-[#e8b070] sm:text-4xl`}
            >
              {experienceSectionMeta.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#e8b070]/75 sm:text-lg">
              {experienceSectionMeta.lead}
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffe4b8] transition hover:text-[#f0c88a]"
          >
            Tam CV ↗
          </Link>
        </header>

        <ul className="relative space-y-8 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-[#e8b070]/20 sm:before:left-[5px]">
          {experienceEntries.map((job, index) => (
            <ExperienceTimelineItem
              key={`${job.company}-${job.period}`}
              title={job.title}
              company={job.company}
              period={job.period}
              location={job.location}
              highlight={job.bullets[0]}
              isFirst={index === 0}
            />
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
