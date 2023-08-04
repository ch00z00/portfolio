import { useEffect } from "react";
import gsap from "gsap";
import { Header } from "../Header";
import { Footer } from "../Footer";

/** TODO:
 * 🦄 1. Implement an animation that performs the slide mark (and type effect only once when loaded).
 * 2. Implement a cursor sticking effect when hovering.
 */

export const Navigator: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setAnimation();
    }
  }, []);

  const setAnimation = () => {
    const stagger = 0.05;
    gsap.fromTo(
      "#nav_btn #cover_rect",
      {
        x: "-100%",
      },
      {
        x: "100%",
        duration: 1,
        ease: "power3.inout",
        stagger,
      }
    );
    gsap.fromTo(
      "#nav_btn #nav_label",
      { alpha: 0 },
      {
        alpha: 1,
        duration: 0.3,
        delay: 0.5,
        stagger,
      },
      "<"
    );
  };

  return (
    <>
      <Header />
      {/* Hide this when screen size is reduced to sm */}
      <div className="invisible fixed bottom-14 z-10 flex w-screen items-center justify-center px-14 font-earth text-xs uppercase text-white-200 sm:visible sm:px-24">
        <span className="text-lg">©</span>2023 Yusuke Seki
      </div>
      <Footer />
    </>
  );
};
