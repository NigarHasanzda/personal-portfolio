type SkillCategoryCardProps = {
  category: string;
  items: string;
};

export default function SkillCategoryCard({
  category,
  items,
}: SkillCategoryCardProps) {
  const tags = items.split(",").map((s) => s.trim());

  return (
    <article className="h-full rounded-xl border border-[#e8b070]/15 bg-[#e8b070]/[0.03] p-5 transition hover:border-[#e8b070]/28 sm:p-6">
      <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#ffe4b8]">
        {category}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <span className="inline-block rounded-md border border-[#e8b070]/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#e8b070]/75">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
