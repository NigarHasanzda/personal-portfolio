import { profile } from "@/config/profile";

export const site = {
  name: profile.identity.fullName,
  role: profile.identity.role,
  portraitSrc: "/images/hero-portrait.jpg",
  contact: profile.identity,
} as const;
