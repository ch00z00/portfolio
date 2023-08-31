import { AnimLinkButton } from "@/components/elements/Button";

/* TODO: [priority: high] Implement animation of items.
 * 1. Horizontal scrolling item
 * 2. Hover: stop
 */

type Props = {
  menuRef: React.RefObject<HTMLDivElement>;
};

export const Menu: React.FC<Props> = ({ menuRef }) => {
  return (
    <div
      ref={menuRef}
      className="absolute top-full z-50 h-0 w-screen bg-red-100/95 opacity-0"
    >
      <ul className="flex flex-col items-center justify-center pt-20">
        <li>
          <AnimLinkButton
            href="/"
            className="w-[250px] font-march-evoked tracking-widest group-hover:px-8 md:w-[640px]"
          >
            <div className="flex items-center justify-between text-yellow-100">
              <div>HOME</div>
              <div className="-rotate-45 rounded-full text-yellow-100 duration-300 group-hover:rotate-0">
                →
              </div>
            </div>
          </AnimLinkButton>
        </li>
        <hr className="w-[250px] text-yellow-100 md:w-[640px]" />
        <li>
          <AnimLinkButton
            href="/about"
            className="w-[250px] font-march-evoked tracking-widest group-hover:px-8 md:w-[640px]"
          >
            <div className="flex items-center justify-between text-yellow-100">
              <div>ABOUT</div>
              <div className="-rotate-45 rounded-full text-yellow-100 duration-300 group-hover:rotate-0">
                →
              </div>
            </div>
          </AnimLinkButton>
        </li>
        <hr className="w-[250px] text-yellow-100 md:w-[640px]" />
        <li>
          <AnimLinkButton
            href="/blog/list"
            className="w-[250px] font-march-evoked tracking-widest group-hover:px-8 md:w-[640px]"
          >
            <div className="flex items-center justify-between text-yellow-100">
              <div>BLOG</div>
              <div className="-rotate-45 rounded-full text-yellow-100 duration-300 group-hover:rotate-0">
                →
              </div>
            </div>
          </AnimLinkButton>
        </li>
        <hr className="w-[250px] text-yellow-100 md:w-[640px]" />
        <li>
          <AnimLinkButton
            href="/archives"
            className="w-[250px] font-march-evoked tracking-widest group-hover:px-8 md:w-[640px]"
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
  );
};
