import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Header } from "../Header";
import { Menu } from "./Menu";

export const Navigator: React.FC = () => {
  const hamRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const ham = hamRef.current;
    const menu = menuRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(menu, {
      duration: 0.7,
      opacity: 1,
      height: "100vh",
      ease: "power4.inout",
    });

    tl.reverse();

    const handleClick = () => {
      setIsMenuOpen((prevState) => !prevState);
      tl.reversed(!tl.reversed());
    };

    ham?.addEventListener("click", handleClick);

    return () => {
      ham?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 z-50 flex w-screen items-center justify-between
                bg-black-100/70 py-6 backdrop-blur"
    >
      <Header hamRef={hamRef} isMenuOpen={isMenuOpen} />
      <Menu menuRef={menuRef} isMenuOpen={isMenuOpen} />
    </nav>
  );
};
