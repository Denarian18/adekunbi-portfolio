import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold">
          AO<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-muted sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}