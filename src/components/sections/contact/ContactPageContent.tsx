import { Cormorant_Garamond } from "next/font/google";
import { AboutDecorations } from "@/components/sections/about/AboutDecorations";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactLinks from "@/components/sections/contact/ContactLinks";
import { contactSectionMeta } from "@/config/contact";
import { site } from "@/config/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
});

export default function ContactPageContent() {
  return (
    <div className="relative overflow-hidden border-t border-[#e8b070]/15 text-[#e8b070]">
      <AboutDecorations />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="mb-12 max-w-2xl">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#e8b070]/55">
            {contactSectionMeta.fileLabel} — compose
          </p>
          <h1
            className={`${display.className} mt-3 text-4xl italic sm:text-5xl`}
          >
            {contactSectionMeta.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#e8b070]/75 sm:text-lg">
            {contactSectionMeta.lead}
          </p>
          <p className="mt-2 font-mono text-sm text-[#f0c88a]/90">{site.name}</p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-xl border border-[#e8b070]/15 bg-[#e8b070]/[0.03] p-6">
            <ContactLinks />
          </div>
          <div className="rounded-xl border border-[#e8b070]/15 bg-[#e8b070]/[0.03] p-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
