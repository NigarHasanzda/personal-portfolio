import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/sections/projects";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Layihələr — ${site.name}`,
  description: "Frontend portfolio layihələri",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-dvh bg-[#0c0806] pt-24">
      <ProjectsPageContent />
    </div>
  );
}
