import { RectAnimButton } from "@/components/elements/Button";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Header: React.FC<Props> = ({ onClick }) => {
  return (
    <header className="fixed top-8 z-10 flex w-screen items-center justify-between px-10 sm:px-16">
      <RectAnimButton text="HOME" href="/" />
      {/* Hide this when screen size is reduced to sm */}
      <div
        className="invisible flex w-fit items-center justify-center
                      rounded-full border px-2 text-xs
                      tracking-wide text-yellow-100 sm:visible"
      >
        <span className="text-sm">©</span>
        2023 YUSUKE SEKI
      </div>
      <button
        type="button"
        className="font-orbitron text-xs text-white-100 sm:text-sm"
        onClick={onClick}
      >
        MENU
      </button>
    </header>
  );
};
