import { MarqueeLinkButton } from "@/components/elements/Button";

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
        <MarqueeLinkButton text="HOME" href="/" />
        <MarqueeLinkButton text="BLOG" href="/blog/list" />
        <MarqueeLinkButton text="ARCH" href="/archives" />
      </div>
    </div>
  );
};
