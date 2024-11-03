import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <nav className="w-full bg-dark dark:bg-light text-light dark:text-dark shadow-md py-3 px-10 lg:py-4 lg:px-32 flex justify-between items-center fixed">
      {/* Brand Text Start */}
      <h1 className="text-4xl lg:text-5xl text-primary font-black italic">
        <a href="#home">AL</a>
      </h1>
      {/* Brand Text End */}

      {/* Mobile Navbar Start */}
      <div className="relative lg:hidden">
        <button
          onClick={() => {
            setOpenNavbar(!openNavbar);
          }}
          className="text-light text-2xl"
        >
          <FaBars className="text-light dark:text-dark" />
        </button>
        {openNavbar && (
          <ul className="absolute bg-light dark:bg-dark text-dark dark:text-light text-base font-semibold rounded-md shadow-md right-0 top-8 w-48 text-left">
            <li>
              <a
                className="inline-block bg-light dark:bg-dark w-full rounded-md p-3 hover:bg-primary hover:text-light"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="inline-block bg-light dark:bg-dark w-full rounded-md p-3 hover:bg-primary hover:text-light"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="inline-block bg-light dark:bg-dark w-full rounded-md p-3 hover:bg-primary hover:text-light"
                href="#stacks"
              >
                Stacks
              </a>
            </li>
            <li>
              <a
                className="inline-block bg-light dark:bg-dark w-full rounded-md p-3 hover:bg-primary hover:text-light"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="inline-block bg-light dark:bg-dark w-full rounded-md p-3 hover:bg-primary hover:text-light"
                href="#contacts"
              >
                Contacts
              </a>
            </li>
          </ul>
        )}
      </div>
      {/* Mobile Navbar End */}

      {/* Desktop Navbar Start */}
      <ul className="font-semibold space-x-10 hidden lg:block">
        <li className="inline-block p-2 rounded-md hover:bg-secondary hover:text-dark">
          <a href="#home">Home</a>
        </li>
        <li className="inline-block p-2 rounded-md hover:bg-secondary hover:text-dark">
          <a href="#about">About</a>
        </li>
        <li className="inline-block p-2 rounded-md hover:bg-secondary hover:text-dark">
          <a href="#stacks">Stacks</a>
        </li>
        <li className="inline-block p-2 rounded-md hover:bg-secondary hover:text-dark">
          <a href="#projects">Projects</a>
        </li>
        <li className="inline-block p-2 rounded-md hover:bg-secondary hover:text-dark">
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      {/* Desktop Navbar End */}
    </nav>
  );
}
