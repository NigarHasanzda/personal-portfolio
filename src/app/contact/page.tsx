import type { Metadata } from "next";
import { ContactPageContent } from "@/components/sections/contact";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Əlaqə — ${site.name}`,
  description: "Layihə və iş birliyi üçün əlaqə",
};

export default function ContactPage() {
  return (
    <div className="min-h-dvh bg-[#0c0806] pt-24">
      <ContactPageContent />
    </div>
  );
}
