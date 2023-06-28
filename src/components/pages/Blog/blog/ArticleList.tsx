import { Article } from "@/types/blog";
import Link from "next/link";

type Props = {
  blog: Article[];
};

export const ArticleList: React.FC<Props> = ({ blog }) => {
  return (
    <div>
      <div className="h-screen bg-black-200 pt-40 font-orbitron text-2xl tracking-wider text-white-200/70">
        <ul className="flex flex-col items-center justify-around gap-20">
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`/blog/${blog.id}`}
                className="duration-500 hover:text-3xl hover:text-white-200"
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
