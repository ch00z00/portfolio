import { LinkButton } from "@/components/elements/Card";
import Link from "next/link";

type HeaderProps = {
  isActive: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isActive }) => {
  return (
    <header>
      <div className="fixed top-0 z-10 flex w-screen items-center justify-between bg-white-100 px-24 py-6 text-black-200">
        <div className="text-transparent font-syne text-3xl font-medium">
          <Link href="/">Miniature</Link>
        </div>
        <nav>
          <ul className="flex gap-7">
            <li>
              <LinkButton href={"/"} text={"HOME"} />
            </li>
            <li>
              <LinkButton href={"/blog/list"} text={"BLOG"} />
            </li>
            <li>
              <LinkButton href={"/archives"} text={"ARCHIVES"} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
