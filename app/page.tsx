import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillsGrid from '@/components/SkillsGrid';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import ResumeCTA from '@/components/ResumeCTA';
import ContactForm from '@/components/ContactForm';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsGrid />
      <ExperienceTimeline />
      <Projects />
      <Certifications />
      <Education />
      <ResumeCTA />
      <ContactForm />
    </>
  );
}
