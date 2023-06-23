import { Article } from "@/types/blog";
import Link from "next/link";

type Props = {
  blog: Article[];
};

export const ArticleList: React.FC<Props> = ({ blog }) => {
  return (
    <div>
      <div className="bg-black-200 py-20 text-white-100">
        <ul className="flex flex-row items-center justify-around">
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`/blog/${blog.id}`}
                className="duration-300 hover:text-red-100"
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
