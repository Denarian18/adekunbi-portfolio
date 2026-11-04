import { Section } from "./section";
import { about } from "@/data/content";

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="max-w-2xl space-y-4 text-lg text-muted">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}