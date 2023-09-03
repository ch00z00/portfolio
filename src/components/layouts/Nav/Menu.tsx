import { AnimLinkButton } from "@/components/elements/Button";
import { MarqueeText } from "@/components/elements/Text";

/* TODO: [priority: high] Implement animation of items.
 * 1. Static when it isn't hovered
 * 2. Horizontal scrolling item when hovered
 */

type Props = {
  menuRef: React.RefObject<HTMLDivElement>;
};

export const Menu: React.FC<Props> = ({ menuRef }) => {
  return (
    <div
      ref={menuRef}
      className="absolute top-full h-0 w-screen bg-yellow-100/95 opacity-0"
    >
      <div className="flex flex-col items-center justify-center space-y-8 pt-20">
        <MarqueeText text="HOME" href="/" />
        <MarqueeText text="BLOG" href="/blog/list" />
        <MarqueeText text="ARCH" href="/archives" />
      </div>
    </div>
  );
};
