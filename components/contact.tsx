"use client";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Section } from "./section";
import { profile } from "@/data/content";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-foreground/15 bg-transparent px-4 py-3 outline-none transition placeholder:text-muted/70 focus:border-accent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        }
      );
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" title="Get in touch">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-lg text-muted">
            Have a project, a job opportunity, or a question? My inbox is open.
            Send a message and I&apos;ll get back to you as soon as I can.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 font-medium text-accent hover:underline"
          >
            <Mail className="h-5 w-5" /> {profile.email}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className={field}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className={field}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            required
            className={field}
          />
          {/* Honeypot: hidden field that catches spam bots */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
            <Send className="h-4 w-4" />
          </button>
          {status === "success" && (
            <p role="status" className="text-sm text-green-600 dark:text-green-400">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}