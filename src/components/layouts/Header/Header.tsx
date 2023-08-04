import { LinkButton } from "@/components/elements/Button";

const HEADER_ITEMS = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
];

export const Header: React.FC = () => {
  return (
    <header className="fixed top-14 z-10 flex w-screen items-center justify-between px-14 sm:px-24">
      {HEADER_ITEMS.map((item) => (
        <ul key={item.name}>
          <li className="relative inline-block overflow-hidden" id="nav_btn">
            <span
              id="cover_rect"
              className="absolute block h-full w-full -translate-x-full bg-white-200 content-none"
            ></span>
            <span id="nav_label">
              <LinkButton href={item.href} text={item.name} />
            </span>
          </li>
        </ul>
      ))}
    </header>
  );
};
