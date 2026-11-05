import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <ul className="flex gap-6">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-foreground">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}