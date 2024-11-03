import About from "./components/About";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Stack from "./components/Stack";

export default function App() {
  return (
    <div className="w-full bg-light dark:bg-dark text-dark dark:text-light">
      <Navbar />
      <Home />
      <Divider />
      <About />
      <Divider />
      <Stack />
      <Divider />
      <Project />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}
