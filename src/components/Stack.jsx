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
    <section id="stacks" className="w-full px-6 py-24 lg:px-16 lg:py-28">
      <h2 className="text-4xl lg:text-5xl text-primary text-center font-bold mb-10">
        My Tech Stacks
      </h2>
      <p className="text-base lg:text-lg text-dark dark:text-light text-center font-normal mb-10">
        The following are the technologies that I often use to develop
        applications
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-y-5 lg:gap-y-10 text-dark dark:text-light">
        <div className="font-semibold flex flex-col items-center">
          <SiAlpinedotjs className="text-3xl lg:text-5xl" />
          AlpineJs
        </div>
        <div className="font-semibold flex flex-col items-center">
          <SiBootstrap className="text-3xl lg:text-5xl" />
          Bootstrap
        </div>
        <div className="font-semibold flex flex-col items-center">
          <SiCodeigniter className="text-3xl lg:text-5xl" />
          CodeIgniter
        </div>
        <div className="font-semibold flex flex-col items-center">
          <SiExpress className="text-3xl lg:text-5xl" />
          ExpressJs
        </div>
        <div className="font-semibold flex flex-col items-center">
          <SiLaravel className="text-3xl lg:text-5xl" />
          Laravel
        </div>
        <div className="font-semibold flex flex-col items-center">
          <SiMongodb className="text-3xl lg:text-5xl" />
          MongoDB
        </div>
        <div className="font-semibold flex flex-col items-center">
          <SiMysql className="text-3xl lg:text-5xl" />
          MySQL
        </div>
        <div className="font-semibold flex flex-col items-center">
          <SiPostgresql className="text-3xl lg:text-5xl" />
          PostgreSQL
        </div>
        <div className="font-semibold flex flex-col items-center">
          <SiReact className="text-3xl lg:text-5xl" />
          ReactJs
        </div>
        <div className="font-semibold flex flex-col items-center">
          <SiSqlite className="text-3xl lg:text-5xl" />
          SQLite
        </div>
        <div className="font-semibold flex flex-col items-center">
          <SiTailwindcss className="text-3xl lg:text-5xl" />
          Tailwind CSS
        </div>
        <div className="font-semibold flex flex-col items-center">
          <SiVuedotjs className="text-3xl lg:text-5xl" />
          VueJs
        </div>
      </div>
    </section>
  );
}
