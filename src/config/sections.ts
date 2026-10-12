/** Header anchor id-ləri — nav və section-lar eyni dəyərləri istifadə etməlidir */
export const sectionIds = {
  projects: "projects",
  about: "about",
  contact: "contact",
} as const;

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];
