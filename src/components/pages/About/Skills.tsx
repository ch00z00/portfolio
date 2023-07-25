export const Skills: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-blue-200 pt-32 text-white-200">
      <div className="mb-20 flex flex-col items-center justify-center gap-12">
        <p className="font-orbitron text-xl">03.</p>
        <h1 className="font-syne text-7xl">Skills</h1>
      </div>
      <div className="grid grid-cols-2 justify-center px-40 font-neuropol text-3xl tracking-wide">
        <div>Tech stacks</div>
        <div>
          <div>Standard motor vehicle license (MT)</div>
          <div>TOEIC 660</div>
        </div>
      </div>
    </div>
  );
};
