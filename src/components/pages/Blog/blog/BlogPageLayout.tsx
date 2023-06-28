import { Article } from "@/types/blog";
import { ArticleList } from "./ArticleList";
import { BlogHero } from "./BlogHero";

type Props = {
  blog: Article[];
};

export const BlogPageLayout: React.FC<Props> = ({ blog }) => {
  return (
    <>
      <BlogHero />
      <ArticleList blog={blog} />
    </>
  );
};
