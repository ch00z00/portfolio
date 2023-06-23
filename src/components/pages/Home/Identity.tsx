export const Identity: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-80 bg-white-100 px-40 py-72 text-black-200">
        <h1 className="flex items-center justify-center font-syne text-6xl">
          Who am I ?
        </h1>
        <div className="leading-relax flex flex-col justify-center space-y-8 text-xl font-light uppercase tracking-widest">
          <p>Ritsumeikan Univ Student</p>
          <p>Age : 23</p>
          <p>Front-end developer</p>
        </div>
      </div>
    </>
  );
};
