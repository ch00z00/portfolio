import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Header } from "../Header";
import { Menu } from "./Menu";

export const Navigator: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    if (isOpen) {
      handleMenuClose();
      if (tl.current) {
        tl.current.timeScale(3);
        tl.current.reverse();
      }
    } else {
      handleMenuOpen();
      if (tl.current) {
        tl.current.play().timeScale(1);
      }
    }
  };

  const menuRef = useRef<HTMLDivElement | null>(null);
  const navLinkRef = useRef<HTMLUListElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    if (menuRef.current && navLinkRef.current) {
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
            ease: "power2.inOut",
          }
        )
        .fromTo(
          navLinkRef.current.querySelectorAll(".nav-link"),
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

  return (
    <>
      {!isOpen ? <Header toggleMenu={toggleMenu} /> : null}
      {/* Show this when screen size is reduced to sm */}
      <div
        className="visible fixed bottom-4 z-10 flex w-fit items-center justify-center
                      rounded-full border px-2 text-xs tracking-wide
                      text-yellow-100 sm:invisible"
      >
        <span className="text-sm">©</span>
        2023 YUSUKE SEKI
      </div>
      {isOpen ? (
        <Menu
          toggleMenu={toggleMenu}
          menuRef={menuRef}
          navLinkRef={navLinkRef}
        />
      ) : null}
    </>
  );
};
