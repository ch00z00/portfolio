import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

/** TODO:
 * [title]: Implement an slide in animation only once when loaded.
 * [items]: Implement an type effect only once when loaded & a cursor sticking effect when hovering.
 */

export const BasicInfo: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      setAnimation();
    }
  }, []);

  const setAnimation = () => {
    gsap.fromTo(
      "#slideY p",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "slideY",
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            console.log("scroll In");
          },
          onEnterBack: () => {
            console.log("scroll Back");
          },
        },
      }
    );
  };

  return (
    <>
      <div className="mx-auto grid h-screen w-screen grid-cols-1 bg-black-200 py-36 text-center text-white-200 md:grid-cols-2 md:py-0 md:pl-40 md:text-start">
        <div
          className="flex flex-col justify-center gap-8 md:items-start"
          id="slideY"
        >
          <p className="font-orbitron text-sm xl:text-xl">02.</p>
          <p className="font-syne text-4xl xl:text-6xl">Basic info</p>
        </div>
        <div className="flex flex-col justify-center gap-14 font-orbitron text-lg font-light tracking-wider md:gap-28 xl:text-3xl">
          <p>23 years old</p>
          <p>Ritsumeikan Univ Student</p>
          <p>Front-end developer</p>
        </div>
      </div>
    </>
  );
};
