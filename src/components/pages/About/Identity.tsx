export const Identity: React.FC = () => {
  return (
    <>
      <div className="grid h-4/5 grid-cols-2 gap-16 bg-white-200 pl-40 text-black-200">
        <div className="flex flex-col items-start justify-center gap-8">
          <p className="font-orbitron text-xl">02.</p>
          <h1 className="font-syne text-6xl">Basic info</h1>
        </div>
        <div className="leading-relax flex flex-col justify-center gap-12 font-orbitron text-xl font-light uppercase tracking-wide">
          <p>Ritsumeikan Univ Student</p>
          <p>23 years old</p>
          <p>Front-end developer</p>
        </div>
      </div>
    </>
  );
};
