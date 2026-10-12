import { profile } from "@/config/profile";

export const skillsSectionMeta = {
  index: "05",
  fileLabel: "stack.sys",
  title: "Texniki stack",
  lead: "İstifadə etdiyim dillər, framework-lər və alətlər — real layihələrdə tətbiq olunan bacarıqlar.",
} as const;

/** Ana səhifədə vurğulanan texnologiyalar */
export const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "REST API",
] as const;

/** `profile.technicalSkills` ilə eyni mənbə — section UI üçün */
export const skillCategories = profile.technicalSkills;
