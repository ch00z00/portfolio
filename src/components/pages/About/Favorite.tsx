import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

/** TODO:
 * 🦄 [title]: Implement an slide in animation only once when loaded.
 * [items]: Implement an type effect only once when loaded & a cursor sticking effect when hovering.
 */

export const Favorite: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      setAnimation();
    }
  }, []);

  const setAnimation = () => {
    gsap.fromTo(
      "#slideX p",
      { alpha: 0, x: 30 },
      {
        alpha: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "slideX",
          start: "top 100%",
          toggleActions: "play none none reset",
        },
      }
    );
  };

  return (
    <div className="mx-auto flex h-screen w-screen flex-col-reverse bg-white-200 py-52 text-center text-black-200 md:grid md:grid-cols-2 md:py-0 md:pl-40 md:text-start xl:pl-60">
      <div className="flex flex-col justify-center gap-14 pt-32 font-orbitron text-lg font-light tracking-wider md:gap-28 md:pt-0 xl:text-3xl">
        <p>Traveling 🕺✈️</p>
        <p>Watching movies 🎥🍿</p>
        <p>Work out 🏋️💪</p>
      </div>
      <div
        className="flex flex-col justify-center gap-8 md:items-start"
        id="slideX"
      >
        <p className="font-orbitron text-sm lg:text-xl">04.</p>
        <p className="font-syne text-4xl lg:text-6xl">Favorite</p>
      </div>
    </div>
  );
};
