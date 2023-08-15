import { useEffect } from "react";
import gsap from "gsap";
import { twMerge } from "tailwind-merge";
import SplitType from "split-type";

type Props = {
  text: string;
  className?: string;
};

export const RevealText: React.FC<Props> = ({ text, className }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      revealAnim();
    }
  }, []);

  const revealAnim = () => {
    const stagger = 0.2;
    const split = SplitType.create("#text", { types: "lines" });
    gsap.timeline().fromTo(
      split.lines,
      {
        yPercent: 100,
        stagger,
      },
      {
        ease: "power4.out",
        yPercent: 0,
        duration: 1.5,
      }
    );
  };

  return (
    <>
      <div
        id="text"
        className={twMerge(
          "overflow-hidden font-neuropol text-5xl text-white-200 sm:text-8xl lg:text-9xl",
          className
        )}
      >
        {text}
      </div>
    </>
  );
};
