import { FaGithub } from "react-icons/fa";
import database from "../database.json";

export default function Project() {
  return (
    <section id="projects" className="w-full px-6 py-24 lg:px-16 lg:py-28">
      <h2 className="text-4xl lg:text-5xl text-primary text-center font-bold mb-10">
        My Personal Projects
      </h2>
      <p className="text-base lg:text-lg text-dark dark:text-light text-center font-normal mb-10">
        These are some personal projects I made using my usual tech stack.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-3 lg:gap-x-6 text-light dark:text-dark">
        {database.projects.map((project) => (
          <div
            key={project.id}
            className="rounded-md shadow-md p-3 lg:p-6 bg-dark dark:bg-light text-light dark:text-dark min-h-48 lg:min-h-60"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full mb-3 lg:mb-4 rounded-md shadow-md"
            />
            <h3 className="text-base font-semibold mb-3 lg:mb-4">
              {project.title}
            </h3>
            <p className="text-sm font-normal mb-3 lg:mb-4">
              {project.description}
            </p>
            <div className="flex justify-end items-center gap-x-2">
              <FaGithub className="text-lg lg:text-xl" />
              <a href={project.github} target="_blank">
                Go to GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
