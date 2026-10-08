import Link from "next/link";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "Profile" },
  { href: "#contact", label: "Contact" },
] as const;

const linkClassName =
  "text-xs font-bold uppercase tracking-[0.16em] text-[#f0c88a] drop-shadow-[0_0_16px_rgba(12,8,6,0.95)] transition hover:text-[#ffe4b8] sm:text-sm sm:tracking-[0.2em]";

export default function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-5 py-5 sm:px-8">
      <nav
        className="pointer-events-auto flex items-center justify-between"
        aria-label="Main"
      >
        <Link href={navLinks[0].href} className={linkClassName}>
          {navLinks[0].label}
        </Link>

        <ul className="flex items-center gap-6 sm:gap-10">
          {navLinks.slice(1).map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkClassName}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
