import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Header } from "../Header";
import { Menu } from "./Menu";

export const Navigator: React.FC = () => {
  const hamRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const linksRef = useRef<NodeListOf<HTMLLIElement>>(null);

  useEffect(() => {
    const ham = hamRef.current;
    const menu = menuRef.current;
    const links = linksRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(menu, {
      duration: 1,
      opacity: 1,
      height: "100vh",
      ease: "power4.inout",
    });

    tl.from(
      links,
      {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "power4.inout",
      },
      "-=0.5"
    );

    tl.reverse();

    ham?.addEventListener("click", () => {
      tl.reversed(!tl.reversed());
    });
  }, []);

  return (
    <nav className="fixed top-8 z-10 flex w-screen items-center justify-between px-10 sm:px-16">
      <Header hamRef={hamRef} />
      <Menu menuRef={menuRef} />
    </nav>
  );
};
