import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { INFO_ITEMS } from "@/const";

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
        trigger: "#bi_section",
        start: "top 70%",
        toggleActions: "play none none reset",
      },
    });
    tl.fromTo(
      "#slideX_bi p",
      { alpha: 0, x: -35 },
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
        className="mx-auto grid h-screen w-screen grid-cols-1 bg-black-200 py-48 text-center text-white-200 md:grid-cols-2 md:py-0 md:pl-40 md:text-start"
        id="bi_section"
      >
        <div
          className="flex flex-col justify-center gap-8 md:items-start"
          id="slideX_bi"
        >
          <p className="font-orbitron text-sm xl:text-xl">02.</p>
          <p className="font-syne text-4xl xl:text-6xl">Basic info</p>
        </div>
        <div className="flex flex-col justify-center gap-12 font-orbitron text-lg font-light tracking-wider md:gap-28 xl:text-3xl">
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
