import Link from "next/link";
import { profile } from "@/config/profile";

export default function ContactLinks() {
  const { identity } = profile;

  const items: {
    label: string;
    value: string;
    href?: string;
    external?: boolean;
  }[] = [
    {
      label: "Telefon",
      value: identity.phone,
      href: `tel:${identity.phone.replace(/\s/g, "")}`,
    },
    {
      label: "Email",
      value: identity.email,
      href: `mailto:${identity.email}`,
    },
    {
      label: "GitHub",
      value: identity.links.github.label,
      href: identity.links.github.href,
      external: true,
    },
    {
      label: "LinkedIn",
      value: identity.links.linkedin.label,
      href: identity.links.linkedin.href,
      external: true,
    },
    {
      label: "Yer",
      value: identity.location,
    },
  ];

  return (
    <ul className="space-y-4">
      {items.map(({ label, value, href, external }) => (
        <li
          key={label}
          className="border-b border-[#e8b070]/10 pb-4 last:border-0 last:pb-0"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e8b070]/45">
            {label}
          </p>
          {href ? (
            external ? (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-[#f0c88a] transition hover:text-[#ffe4b8]"
              >
                {value} ↗
              </Link>
            ) : (
              <a
                href={href}
                className="mt-1 inline-block text-sm text-[#f0c88a] transition hover:text-[#ffe4b8]"
              >
                {value}
              </a>
            )
          ) : (
            <p className="mt-1 text-sm text-[#f0c88a]">{value}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
