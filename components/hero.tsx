"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/content";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-5xl flex-col justify-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm font-medium text-accent"
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl font-bold tracking-tight sm:text-7xl"
      >
        {profile.name}.
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-3 text-3xl font-semibold text-muted sm:text-5xl"
      >
        {profile.tagline}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 max-w-xl text-lg text-muted"
      >
        {profile.summary}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:opacity-90"
        >
          Contact me <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="/Adekunbi-Oluwole-CV.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 font-medium transition hover:bg-foreground/5"
        >
          <Download className="h-4 w-4" /> Download CV
        </a>
      </motion.div>
    </section>
  );
}