import database from "../database.json";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-dark dark:bg-light text-primary dark:text-secondary px-6 pt-24 pb-6 lg:px-16 lg:pt-28 lg:pb-16 lg:flex justify-center items-center gap-10"
    >
      <div className="lg:basis-1/3 lg:flex justify-center items-center mb-5 lg:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          About Me
        </h1>
      </div>
      <div className="lg:basis-2/3 mb-5 lg:mb-0 text-center">
        <img
          src={database.about.avatar}
          alt="Avatar"
          className="size-48 lg:size-64 rounded-full shadow-md mx-auto mb-5"
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-5">
          Hello everyone, I&apos;m {database.about.name} 👋
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-light">
          {database.about.description}
        </p>
      </div>
    </section>
  );
}
