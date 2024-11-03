import database from "../database.json";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full px-6 py-24 lg:px-16 lg:py-28 lg:flex justify-center items-center gap-x-10"
    >
      <div className="lg:basis-1/3 flex justify-end items-center">
        <img
          src={database.home.avatar}
          alt="Avatar"
          className="size-48 lg:size-64 rounded-full shadow-md mx-auto mb-5 lg:mb-0"
        />
      </div>
      <div className="lg:basis-2/3 mb-5 lg:mb-0 text-center">
        <h1 className="text-3xl lg:text-4xl text-primary font-bold mb-5">
          Hello everyone, I&apos;m {database.home.name} 👋
        </h1>
        <h2 className="text-xl lg:text-2xl tracking-widest mb-5">
          {database.home.job}
        </h2>
        <p className="text-base lg:text-lg italic">
          &quot;If you try, you have a 50% chance of success and 50% chance of
          failure. But if you don&apos;t try, you only have a 100% chance of
          failure.&quot;
        </p>
      </div>
    </section>
  );
}
