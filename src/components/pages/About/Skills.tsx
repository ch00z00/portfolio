export const Skills: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-blue-200 pt-32 text-white-200">
      <div className="mb-20 flex flex-col items-center justify-center gap-8">
        <p className="font-orbitron text-sm md:text-xl">03.</p>
        <h1 className="font-syne text-4xl md:text-6xl">Skills</h1>
      </div>
      <div className="grid grid-cols-1 justify-center gap-14 font-neuropol text-2xl tracking-wider md:grid-cols-2 md:gap-0 md:px-40 lg:text-4xl">
        <div className="mx-auto text-center">
          TECK STACKS
          <div className="flex flex-col gap-3 pt-5 font-orbitron text-base md:gap-6 md:pt-14 lg:text-2xl">
            <p>Next.js (React)</p>
            <p>TypeScript</p>
            <p>WebGL, Three.js</p>
            <p>TailwindCSS, GSAP</p>
          </div>
        </div>
        <div className="mx-auto text-center">
          OTHER
          <div className="flex flex-col gap-3 pt-5 font-orbitron text-base md:gap-6 md:pt-14 lg:text-2xl">
            <p>DL (MT)</p>
            <p>TOEIC 660</p>
          </div>
        </div>
      </div>
    </div>
  );
};
