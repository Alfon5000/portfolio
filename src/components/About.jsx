import database from "../database.json";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 py-24 lg:px-16 lg:py-28 lg:flex justify-center"
    >
      <h1 className="basis-1/3 text-4xl lg:text-5xl text-primary text-center font-bold mb-10">
        About Me
      </h1>
      <p className="basis-2/3 text-base lg:text-lg font-normal text-justify">
        {database.about.description}
      </p>
    </section>
  );
}
