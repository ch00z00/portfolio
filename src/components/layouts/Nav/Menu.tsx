import clsx from "clsx";
import { MarqueeLinkButton } from "@/components/elements/Button";

type Props = {
  menuRef: React.RefObject<HTMLDivElement>;
  isMenuOpen?: boolean;
};

export const Menu: React.FC<Props> = ({ menuRef, isMenuOpen }) => {
  return (
    <div
      ref={menuRef}
      className="absolute top-full h-0 w-screen bg-yellow-100 opacity-0"
    >
      <div
        className={clsx(
          "flex flex-col items-center justify-center space-y-8 pt-[7vh]",
          isMenuOpen ? "visible" : "invisible duration-700"
        )}
      >
        <MarqueeLinkButton text="HOME" href="/" />
        <MarqueeLinkButton text="BLOG" href="/blog/list" />
        <MarqueeLinkButton text="ARCH" href="/archives" />
      </div>
    </div>
  );
};
