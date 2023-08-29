import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Header } from "../Header";
import { Menu } from "./Menu";

export const Navigator: React.FC = () => {
  const hamRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const linksRef = useRef<NodeListOf<HTMLLIElement>>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const ham = hamRef.current;
    const menu = menuRef.current;
    const links = linksRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(menu, {
      duration: 0.7,
      opacity: 1,
      height: "100vh",
      ease: "power4.inout",
    });

    tl.from(
      links,
      {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "power4.inout",
      },
      "<"
    );

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
    <nav className="fixed top-8 z-10 flex w-screen items-center justify-between px-10 sm:px-16">
      <Header hamRef={hamRef} isMenuOpen={isMenuOpen} />
      <Menu menuRef={menuRef} />
    </nav>
  );
};
