import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { AboutDecorations } from "@/components/sections/about/AboutDecorations";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import { SectionShell } from "@/components/sections/SectionShell";
import {
  featuredProjects,
  projectsSectionMeta,
} from "@/config/projects";
import { sectionIds } from "@/config/sections";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
});

export default function ProjectsSection() {
  return (
    <SectionShell
      id={sectionIds.projects}
      className="relative overflow-hidden border-t border-[#e8b070]/15"
    >
      <AboutDecorations />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <header className="mb-10 max-w-2xl">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#e8b070]/55 sm:text-[11px]">
            {projectsSectionMeta.index} — {projectsSectionMeta.fileLabel}
          </p>
          <h2
            className={`${display.className} mt-3 text-3xl italic text-[#e8b070] sm:text-4xl`}
          >
            {projectsSectionMeta.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#e8b070]/75 sm:text-lg">
            {projectsSectionMeta.lead}
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredProjects.map((project) => (
            <li key={project.slug} className="min-h-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffe4b8] transition hover:text-[#f0c88a]"
          >
            Bütün layihələr
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
