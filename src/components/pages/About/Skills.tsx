import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

/** TODO:
 * [title]: Implement an up-to-down slide in animation only once when loaded.
 * [sub-title]: Implement an animation that performs the slide mark only once when loaded.
 * [items]: Implement an type effect only once when loaded & a cursor sticking effect when hovering.
 */

export const Skills: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      setAnimation();
    }
  }, [ref]);

  const setAnimation = () => {
    const stagger = 0.05;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 100%",
          toggleActions: "play none none reset",
        },
      })
      .to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          once: true,
        },
        opacity: 1,
        duration: 1,
        stagger,
      })
      .fromTo(
        "#slideY p",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 100%",
            toggleActions: "play none none reset",
          },
        }
      );
  };

  return (
    <div
      className="h-screen w-screen bg-blue-200 pt-32 text-white-200"
      ref={ref}
    >
      <div
        className="mb-20 flex flex-col items-center justify-center gap-8"
        id="slideY"
      >
        <p className="font-orbitron text-sm md:text-xl">03.</p>
        <p className="font-syne text-4xl md:text-6xl">Skills</p>
      </div>
      <div
        className="grid grid-cols-1 justify-center gap-14 font-neuropol text-2xl tracking-wider md:grid-cols-2 md:gap-0 md:px-40 xl:text-4xl"
        id="slideX"
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
