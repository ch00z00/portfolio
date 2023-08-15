import { AnimLinkButton } from "@/components/elements/Button";
import { Article } from "@/types/blog";
import Link from "next/link";

type Props = {
  blog: Article[];
};

export const ArticleList: React.FC<Props> = ({ blog }) => {
  return (
    <div>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black-100">
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <AnimLinkButton
                href={`/blog/${blog.id}`}
                className="w-[300px] font-neuropol sm:w-[500px]"
              >
                <div className="flex items-center justify-between">
                  <div>{blog.title}</div>
                  <div className="rounded-full bg-black-200 px-3 text-white-200">
                    →
                  </div>
                </div>
              </AnimLinkButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
