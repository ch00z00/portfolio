import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { INFO_ITEMS } from "@/const";

/** TODO:
 * 🦄 [title]: Implement an slide in animation only once when loaded.
 * [items]: Implement a cursor sticking effect when hovering.
 */

export const BasicInfo: React.FC = () => {
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
        trigger: "#el",
        start: "top 60%",
        toggleActions: "play none none reset",
      },
    });
    tl.fromTo(
      "#slideX p",
      { alpha: 0, x: -30 },
      {
        alpha: 1,
        x: 0,
        duration: 2,
        stagger,
      }
    );
  };

  return (
    <>
      <div
        className="mx-auto grid h-screen w-screen grid-cols-1 bg-black-200 py-36 text-center text-white-200 md:grid-cols-2 md:py-0 md:pl-40 md:text-start"
        id="el"
      >
        <div
          className="flex flex-col justify-center gap-8 md:items-start"
          id="slideX"
        >
          <p className="font-orbitron text-sm xl:text-xl">02.</p>
          <p className="font-syne text-4xl xl:text-6xl">Basic info</p>
        </div>
        <div className="flex flex-col justify-center gap-14 font-orbitron text-lg font-light tracking-wider md:gap-28 xl:text-3xl">
          {INFO_ITEMS.map((item) => (
            <div key={item.name}>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
