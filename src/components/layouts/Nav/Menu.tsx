import { AnimLinkButton } from "@/components/elements/Button";

type Props = {
  menuRef: React.RefObject<HTMLUListElement>;
};

export const Menu: React.FC<Props> = ({ menuRef }) => {
  return (
    <ul
      className="absolute left-0 top-full z-0 h-0 w-full bg-black-400 opacity-0"
      ref={menuRef}
    >
      <li>
        <AnimLinkButton
          href="/"
          className="w-[250px] font-march-evoked text-4xl tracking-widest group-hover:px-8 sm:text-4xl md:w-[640px] md:text-9xl"
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
          className="w-[250px] font-march-evoked text-4xl tracking-widest group-hover:px-8 sm:text-4xl md:w-[640px] md:text-9xl"
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
          className="w-[250px] font-march-evoked text-4xl tracking-widest group-hover:px-8 sm:text-4xl md:w-[640px] md:text-9xl"
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
          className="w-[250px] font-march-evoked text-4xl tracking-widest group-hover:px-8 sm:text-4xl md:w-[640px] md:text-9xl"
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
  );
};
