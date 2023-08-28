import { AnimLinkButton } from "@/components/elements/Button";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Menu: React.FC<Props> = ({ onClick }) => {
  return (
    <div id="menu" className="min-h-screen bg-black-200 text-yellow-100">
      <button
        type="button"
        className="absolute right-10 top-7 cursor-pointer text-2xl sm:right-16"
        onClick={onClick}
      >
        ×
      </button>
      <div className="mx-auto flex h-full max-w-5xl items-center justify-center pt-16 text-5xl">
        <ul id="nav-link" className="space-y-4">
          <li>
            <AnimLinkButton
              href="/"
              className="w-[250px] font-march-evoked text-4xl tracking-widest group-hover:px-8 sm:text-4xl md:w-[550px] md:text-8xl"
            >
              <div className="flex items-center justify-between text-yellow-100">
                <div>HOME</div>
                <div className="-rotate-45 rounded-full text-yellow-100 duration-300 group-hover:rotate-0">
                  →
                </div>
              </div>
            </AnimLinkButton>
          </li>
          <hr />
          <li>
            <AnimLinkButton
              href="/about"
              className="w-[250px] font-march-evoked text-4xl tracking-widest group-hover:px-8 sm:text-4xl md:w-[550px] md:text-8xl"
            >
              <div className="flex items-center justify-between text-yellow-100">
                <div>ABOUT</div>
                <div className="-rotate-45 rounded-full text-yellow-100 duration-300 group-hover:rotate-0">
                  →
                </div>
              </div>
            </AnimLinkButton>
          </li>
          <hr />
          <li>
            <AnimLinkButton
              href="/blog/list"
              className="w-[250px] font-march-evoked text-4xl tracking-widest group-hover:px-8 sm:text-4xl md:w-[550px] md:text-8xl"
            >
              <div className="flex items-center justify-between text-yellow-100">
                <div>BLOG</div>
                <div className="-rotate-45 rounded-full text-yellow-100 duration-300 group-hover:rotate-0">
                  →
                </div>
              </div>
            </AnimLinkButton>
          </li>
          <hr />
          <li>
            <AnimLinkButton
              href="/archives"
              className="w-[250px] font-march-evoked text-4xl tracking-widest group-hover:px-8 sm:text-4xl md:w-[550px] md:text-8xl"
            >
              <div className="flex items-center justify-between text-yellow-100">
                <div>ARCH</div>
                <div className="-rotate-45 rounded-full text-yellow-100 duration-300 group-hover:rotate-0">
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
