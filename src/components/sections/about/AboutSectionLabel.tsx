import type { ReactNode } from "react";

export function AboutSectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#ffe4b8]">
      {children}
    </p>
  );
}
