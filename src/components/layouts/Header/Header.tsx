import { RectAnimButton } from "@/components/elements/Button";

type HeaderProps = {
  hamRef: React.RefObject<HTMLDivElement>;
};

export const Header: React.FC<HeaderProps> = ({ hamRef }) => {
  return (
    <div className="flex h-full w-screen items-center justify-between">
      <RectAnimButton text="HOME" href="/" />
      <div
        className="invisible flex w-fit items-center
                      justify-center rounded-full border px-2 text-xs
                      tracking-wide text-yellow-100 sm:visible"
      >
        <span className="text-sm">©</span>
        2023 YUSUKE SEKI
      </div>
      <div className="ham" ref={hamRef}>
        <span className="cursor-pointer text-2xl text-white-100">☰</span>
      </div>
    </div>
  );
};
