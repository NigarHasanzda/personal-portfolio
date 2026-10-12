export const profile = {
  identity: {
    fullName: "Nigar Həsənzadə",
    role: "Frontend Developer",
    location: "Bakı, Azərbaycan",
    phone: "(051) 717-18-36",
    email: "nigarhesenzade703@gmail.com",
    links: {
      github: {
        label: "github.com/NigarHasanzda",
        href: "https://github.com/NigarHasanzda",
      },
      linkedin: {
        label: "linkedin.com/in/nigar-hasanzada",
        href: "https://linkedin.com/in/nigar-hasanzada",
      },
    },
  },
  professionalProfile:
    "React, Next.js və TypeScript üzrə təcrübəyə malik Frontend Developer. Bank və IT sektorunda real məhsul layihələrində REST API inteqrasiyası, Redux Toolkit ilə state management və təkrar istifadə oluna bilən komponent arxitekturasının qurulması üzrə təcrübə qazanılmışdır. Agile komanda mühitində code review, performans optimallaşdırılması və responsiv interfeyslərin hazırlanması əsas iş istiqamətləridir.",
  technicalSkills: [
    {
      category: "Proqramlaşdırma dilləri",
      items: "JavaScript (ES6+), TypeScript, HTML5, CSS3",
    },
    {
      category: "Framework və kitabxanalar",
      items: "React.js, Next.js, Node.js, Express.js, MongoDB",
    },
    {
      category: "İnterfeys və stilləndirmə",
      items:
        "Tailwind CSS, MUI, SCSS, Responsive Design, Flexbox, CSS Grid",
    },
    {
      category: "State management və API",
      items: "Redux Toolkit, Context API, REST API, Axios",
    },
    {
      category: "Alətlər və platformalar",
      items: "Git, GitHub, Postman, Google Cloud, Vercel",
    },
    {
      category: "AI alətləri",
      items: "Claude Code, Cursor, ChatGPT, Gemini",
    },
    {
      category: "Metodologiya",
      items: "Agile/Scrum, Code Review, Sprint Planning",
    },
  ],
  experience: [
    {
      title: "Frontend Developer",
      company: "Ante Technologies",
      period: "İyul 2026 – Hazırda",
      location: "Bakı, Azərbaycan",
      bullets: [
        "React, Next.js və TypeScript əsasında məhsul interfeyslərinin hazırlanması və mövcud modulların inkişaf etdirilməsi.",
        "Backend komandası ilə birgə REST API inteqrasiyalarının qurulması və dinamik data axınının idarə olunması.",
        "Təkrar istifadə oluna bilən komponent strukturunun formalaşdırılması və kod keyfiyyətinin code review prosesləri ilə qorunması.",
      ],
    },
    {
      title: "Frontend Developer (Təcrübəçi)",
      company: "Kapital Bank",
      period: "Fevral 2026 – İyul 2026",
      location: "Bakı, Azərbaycan",
      bullets: [
        "Bankın daxili platformalarının interfeysinin müasir veb texnologiyaları ilə yenilənməsi və istifadəçi təcrübəsinin yaxşılaşdırılması.",
        "Agile prinsipləri əsasında aparılan code review proseslərində iştirak və təkrar istifadə oluna bilən komponentlərin hazırlanması.",
        "Geniş istifadəçi kütləsi olan sistemdə UI detallarına diqqət yetirilməsi və performansın artırılmasına töhfə verilməsi.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Burncode MMC",
      period: "Avqust 2025 – May 2026",
      location: "Bakı, Azərbaycan",
      bullets: [
        "Real layihələr üzərində sıfırdan responsiv və sürətli işləyən frontend tətbiqlərinin qurulması.",
        "Backend komandası ilə mürəkkəb REST API-lərin inteqrasiyası və dinamik data axınının idarə edilməsi.",
        "Tətbiqin müxtəlif brauzerlərdə eyni keyfiyyətdə görünməsi üçün cross-browser uyğunluq yoxlamalarının aparılması.",
      ],
    },
  ],
  achievements: [
    {
      title: "CodeAcademy Code8 Hackathon — Qalib (2025)",
      description:
        "Agile prinsipləri əsasında məhdud vaxt ərzində komanda ilə funksional məhsulun hazırlanması və birinciliyin qazanılması.",
    },
  ],
  education: [
    {
      title: "Kompüter Elmləri (Bakalavr)",
      org: "Azərbaycan Texniki Universiteti",
      period: "2022 – 2026",
    },
    {
      title: "Frontend Kursu",
      org: "CodeAcademy",
      period: "Fevral 2025 – İyun 2025",
    },
    {
      title: "Backend Developer Kursu",
      org: "Jet Academy",
      period: "İyun 2024 – Oktyabr 2024",
    },
  ],
  languages: [
    { name: "Türk dili", level: "C2" },
    { name: "İngilis dili", level: "B1" },
    { name: "Rus dili", level: "A1" },
  ],
  softSkills:
    "Analitik düşünmə, problem həlli, komanda ilə işləmə, detallara diqqət, Agile iş prinsipləri ilə işləmə, öyrənmə çevikliyi.",
} as const;
