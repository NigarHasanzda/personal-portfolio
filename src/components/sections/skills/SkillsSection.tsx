import { Cormorant_Garamond } from "next/font/google";
import { AboutDecorations } from "@/components/sections/about/AboutDecorations";
import SkillCategoryCard from "@/components/sections/skills/SkillCategoryCard";
import { SectionShell } from "@/components/sections/SectionShell";
import {
  coreStack,
  skillCategories,
  skillsSectionMeta,
} from "@/config/skills";
import { sectionIds } from "@/config/sections";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
});

export default function SkillsSection() {
  return (
    <SectionShell
      id={sectionIds.skills}
      className="relative overflow-hidden border-t border-[#e8b070]/15"
    >
      <AboutDecorations />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <header className="mb-10 max-w-2xl">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#e8b070]/55 sm:text-[11px]">
            {skillsSectionMeta.index} — {skillsSectionMeta.fileLabel}
          </p>
          <h2
            className={`${display.className} mt-3 text-3xl italic text-[#e8b070] sm:text-4xl`}
          >
            {skillsSectionMeta.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#e8b070]/75 sm:text-lg">
            {skillsSectionMeta.lead}
          </p>
        </header>

        <div className="mb-10 rounded-xl border border-[#e8b070]/20 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(232,176,112,0.08),transparent_70%)] p-5 sm:p-6">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#e8b070]/50">
            Əsas stack
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {coreStack.map((tech) => (
              <li key={tech}>
                <span className="inline-block rounded-lg border border-[#e8b070]/35 bg-[#e8b070]/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#ffe4b8]">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {skillCategories.map(({ category, items }) => (
            <li key={category} className="min-h-0">
              <SkillCategoryCard category={category} items={items} />
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
