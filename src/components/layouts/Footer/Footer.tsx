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
          <li>
            <LinkButton href={item.href} text={item.name} />
          </li>
        </ul>
      ))}
    </footer>
  );
};
