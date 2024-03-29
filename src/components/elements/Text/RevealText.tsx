import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { twMerge } from "tailwind-merge";
import SplitType from "split-type";

type Props = {
  text?: string;
  children?: ReactNode;
  className?: string;
  onComplete?: () => void;
};

export const RevealText: React.FC<Props> = ({
  text,
  children,
  className,
  onComplete,
}) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stagger = 0.5;

    if (textRef.current) {
      const split = SplitType.create(textRef.current, { types: "lines" });
      gsap
        .timeline({
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
      {children}
    </div>
  );
};
