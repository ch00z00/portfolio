export const Favorite: React.FC = () => {
  return (
    <div className="mx-auto flex h-screen w-screen flex-col-reverse bg-white-200 py-52 text-center text-black-200 md:grid md:grid-cols-2 md:py-0 md:pl-40 md:text-start xl:pl-60">
      <div className="flex flex-col justify-center gap-14 pt-32 font-orbitron text-lg font-light tracking-wider md:gap-28 md:pt-0 xl:text-3xl">
        <p>Traveling 🕺✈️</p>
        <p>Watching movies 🎥🍿</p>
        <p>Work out 🏋️💪</p>
      </div>
      <div className="flex flex-col justify-center gap-8 md:items-start">
        <p className="font-orbitron text-sm md:text-xl">04.</p>
        <h1 className="font-syne text-4xl lg:text-6xl">Favorite</h1>
      </div>
    </div>
  );
};
