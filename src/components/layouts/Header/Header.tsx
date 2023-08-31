import { RectAnimButton } from "@/components/elements/Button";

type HeaderProps = {
  hamRef: React.RefObject<HTMLDivElement>;
  isMenuOpen: boolean;
};

export const Header: React.FC<HeaderProps> = ({ hamRef, isMenuOpen }) => {
  return (
    <div className="flex h-full w-screen items-center justify-between px-10 sm:px-16">
      <RectAnimButton text="HOME" href="/" />
      <div
        className="invisible flex w-fit items-center
                  justify-center rounded-full border px-4 text-xs
                  tracking-wide text-yellow-100 sm:visible"
      >
        <span className="text-sm">©</span>
        2023 YUSUKE SEKI
      </div>
      <div ref={hamRef}>
        <span className="cursor-pointer text-2xl text-white-200">
          {isMenuOpen ? "X" : "☰"}
        </span>
      </div>
    </div>
  );
};
