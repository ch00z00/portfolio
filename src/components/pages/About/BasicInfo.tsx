import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { INFO_ITEMS } from "@/const";

export const BasicInfo: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      biGSAPAnim();
    }
  }, []);

  const biGSAPAnim = () => {
    const stagger = 0.05;
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#bi_section",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      })
      .fromTo(
        "#slideY_bi p",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          stagger,
        }
      )
      .fromTo(
        "#slideX_bi p",
        { alpha: 0, x: -35 },
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
    <>
      <div
        id="bi_section"
        className="mx-auto flex h-screen w-screen flex-col bg-black-200 py-48 text-center text-white-200 md:grid-cols-2 lg:grid lg:py-0 lg:pl-40 lg:text-start xl:pl-60"
      >
        <div
          id="slideY_bi"
          className="flex flex-col justify-center gap-8 lg:items-start"
        >
          <p className="font-orbitron text-sm xl:text-xl">02.</p>
          <p className="font-syne text-4xl sm:text-5xl xl:text-6xl">
            Basic info
          </p>
        </div>
        <div className="flex flex-col justify-center gap-12 pt-28 font-orbitron text-lg font-light tracking-wider sm:text-2xl lg:gap-28 lg:pt-0 xl:text-3xl">
          {INFO_ITEMS.map((item) => (
            <div key={item.name} id="slideX_bi">
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
