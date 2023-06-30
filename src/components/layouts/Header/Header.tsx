import { LinkButton } from "@/components/elements/Card";
import Link from "next/link";

type HeaderProps = {
  isActive: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isActive }) => {
  return (
    <header>
      <div className="fixed top-0 z-10 flex w-screen items-center justify-between px-14 py-6 text-white-200">
        <div className="font-syne text-2xl font-medium duration-500 hover:text-black-200">
          <Link href="/">Miniature</Link>
        </div>
        <nav>
          <ul className="flex gap-7 font-orbitron">
            <li>
              <LinkButton href={"/"} text={"HOME"} />
            </li>
            {/* <li>
              <LinkButton href={"/blog/list"} text={"BLOG"} />
            </li>
            <li>
              <LinkButton href={"/archives"} text={"ARCHIVES"} />
            </li> */}
            <li>
              <LinkButton href={"/about"} text={"ABOUT"} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
