import { Section } from "./section";
import { education, certifications } from "@/data/content";

export function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          {education.map((e) => (
            <div key={e.title}>
              <p className="text-sm text-muted">{e.period}</p>
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <p className="text-accent">{e.place}</p>
              {e.note && <p className="mt-1 text-sm text-muted">{e.note}</p>}
            </div>
          ))}
        </div>
        <ul className="space-y-3">
          {certifications.map((c) => (
            <li
              key={c}
              className="rounded-xl border border-foreground/10 px-4 py-3 text-muted"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}