import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import StatsStrip from "@/components/StatsStrip";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ExperienceTimeline />
      <StatsStrip />
      <Skills />
      <Publications />
      <Education />
      <ContactFooter />
    </main>
  );
}
