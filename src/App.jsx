import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ThemeToggle from "./components/ui/ThemeToggle.jsx";

export default function App() {
  return (
    <div className="bg-bg text-text min-h-screen">
      <Navbar />

      <div className="fixed top-[14px] right-6 z-[60]">
        <ThemeToggle />
      </div>

      <div className="md:ml-36 lg:ml-44 pt-16 md:pt-0">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
