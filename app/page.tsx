import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="h-96" />
        <section id="experience" className="h-96" />
        <section id="projects" className="h-96" />
        <section id="contact" className="h-96" />
      </main>
    </>
  );
}