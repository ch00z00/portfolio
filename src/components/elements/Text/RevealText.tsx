import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { twMerge } from "tailwind-merge";
import SplitType from "split-type";

type Props = {
  text: string;
  className?: string;
  onComplete?: () => void;
};

export const RevealText: React.FC<Props> = ({
  text,
  className,
  onComplete,
}) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const stagger = 0.5;

    if (textRef.current) {
      if (textRef.current) {
        const split = SplitType.create(textRef.current, { types: "lines" });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textRef.current,
              start: "top center-=5%",
              toggleActions: "play none none reset",
              markers: true,
            },
            onComplete: () => {
              if (onComplete) {
                onComplete();
              }
            },
          })
          .fromTo(
            split.lines,
            {
              yPercent: 100,
              stagger,
            },
            {
              ease: "power4.out",
              yPercent: 0,
              duration: 1.7,
            }
          );
      }
    }
  }, []);

  return (
    <div
      ref={textRef}
      className={twMerge(
        "overflow-hidden font-neuropol text-[min(13vw,128px)] tracking-widest text-white-200",
        className
      )}
    >
      {text}
    </div>
  );
};
