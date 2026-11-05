import Image from "next/image";
import { Code, ExternalLink } from "lucide-react";
import { Section } from "./section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/10 transition hover:-translate-y-1 hover:border-accent/50"
          >
            <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-foreground/5">
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                   sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-muted">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-5 text-sm font-medium">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-accent"
                >
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-accent"
                >
                  <Code className="h-4 w-4" /> Source code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}