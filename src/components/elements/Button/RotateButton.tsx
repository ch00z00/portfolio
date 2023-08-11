import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

type Props = {
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  bef_txt: string;
  aft_txt: string;
  result_txt?: string;
};

export const RotateButton: React.FC<Props> = ({
  className,
  onClick,
  bef_txt,
  aft_txt,
  result_txt,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      rotateAnim();
    }
  }, []);

  const rotateAnim = () => {
    const target = document.querySelector("#txts");
    /* Null guard */
    if (target === null) return;
    const befTxt = target.querySelector("#bef_txt");
    const aftTxt = target.querySelector("#aft_txt");
    const result_txt = target.querySelector("#result_txt");
    /* Roll action */
    target.addEventListener("mouseenter", () => {
      // onEnter action
      gsap.to(befTxt, { y: "-100%", ease: "power2.out" });
      gsap.to(aftTxt, { y: "-100%", ease: "power2.out" });
      gsap.to(result_txt, { y: "-100%", ease: "power2.out" });
    });
    target.addEventListener("mouseleave", () => {
      // onLeave action
      gsap.to(befTxt, { y: "0%", ease: "power2.out" });
      gsap.to(aftTxt, { y: "100%", ease: "power2.out" });
      gsap.to(result_txt, { y: "200%", ease: "power2.out" });
    });
    target.addEventListener("click", () => {
      // onClick action
      gsap.to(befTxt, { y: "-100%", ease: "power2.out" });
      gsap.to(aftTxt, { y: "-200%", ease: "power2.out" });
      gsap.to(result_txt, { y: "-200%", ease: "power2.out" });
    });
  };

  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-start overflow-hidden"
      onClick={onClick}
    >
      <div className="relative block w-full">
        <div
          id="txts"
          className={twMerge(
            "flex h-5 flex-col overflow-hidden font-orbitron text-xs tracking-widest text-white-200 sm:text-sm",
            className
          )}
        >
          <span id="bef_txt">{bef_txt}</span>
          <span id="aft_txt">{aft_txt}</span>
          <span id="result_txt">{result_txt}</span>
        </div>
      </div>
    </button>
  );
};
