import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { AboutDecorations } from "@/components/sections/about/AboutDecorations";
import { AboutSectionLabel } from "@/components/sections/about/AboutSectionLabel";
import { aboutPageMeta } from "@/config/about";
import { profile } from "@/config/profile";
import { site } from "@/config/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
});

export default function AboutPageContent() {
  const { identity } = profile;

  return (
    <div className="relative overflow-hidden border-t border-[#e8b070]/15 text-[#e8b070]">
      <AboutDecorations />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="mb-10 flex flex-col gap-6 sm:mb-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#e8b070]/55 sm:text-[11px]">
                {aboutPageMeta.fileLabel}
              </p>
              <h1
                className={`${display.className} mt-3 text-4xl italic text-[#e8b070] sm:text-5xl`}
              >
                {aboutPageMeta.title}
              </h1>
            </div>
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-[#e8b070]/40 sm:text-right">
              {site.name}
              <br />
              {site.role}
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#f0c88a] sm:text-[11px] sm:tracking-[0.14em]">
            <li>
              <a
                href={`tel:${identity.phone.replace(/\s/g, "")}`}
                className="transition hover:text-[#ffe4b8]"
              >
                {identity.phone}
              </a>
            </li>
            <li className="text-[#e8b070]/30" aria-hidden>
              |
            </li>
            <li>
              <a
                href={`mailto:${identity.email}`}
                className="transition hover:text-[#ffe4b8]"
              >
                {identity.email}
              </a>
            </li>
            <li className="text-[#e8b070]/30" aria-hidden>
              |
            </li>
            <li>
              <Link
                href={identity.links.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#ffe4b8]"
              >
                {identity.links.github.label}
              </Link>
            </li>
            <li className="text-[#e8b070]/30" aria-hidden>
              |
            </li>
            <li>
              <Link
                href={identity.links.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#ffe4b8]"
              >
                {identity.links.linkedin.label}
              </Link>
            </li>
            <li className="text-[#e8b070]/30" aria-hidden>
              |
            </li>
            <li className="text-[#e8b070]/70">{identity.location}</li>
          </ul>
        </header>

        <p className="max-w-3xl text-base leading-relaxed text-[#f0c88a]/95 sm:text-lg">
          {profile.professionalProfile}
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <AboutSectionLabel>Texniki bacarıqlar</AboutSectionLabel>
            <dl className="mt-5 space-y-4">
              {profile.technicalSkills.map(({ category, items }) => (
                <div
                  key={category}
                  className="border-b border-[#e8b070]/10 pb-4 last:border-0"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e8b070]/50">
                    {category}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[#e8b070]/80">
                    {items}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-12">
            <div>
              <AboutSectionLabel>İş təcrübəsi</AboutSectionLabel>
              <ul className="mt-5 space-y-8">
                {profile.experience.map((job) => (
                  <li
                    key={`${job.company}-${job.period}`}
                    className="rounded-xl border border-[#e8b070]/15 bg-[#e8b070]/[0.03] p-5"
                  >
                    <p className="font-mono text-sm text-[#f0c88a]">
                      {job.title}{" "}
                      <span className="text-[#e8b070]/45">|</span> {job.company}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e8b070]/45">
                      {job.period} · {job.location}
                    </p>
                    <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#e8b070]/75 marker:text-[#e8b070]/35">
                      {job.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 40)}>{bullet}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <AboutSectionLabel>Nailiyyətlər</AboutSectionLabel>
              <ul className="mt-5 space-y-4">
                {profile.achievements.map(({ title, description }) => (
                  <li
                    key={title}
                    className="border-l-2 border-[#e8b070]/35 pl-4"
                  >
                    <p className="text-sm font-medium text-[#f0c88a]">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#e8b070]/75">
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div>
            <AboutSectionLabel>Təhsil</AboutSectionLabel>
            <ul className="mt-5 space-y-4">
              {profile.education.map((item) => (
                <li key={`${item.org}-${item.period}`}>
                  <p className="text-sm text-[#f0c88a]">{item.title}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#e8b070]/50">
                    {item.org} · {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <AboutSectionLabel>Dil bilikləri</AboutSectionLabel>
            <ul className="mt-5 space-y-3">
              {profile.languages.map(({ name, level }) => (
                <li
                  key={name}
                  className="flex items-baseline justify-between gap-4 border-b border-[#e8b070]/10 pb-3 font-mono text-sm"
                >
                  <span className="text-[#e8b070]/85">{name}</span>
                  <span className="text-[#f0c88a]">{level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <AboutSectionLabel>Şəxsi bacarıqlar</AboutSectionLabel>
            <p className="mt-5 text-sm leading-relaxed text-[#e8b070]/75">
              {profile.softSkills}
            </p>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-4 sm:mt-20">
          <span className="h-px flex-1 bg-[#e8b070]/20" aria-hidden />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#e8b070]/35">
            end of profile.sys
          </span>
          <span className="h-px flex-1 bg-[#e8b070]/20" aria-hidden />
        </div>
      </div>
    </div>
  );
}
