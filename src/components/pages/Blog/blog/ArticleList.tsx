import { AnimLinkButton } from "@/components/elements/Button";
import { Article } from "@/types/blog";
import Link from "next/link";

type Props = {
  blog: Article[];
};

export const ArticleList: React.FC<Props> = ({ blog }) => {
  return (
    <div>
      <div className="h-screen w-screen bg-black-100 pt-40">
        <ul className="flex flex-col items-center justify-around gap-2">
          {blog.map((blog) => (
            <li key={blog.id}>
              <AnimLinkButton
                href={`/blog/${blog.id}`}
                className="font-neuropol"
              >
                <div className="flex items-center justify-between">
                  <div>{blog.title}</div>
                  <div className="rounded-full bg-black-200 px-3 text-white-200/70">
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
