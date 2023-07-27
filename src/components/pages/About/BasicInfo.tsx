import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const BasicInfo: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const didEffect = React.useRef(false);

  return (
    <>
      <div className="mx-auto grid h-screen w-screen grid-cols-1 bg-black-200 py-36 text-center text-white-200 md:grid-cols-2 md:py-0 md:pl-40 md:text-start">
        <div className="flex flex-col justify-center gap-8 md:items-start">
          <p ref={ref} className="font-orbitron text-sm md:text-xl">
            02.
          </p>
          <h1 ref={ref} className="font-syne text-4xl xl:text-6xl">
            Basic info
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-14 font-orbitron text-lg font-light tracking-wider md:gap-28 xl:text-3xl">
          <p>Ritsumeikan Univ Student</p>
          <p>23 years old</p>
          <p>Front-end developer</p>
        </div>
      </div>
    </>
  );
};
