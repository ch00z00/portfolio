import { useEffect } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

type Props = {
  className?: string;
  href: string;
  bef_txt: string;
  aft_txt: string;
};

export const RotateButton: React.FC<Props> = ({
  className,
  href,
  bef_txt,
  aft_txt,
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
    /* Roll action */
    const befTxt = target.querySelector("#bef_txt");
    const aftTxt = target.querySelector("#aft_txt");
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
    >
      <Link href={href} className="relative block w-full">
        <div
          id="txts"
          className={twMerge(
            "flex h-5 flex-col overflow-hidden font-orbitron text-xs tracking-widest text-white-200 sm:text-sm",
            className
          )}
        >
          <span id="bef_txt" className="">
            {bef_txt}
          </span>
          <span id="aft_txt" className="">
            {aft_txt}
          </span>
        </div>
      </Link>
    </button>
  );
};
