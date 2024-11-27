import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full bg-light dark:bg-dark text-dark dark:text-light">
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
