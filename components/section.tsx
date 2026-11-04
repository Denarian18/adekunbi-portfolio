"use client";
import { motion } from "framer-motion";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-10 flex items-center gap-4 text-3xl font-bold">
          {title}
          <span className="h-px flex-1 bg-foreground/10" />
        </h2>
        {children}
      </motion.div>
    </section>
  );
}