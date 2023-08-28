import { AnimLinkButton } from "@/components/elements/Button";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Menu: React.FC<Props> = ({ onClick }) => {
  return (
    <div id="menu" className="z-20 min-h-screen bg-black-400 text-yellow-100">
      <button
        type="button"
        className="absolute right-16 top-7 cursor-pointer text-2xl"
        onClick={onClick}
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
  );
};
