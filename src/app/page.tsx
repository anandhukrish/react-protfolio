import { Projector } from "lucide-react";
import About from "./components/about/about";
import HeroSection from "./components/hero-section/hero-section";
import NextChapter from "./components/next-chapter/next-chapter";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className=" min-h-screen py-5">
      <div className="container mx-auto px-3 sm:px-0 ">
        <HeroSection />
        <NextChapter to="About" />
        <About />
        <NextChapter to="about" />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
