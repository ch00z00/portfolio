import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-24 py-4 bg-black text-white">
        <div className=" text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <Link href="/" className="hover:underline">
            choozoo
          </Link>
        </div>
        <nav>
          <ul className="flex gap-12">
            <li>
              <Link href="/" className="hover:underline">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/archives" className="hover:underline">
                ARCHIVES
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
