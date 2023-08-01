import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FAVORITE_ITEMS } from "@/const";
import { init } from "ityped";

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
    const stagger = 0.05;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#el",
        start: "top 100%",
        toggleActions: "play none none reset",
      },
    });
    tl.fromTo(
      "#slideX p",
      { alpha: 0, x: 30 },
      {
        alpha: 1,
        x: 0,
        duration: 2,
        stagger,
      }
    ).call(initTypeAnim, [], "<1");
  };

  const initTypeAnim = () => {
    {
      FAVORITE_ITEMS.map((item) => {
        init("#ityped", {
          strings: [`${item.fav}`],
          startDelay: 0,
          typeSpeed: 80,
          loop: false,
          disableBackTyping: true,
          showCursor: false,
        });
      });
    }
  };

  return (
    <div
      className="mx-auto flex h-screen w-screen flex-col-reverse bg-white-200 py-52 text-center text-black-200 md:grid md:grid-cols-2 md:py-0 md:pl-40 md:text-start xl:pl-60"
      id="el"
    >
      <div
        className="flex flex-col justify-center gap-14 pt-32 font-orbitron text-lg font-light tracking-wider md:gap-28 md:pt-0 xl:text-3xl"
        id="ityped"
      >
        {FAVORITE_ITEMS.map((item) => (
          <div key={item.fav}>
            <p>{item.fav}</p>
          </div>
        ))}
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
