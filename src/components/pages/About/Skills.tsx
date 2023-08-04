import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Skills: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      setAnimation();
    }
  }, []);

  const setAnimation = () => {
    const stagger = 0.05;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sk_section",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
    tl.fromTo(
      "#slideY_sk p",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger,
      }
    ).fromTo(
      "#slideX_sk div",
      { alpha: 0, x: -30 },
      {
        alpha: 1,
        x: 0,
        duration: 2,
        stagger,
      },
      "<0.4"
    );
  };

  return (
    <div
      className="h-screen w-screen bg-blue-200 pt-36 text-white-200"
      id="sk_section"
    >
      <div
        className="mb-20 flex flex-col items-center justify-center gap-8"
        id="slideY_sk"
      >
        <p className="font-orbitron text-sm md:text-xl">03.</p>
        <p className="font-syne text-4xl md:text-7xl">Skills</p>
      </div>
      <div
        className="grid grid-cols-1 justify-center gap-12 font-neuropol text-2xl tracking-wider md:grid-cols-2 md:gap-0 md:px-40 xl:text-4xl"
        id="slideX_sk"
      >
        <div className="mx-auto text-center">
          TECK STACKS
          <ul className="flex flex-col gap-3 pt-5 font-orbitron text-base md:gap-6 md:pt-14 xl:text-2xl">
            <li>Next.js (React)</li>
            <li>TypeScript</li>
            <li>WebGL, Three.js</li>
            <li>TailwindCSS, GSAP</li>
          </ul>
        </div>
        <div className="mx-auto text-center">
          OTHER
          <ul className="flex flex-col gap-3 pt-5 font-orbitron text-base md:gap-6 md:pt-14 xl:text-2xl">
            <li>DL (MT)</li>
            <li>TOEIC 660</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
