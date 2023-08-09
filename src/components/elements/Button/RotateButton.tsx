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
    const bef_txt = document.querySelector("#bef_txt");
    const aft_txt = document.querySelector("#aft_txt");
    const btn = document.querySelector("#btn");

    gsap
      .timeline({
        paused: true,
      })
      .to("#btn", {
        background: "#1C1D1D",
      })
      .to(
        "#txts",
        {
          yPercent: 0,
        },
        "<"
      );

    /* spanタグに分割 */
    const target = document.querySelector("#txts");
    if (target === null) return;
    /* ターゲットにホバーした時の動き */
    const befTxt = target.querySelector("#bef_txt");
    const aftTxt = target.querySelector("#aft_txt");
    target.addEventListener("mouseenter", () => {
      //ホバーしたとき
      gsap.to(befTxt, { y: "-100%", ease: "power2.out" });
      gsap.to(aftTxt, { y: "-100%", ease: "power2.out" });
    });
    target.addEventListener("mouseleave", () => {
      //ホバーが外れたとき
      gsap.to(befTxt, { y: "0%", ease: "power2.out" });
      gsap.to(aftTxt, { y: "100%", ease: "power2.out" });
    });
  };

  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-start overflow-hidden"
    >
      <Link href={href} className={twMerge("relative block w-full", className)}>
        <div
          id="txts"
          className="flex h-4 flex-col overflow-hidden font-orbitron text-xs tracking-widest text-white-200 sm:text-sm"
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
