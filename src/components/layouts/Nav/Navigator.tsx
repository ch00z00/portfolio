import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Header } from "../Header";
import { Menu } from "./Menu";

export const Navigator: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navLinksRef = useRef<HTMLElement[] | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      tl.current = gsap.timeline({ paused: true });

      tl.current
        .fromTo(
          menuRef.current,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
            top: 0,
            ease: "power2.inout",
          }
        )
        .fromTo(
          navLinksRef.current,
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.3,
          }
        );
    }
  }, []);

  const handleOpenMenu = () => {
    setIsOpen(true);
    tl.current?.play().timeScale(1);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    tl.current?.timeScale(3);
    tl.current?.reverse();
  };

  return (
    <>
      {!isOpen ? <Header onClick={handleOpenMenu} /> : null}
      {/* Show this when screen size is reduced to sm */}
      <div
        className="visible fixed bottom-4 z-10 flex w-fit items-center justify-center
                      rounded-full border px-2 text-xs tracking-wide
                      text-yellow-100 sm:invisible"
      >
        <span className="text-sm">©</span>
        2023 YUSUKE SEKI
      </div>
      {isOpen ? <Menu onClick={handleCloseMenu} /> : null}
    </>
  );
};
