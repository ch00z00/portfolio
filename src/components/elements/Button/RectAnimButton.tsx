import { useEffect } from "react";
import gsap from "gsap";
import { LinkButton } from "./LinkButton";

type RectAnimButtonProps = {
  text: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const RectAnimButton: React.FC<RectAnimButtonProps> = ({
  text,
  href,
  onClick,
}) => {
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
        duration: 1.2,
        ease: "power3.inout",
        stagger,
      }
    );
    gsap.fromTo(
      "#nav_btn #nav_label",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        stagger,
      }
    );
  };

  return (
    <div id="nav_btn" className="relative inline-block overflow-hidden">
      <span
        id="cover_rect"
        className="absolute block h-full w-full -translate-x-full bg-white-200 content-none"
      ></span>
      <span id="nav_label">
        <LinkButton
          blank={false}
          className="before:absolute before:bottom-0 before:left-0 before:block
                    before:h-[1px] before:w-full before:origin-top-left before:scale-x-0
                    before:bg-white-200 before:transition before:duration-1000
                    before:ease-in-out before:content-[''] before:hover:scale-x-100"
          text={text}
          href={href}
          onClick={onClick}
        />
      </span>
    </div>
  );
};
