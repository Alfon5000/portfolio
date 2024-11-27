import {
  SiAlpinedotjs,
  SiBootstrap,
  SiCodeigniter,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";

export default function Skill() {
  return (
    <section
      id="skills"
      className="w-full bg-light dark:bg-dark text-secondary dark:text-primary px-6 py-24 lg:px-16 lg:py-28"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-5">
        My Skills
      </h2>
      <p className="text-base md:text-lg lg:text-xl text-center font-medium mb-10">
        These are the skills that I have:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-7 lg:gap-10">
        <div className="font-medium flex flex-col items-center">
          <SiAlpinedotjs className="text-3xl md:text-4xl lg:text-5xl " />
          AlpineJs
        </div>
        <div className="font-medium flex flex-col items-center">
          <SiBootstrap className="text-3xl md:text-4xl lg:text-5xl " />
          Bootstrap
        </div>
        <div className="font-medium flex flex-col items-center">
          <SiCodeigniter className="text-3xl md:text-4xl lg:text-5xl " />
          CodeIgniter
        </div>
        <div className="font-medium flex flex-col items-center">
          <SiExpress className="text-3xl md:text-4xl lg:text-5xl " />
          ExpressJs
        </div>
        <div className="font-medium flex flex-col items-center">
          <SiLaravel className="text-3xl md:text-4xl lg:text-5xl " />
          Laravel
        </div>
        <div className="font-medium flex flex-col items-center">
          <SiMongodb className="text-3xl md:text-4xl lg:text-5xl " />
          MongoDB
        </div>
        <div className="font-medium flex flex-col items-center">
          <SiMysql className="text-3xl md:text-4xl lg:text-5xl " />
          MySQL
        </div>
        <div className="font-medium flex flex-col items-center">
          <SiPostgresql className="text-3xl md:text-4xl lg:text-5xl " />
          PostgreSQL
        </div>
        <div className="font-medium flex flex-col items-center">
          <SiReact className="text-3xl md:text-4xl lg:text-5xl " />
          ReactJs
        </div>
        <div className="font-medium flex flex-col items-center">
          <SiSqlite className="text-3xl md:text-4xl lg:text-5xl " />
          SQLite
        </div>
        <div className="font-medium flex flex-col items-center">
          <SiTailwindcss className="text-3xl md:text-4xl lg:text-5xl " />
          Tailwind CSS
        </div>
        <div className="font-medium flex flex-col items-center">
          <SiVuedotjs className="text-3xl md:text-4xl lg:text-5xl " />
          VueJs
        </div>
      </div>
    </section>
  );
}
