import clsx from "clsx";
import { MarqueeLinkButton } from "@/components/elements/Button";

type Props = {
  menuRef: React.RefObject<HTMLDivElement>;
  isMenuOpen: boolean;
};

export const Menu: React.FC<Props> = ({ menuRef, isMenuOpen }) => {
  return (
    <div
      ref={menuRef}
      className={clsx(
        "absolute top-full h-0 w-screen bg-yellow-100/95 opacity-0",
        isMenuOpen ? "visible" : "invisible"
      )}
    >
      <div className="flex flex-col items-center justify-center space-y-8 pt-20">
        <MarqueeLinkButton text="HOME" href="/" />
        <MarqueeLinkButton text="BLOG" href="/blog/list" />
        <MarqueeLinkButton text="ARCH" href="/archives" />
      </div>
    </div>
  );
};
