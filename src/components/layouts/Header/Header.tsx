import { LinkButton } from "@/components/elements/Button";

const HEADER_ITEMS = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "MENU",
    href: "/about",
  },
];

export const Header: React.FC = () => {
  return (
    <header className="fixed top-8 z-10 flex w-screen items-center justify-between px-10 sm:px-16">
      {HEADER_ITEMS.map((item) => (
        <ul key={item.name}>
          <li id="nav_btn" className="relative inline-block overflow-hidden">
            <span
              id="cover_rect"
              className="absolute block h-full w-full -translate-x-full bg-white-200 content-none"
            ></span>
            <span id="nav_label">
              <LinkButton
                blank={false}
                className="before:absolute before:bottom-0 before:left-0 before:block before:h-[1px] before:w-full
                          before:origin-top-left before:scale-x-0 before:bg-white-200 before:transition
                          before:duration-1000 before:ease-in-out before:content-[''] before:hover:scale-x-100"
                href={item.href}
                text={item.name}
              />
            </span>
          </li>
        </ul>
      ))}
    </header>
  );
};
