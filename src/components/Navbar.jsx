import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <nav className="w-full bg-light dark:bg-dark text-secondary dark:text-primary shadow-md py-3 px-10 lg:py-4 lg:px-32 flex justify-between items-center fixed">
      {/* Brand Text Start */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black">AL</h1>
      {/* Brand Text End */}

      {/* Mobile Navbar Start */}
      <div className="relative lg:hidden">
        <button
          onClick={() => {
            setOpenNavbar(!openNavbar);
          }}
          className="text-light text-2xl"
        >
          <FaBars className="text-secondary dark:text-primary" />
        </button>
        {openNavbar && (
          <ul className="border border-dark dark:border-light absolute bg-light dark:bg-dark text-secondary dark:text-primary text-base font-semibold rounded-md shadow-md right-0 top-8 w-48 text-left">
            <a
              className="inline-block bg-light dark:bg-dark w-full rounded-md py-2 px-4 hover:bg-dark dark:hover:bg-light hover:text-primary dark:hover:text-secondary"
              href="#about"
            >
              About
            </a>

            <a
              className="inline-block bg-light dark:bg-dark w-full rounded-md py-2 px-4 hover:bg-dark dark:hover:bg-light hover:text-primary dark:hover:text-secondary"
              href="#skills"
            >
              Skills
            </a>

            <a
              className="inline-block bg-light dark:bg-dark w-full rounded-md py-2 px-4 hover:bg-dark dark:hover:bg-light hover:text-primary dark:hover:text-secondary"
              href="#projects"
            >
              Projects
            </a>

            <a
              className="inline-block bg-light dark:bg-dark w-full rounded-md py-2 px-4 hover:bg-dark dark:hover:bg-light hover:text-primary dark:hover:text-secondary"
              href="#contacts"
            >
              Contacts
            </a>
          </ul>
        )}
      </div>
      {/* Mobile Navbar End */}

      {/* Desktop Navbar Start */}
      <ul className="font-semibold space-x-10 hidden lg:block">
        <a
          href="#about"
          className="inline-block py-2 px-4 text-lg rounded-md hover:bg-dark dark:hover:bg-light hover:text-primary dark:hover:text-secondary"
        >
          About
        </a>
        <a
          href="#skills"
          className="inline-block py-2 px-4 text-lg rounded-md hover:bg-dark dark:hover:bg-light hover:text-primary dark:hover:text-secondary"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="inline-block py-2 px-4 text-lg rounded-md hover:bg-dark dark:hover:bg-light hover:text-primary dark:hover:text-secondary"
        >
          Projects
        </a>
        <a
          href="#contacts"
          className="inline-block py-2 px-4 text-lg rounded-md hover:bg-dark dark:hover:bg-light hover:text-primary dark:hover:text-secondary"
        >
          Contacts
        </a>
      </ul>
      {/* Desktop Navbar End */}
    </nav>
  );
}
