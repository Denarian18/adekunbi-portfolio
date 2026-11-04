import { Section } from "./section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative ml-3 border-l border-foreground/15">
        {experience.map((job) => (
          <li key={job.role + job.company} className="mb-12 ml-8 last:mb-0">
            <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent" />
            <p className="text-sm text-muted">{job.period}</p>
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="mb-3 font-medium text-accent">{job.company}</p>
            <ul className="list-disc space-y-1.5 pl-5 text-muted">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}