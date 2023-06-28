export const Favorite: React.FC = () => {
  return (
    <div className="grid h-4/5 grid-cols-2 gap-16 bg-black-100 pl-40 text-white-200">
      <div className="flex flex-col items-start justify-center gap-8">
        <p className="font-orbitron text-xl">04.</p>
        <h1 className="font-syne text-6xl">Favorite</h1>
      </div>
      <div className="leading-relax flex flex-col justify-center gap-12 font-orbitron text-xl font-light uppercase tracking-wide">
        <p>Ritsumeikan Univ Student</p>
        <p>23 years old</p>
        <p>Front-end developer</p>
      </div>
    </div>
  );
};
