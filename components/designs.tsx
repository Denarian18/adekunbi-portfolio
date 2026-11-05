"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Section } from "./section";
import { designs } from "@/data/content";

export function Designs() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Section id="design" title="Design work">
      <p className="mb-8 max-w-xl text-muted">
        Flyers and posters I&apos;ve designed. Click any piece to view it larger.
      </p>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {designs.map((d, i) => (
          <button
            key={d.src}
            onClick={() => setActive(i)}
            className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-foreground/10"
          >
            <Image
              src={d.src}
              alt={d.title}
              width={800}
              height={1000}
              className="h-auto w-full transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-left text-sm text-white opacity-0 transition group-hover:opacity-100">
              {d.title} · {d.category}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={designs[active].src}
              alt={designs[active].title}
              width={1200}
              height={1500}
              className="max-h-[90vh] w-auto rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}