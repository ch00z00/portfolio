import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { LinkButton } from "@/components/elements/Button";

const HEADER_ITEMS = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
];

export const Header: React.FC = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      splitAnim();
    }
  }, []);

  const splitAnim = () => {};

  return (
    <header className="fixed top-14 z-10 flex w-screen items-center justify-between px-14 sm:px-24">
      {HEADER_ITEMS.map((item) => (
        <ul key={item.name}>
          <li ref={textRef}>
            <LinkButton href={item.href} text={item.name} />
          </li>
        </ul>
      ))}
    </header>
  );
};
