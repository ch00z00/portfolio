import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FAVORITE_ITEMS } from "@/const";

export const Favorite: React.FC = () => {
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
        trigger: "#fav_section",
        start: "top 70%",
        toggleActions: "play none none reset",
      },
    });
    tl.fromTo(
      "#slideX_fav p",
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
    <div
      className="mx-auto flex h-screen w-screen flex-col bg-white-200 py-48 text-center text-black-200 md:grid md:grid-cols-2 md:py-0 md:pl-40 md:text-start xl:pl-60"
      id="fav_section"
    >
      <div
        className="flex flex-col justify-center gap-8 md:items-start"
        id="slideX_fav"
      >
        <p className="font-orbitron text-sm xl:text-xl">04.</p>
        <p className="font-syne text-4xl xl:text-6xl">Favorite</p>
      </div>
      <div className="flex flex-col justify-center gap-12 pt-32 font-orbitron text-lg font-light tracking-wider md:gap-28 md:pt-0 xl:text-3xl">
        {FAVORITE_ITEMS.map((item) => (
          <div key={item.fav}>
            <p>{item.fav}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
