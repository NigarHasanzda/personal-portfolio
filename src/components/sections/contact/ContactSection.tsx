import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { AboutDecorations } from "@/components/sections/about/AboutDecorations";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactLinks from "@/components/sections/contact/ContactLinks";
import { SectionShell } from "@/components/sections/SectionShell";
import { contactSectionMeta } from "@/config/contact";
import { sectionIds } from "@/config/sections";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
});

export default function ContactSection() {
  return (
    <SectionShell
      id={sectionIds.contact}
      className="relative overflow-hidden border-t border-[#e8b070]/15"
    >
      <AboutDecorations />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <header className="mb-10 max-w-2xl">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#e8b070]/55 sm:text-[11px]">
            {contactSectionMeta.index} — {contactSectionMeta.fileLabel}
          </p>
          <h2
            className={`${display.className} mt-3 text-3xl italic text-[#e8b070] sm:text-4xl`}
          >
            {contactSectionMeta.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#e8b070]/75 sm:text-lg">
            {contactSectionMeta.lead}
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e8b070]/45">
            {contactSectionMeta.availability}
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="rounded-xl border border-[#e8b070]/15 bg-[#e8b070]/[0.03] p-5 sm:p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#ffe4b8]">
              Birbaşa əlaqə
            </p>
            <div className="mt-5">
              <ContactLinks />
            </div>
          </div>

          <div className="rounded-xl border border-[#e8b070]/15 bg-[#e8b070]/[0.03] p-5 sm:p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#ffe4b8]">
              Mesaj göndər
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffe4b8] transition hover:text-[#f0c88a]"
          >
            Tam əlaqə səhifəsi
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
