import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FAVORITE_ITEMS } from "@/const";

export const Favorite: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      favGSAPAnim();
    }
  }, []);

  const favGSAPAnim = () => {
    const stagger = 0.05;
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#fav_section",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      })
      .fromTo(
        "#slideY_fav p",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          stagger,
        }
      )
      .fromTo(
        "#slideX_fav p",
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
    <section
      id="fav_section"
      className="mx-auto flex h-screen w-screen flex-col bg-green-100 py-48 text-center text-white-200 md:grid-cols-2 lg:grid lg:py-0 lg:pl-40 lg:text-start xl:pl-60"
    >
      <div
        id="slideY_fav"
        className="flex flex-col justify-center gap-8 lg:items-start"
      >
        <p className="font-orbitron text-sm xl:text-xl">04.</p>
        <p className="font-syne text-4xl sm:text-5xl xl:text-6xl">Favorite</p>
      </div>
      <div className="flex flex-col justify-center gap-12 pt-28 font-orbitron text-lg font-light tracking-wider sm:text-2xl lg:gap-28 lg:pt-0 xl:text-3xl">
        {FAVORITE_ITEMS.map((item) => (
          <div key={item.fav} id="slideX_fav">
            <p>{item.fav}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
