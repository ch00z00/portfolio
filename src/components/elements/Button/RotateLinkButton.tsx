import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { BaseLink } from "../Link";

type Props = {
  blank?: boolean;
  href: string;
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  bef_txt: string;
  aft_txt: string;
};

export const RotateLinkButton: React.FC<Props> = ({
  blank,
  href,
  className,
  onClick,
  bef_txt,
  aft_txt,
}) => {
  const txtsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (txtsRef.current) {
      rotateAnim(txtsRef.current);
    }
  }, []);

  const rotateAnim = (target: HTMLDivElement) => {
    /* Null guard */
    if (target === null) return;
    const befTxt = target.querySelector("#bef_txt");
    const aftTxt = target.querySelector("#aft_txt");
    /* Roll action */
    target.addEventListener("mouseenter", () => {
      // onEnter action
      gsap.to(befTxt, { y: "-100%", ease: "power2.out" });
      gsap.to(aftTxt, { y: "-100%", ease: "power2.out" });
    });
    target.addEventListener("mouseleave", () => {
      // onLeave action
      gsap.to(befTxt, { y: "0%", ease: "power2.out" });
      gsap.to(aftTxt, { y: "100%", ease: "power2.out" });
    });
  };

  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-start overflow-hidden"
      onClick={onClick}
    >
      <BaseLink blank={blank} href={href} className="relative block w-full">
        <div
          ref={txtsRef}
          className={twMerge(
            "flex h-5 flex-col overflow-hidden font-orbitron text-xs tracking-widest text-white-200 sm:text-sm",
            className
          )}
        >
          <span id="bef_txt">{bef_txt}</span>
          <span id="aft_txt">{aft_txt}</span>
        </div>
      </BaseLink>
    </button>
  );
};
