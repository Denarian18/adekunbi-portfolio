import { Section } from "./section";
import { skills } from "@/data/content";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((g) => (
          <div
            key={g.group}
            className="rounded-2xl border border-foreground/10 p-6 transition hover:border-accent/50"
          >
            <h3 className="mb-4 font-semibold">{g.group}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-foreground/5 px-3 py-1 text-sm text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}