import { Cormorant_Garamond } from "next/font/google";
import { AboutDecorations } from "@/components/sections/about/AboutDecorations";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import { projects, projectsSectionMeta } from "@/config/projects";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
});

export default function ProjectsPageContent() {
  return (
    <div className="relative overflow-hidden border-t border-[#e8b070]/15 text-[#e8b070]">
      <AboutDecorations />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="mb-12 max-w-2xl">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#e8b070]/55">
            {projectsSectionMeta.fileLabel} — archive
          </p>
          <h1
            className={`${display.className} mt-3 text-4xl italic sm:text-5xl`}
          >
            {projectsSectionMeta.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#e8b070]/75 sm:text-lg">
            {projectsSectionMeta.lead}
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
