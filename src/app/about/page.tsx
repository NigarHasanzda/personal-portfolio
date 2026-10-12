import type { Metadata } from "next";
import AboutPageContent from "@/components/sections/about/AboutPageContent";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Profil və təcrübə — ${site.name}`,
  description: `${site.role} · ${site.contact.location}`,
};

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-[#0c0806] pt-24">
      <AboutPageContent />
    </div>
  );
}
