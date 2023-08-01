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
          <li>
            <LinkButton href={item.href} text={item.name} />
          </li>
        </ul>
      ))}
    </header>
  );
};
