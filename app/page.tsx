import Intro from "@/components/intro";
import About from "@/components/about";
import News from "@/components/news";
import Publications from "@/components/publications";
import Research from "@/components/research";
import Teaching from "@/components/teaching";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-3xl mx-auto px-5 sm:px-6 pt-10 sm:pt-16 pb-8">
      <Intro />
      <About />
      <News />
      <Publications />
      <Research />
      <Teaching />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
