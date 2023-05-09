import { CONTACT_ADDRESS, GITHUB_LINK } from "@/const";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      <div className="w-full max-w-screen-xl mx-auto pt-32">
        <hr className="pt-16 mx-auto border-gray-400" />
        <span className="flex px-16 gap-14 justify-between text-sm text-gray-500 sm:text-center dark:text-gray-400 pb-16">
          © 2023
          <div className="flex gap-9">
            <Link href="/" className="hover:underline">
              HOME
            </Link>
            <Link href="/blog" className="hover:underline">
              BLOG
            </Link>
            <Link href="/archives" className="hover:underline">
              ARCHIVES
            </Link>
          </div>
          <Link href={GITHUB_LINK} target="blank" className="hover:underline">
            GitHub
          </Link>
          <div>
            CONTACT : {""}
            <span className="hover:underline">{CONTACT_ADDRESS}</span>
          </div>
        </span>
      </div>
    </footer>
  );
};
