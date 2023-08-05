import { LinkButton } from "@/components/elements/Button";

const FOOTER_ITEMS = [
  {
    name: "BLOG",
    href: "/blog/list",
  },
  {
    name: "ARCH",
    href: "/archives",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-14 z-10 flex w-screen items-center justify-between px-14 sm:px-24">
      {FOOTER_ITEMS.map((item) => (
        <ul key={item.name}>
          <li className="relative inline-block overflow-hidden" id="nav_btn">
            <span
              id="cover_rect"
              className="absolute block h-full w-full -translate-x-full bg-white-300 content-none"
            ></span>
            <span id="nav_label">
              <LinkButton href={item.href} text={item.name} />
            </span>
          </li>
        </ul>
      ))}
    </footer>
  );
};
