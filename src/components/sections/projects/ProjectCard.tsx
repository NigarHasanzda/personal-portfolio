import Link from "next/link";
import type { Project } from "@/config/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-[#e8b070]/15 bg-[#e8b070]/[0.03] p-5 transition hover:border-[#e8b070]/30 hover:bg-[#e8b070]/[0.06] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#f0c88a] sm:text-base">
          {project.title}
        </h3>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e8b070]/45">
          {project.year}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#e8b070]/75">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <span className="inline-block rounded-md border border-[#e8b070]/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#e8b070]/65">
              {tag}
            </span>
          </li>
        ))}
      </ul>

      {(project.href || project.repo) && (
        <div className="mt-6 flex flex-wrap gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em]">
          {project.href && (
            <Link
              href={project.href}
              className="text-[#ffe4b8] transition hover:text-[#f0c88a]"
              {...(project.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              Bax ↗
            </Link>
          )}
          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e8b070]/55 transition hover:text-[#ffe4b8]"
            >
              GitHub ↗
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
