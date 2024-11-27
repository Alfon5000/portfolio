import { FaGithub } from "react-icons/fa";
import database from "../database.json";

export default function Project() {
  return (
    <section
      id="projects"
      className="w-full bg-dark dark:bg-light text-primary dark:text-secondary px-6 py-24 md:px-16 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-5">
        My Projects
      </h2>
      <p className="text-base md:text-lg lg:text-xl text-center font-medium mb-10">
        These are some of the projects I developed:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {database.projects.map((project) => (
          <div
            key={project.id}
            className="rounded-md shadow-md p-3 md:p-6 bg-light dark:bg-dark text-secondary dark:text-primary min-h-48 md:min-h-60"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full mb-2 md:mb-4 rounded-md shadow-md"
            />
            <h3 className="text-base md:text-lg font-medium mb-2 md:mb-4">
              {project.title}
            </h3>
            <p className="text-sm md:text-base font-light mb-2 md:mb-4">
              {project.description}
            </p>
            <div className="flex justify-end items-center gap-2">
              <FaGithub className="text-lg md:text-xl" />
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
