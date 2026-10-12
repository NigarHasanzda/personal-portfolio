type ExperienceTimelineItemProps = {
  title: string;
  company: string;
  period: string;
  location: string;
  highlight: string;
  isFirst?: boolean;
};

export default function ExperienceTimelineItem({
  title,
  company,
  period,
  location,
  highlight,
  isFirst = false,
}: ExperienceTimelineItemProps) {
  return (
    <li className="relative pl-8 sm:pl-10">
      <span
        aria-hidden
        className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${
          isFirst
            ? "border-[#ffe4b8] bg-[#e8b070]/40 shadow-[0_0_12px_rgba(232,176,112,0.45)]"
            : "border-[#e8b070]/50 bg-[#0c0806]"
        }`}
      />
      <span
        aria-hidden
        className="absolute bottom-0 left-[5px] top-5 w-px bg-[#e8b070]/20 last:hidden"
      />

      <article className="rounded-xl border border-[#e8b070]/15 bg-[#e8b070]/[0.03] p-5 sm:p-6">
        <p className="font-mono text-sm text-[#f0c88a]">
          {title}
          <span className="text-[#e8b070]/40"> · </span>
          {company}
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e8b070]/45">
          {period} · {location}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#e8b070]/75">
          {highlight}
        </p>
      </article>
    </li>
  );
}
