export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: readonly string[];
  year: string;
  featured: boolean;
  href?: string;
  repo?: string;
};

export const projectsSectionMeta = {
  index: "03",
  fileLabel: "layihələr.vol",
  title: "Portfolio",
  lead: "Seçilmiş frontend layihələri — responsiv UI, API inteqrasiyası və istifadəçi yönümlü interfeyslər.",
} as const;

export const projects: readonly Project[] = [
  {
    slug: "bank-dashboard",
    title: "Bank daxili panel",
    description:
      "Kapital Bank təcrübəsi kontekstində daxili platforma interfeysi: komponent kitabxanası, form axınları və performans optimallaşdırılması.",
    tags: ["React", "TypeScript", "REST API", "MUI"],
    year: "2026",
    featured: true,
    repo: "https://github.com/NigarHasanzda",
  },
  {
    slug: "ecommerce-storefront",
    title: "E-commerce vitrin",
    description:
      "Next.js ilə SSR, dinamik kataloq, səbət state-i və mobil-first responsiv layout.",
    tags: ["Next.js", "Redux Toolkit", "Tailwind CSS"],
    year: "2025",
    featured: true,
    href: "#",
    repo: "https://github.com/NigarHasanzda",
  },
  {
    slug: "code8-hackathon",
    title: "Code8 Hackathon — qalib layihə",
    description:
      "Agile sprint formatında komanda ilə məhdud vaxtda funksional MVP: planlaşdırma, code review və demo.",
    tags: ["React", "Agile", "Team"],
    year: "2025",
    featured: true,
    repo: "https://github.com/NigarHasanzda",
  },
  {
    slug: "portfolio-site",
    title: "Şəxsi portfolio",
    description:
      "Dither hero, profil və layihə bölmələri ilə Next.js portfolio — komponent arxitekturası və dizayn sistemi.",
    tags: ["Next.js", "TypeScript", "Canvas"],
    year: "2026",
    featured: false,
    href: "/",
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);
