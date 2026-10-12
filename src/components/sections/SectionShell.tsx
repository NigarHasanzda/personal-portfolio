import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  children?: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 bg-[#0c0806] text-[#e8b070] ${className}`.trim()}
    >
      {children}
    </section>
  );
}
