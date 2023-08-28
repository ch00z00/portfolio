import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AnimLinkButton } from "@/components/elements/Button";
import { Header } from "../Header";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Navigator: React.FC<Props> = ({ onClick }) => {
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
                      rounded-full border px-2 font-orbitron text-xs tracking-wide
                      text-yellow-100 sm:invisible"
      >
        <span className="text-base">©</span>
        2023 YUSUKE SEKI
      </div>
      {isOpen ? (
        <div
          id="menu"
          className="z-20 min-h-screen bg-black-400 text-yellow-100"
        >
          <button
            type="button"
            className="absolute right-16 top-7 cursor-pointer text-2xl"
            onClick={handleCloseMenu}
          >
            ×
          </button>
          <div className="mx-auto flex h-full max-w-5xl items-center text-5xl font-extrabold">
            <ul id="nav-link" className="space-y-4">
              <li className="text-lg">
                <AnimLinkButton
                  href="/"
                  className="w-[300px] font-neuropol sm:w-[450px]"
                >
                  <div className="flex items-center justify-between text-yellow-100">
                    <div>HOME</div>
                    <div className="rounded-full bg-black-200 px-3 text-white-200">
                      →
                    </div>
                  </div>
                </AnimLinkButton>
              </li>
              <li className="text-lg">
                <AnimLinkButton
                  href="/about"
                  className="w-[300px] font-neuropol sm:w-[450px]"
                >
                  <div className="flex items-center justify-between text-yellow-100">
                    <div>ABOUT</div>
                    <div className="rounded-full bg-black-200 px-3 text-white-200">
                      →
                    </div>
                  </div>
                </AnimLinkButton>
              </li>
              <li className="text-lg">
                <AnimLinkButton
                  href="/blog/list"
                  className="w-[300px] font-neuropol sm:w-[450px]"
                >
                  <div className="flex items-center justify-between text-yellow-100">
                    <div>BLOG</div>
                    <div className="rounded-full bg-black-200 px-3 text-white-200">
                      →
                    </div>
                  </div>
                </AnimLinkButton>
              </li>
              <li className="text-lg">
                <AnimLinkButton
                  href="/archives"
                  className="w-[300px] font-neuropol sm:w-[450px]"
                >
                  <div className="flex items-center justify-between text-yellow-100">
                    <div>ARCH</div>
                    <div className="rounded-full bg-black-200 px-3 text-white-200">
                      →
                    </div>
                  </div>
                </AnimLinkButton>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};
