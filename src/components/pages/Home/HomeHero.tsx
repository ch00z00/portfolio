export const Hero: React.FC = () => {
  return (
    <div className="gradient-red-white flex h-fit w-screen flex-col items-center justify-center pb-52 pt-80 text-white-100">
      <h1 className="font-syne text-8xl">Yusuke Seki</h1>
      <div className="leading-relax pt-28 text-xl font-light uppercase tracking-widest">
        This is a <span className="font-syne normal-case">Miniature</span> of
        myself.
      </div>
    </div>
  );
};
