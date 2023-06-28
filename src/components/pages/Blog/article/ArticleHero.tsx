import { Article } from "@/types/blog";

type Props = {
  article: Article;
};

export const ArticleHero: React.FC<Props> = ({ article }) => {
  return (
    <div className="gradient-red-white mx-auto mt-16 flex h-fit w-3/4 flex-col items-center justify-center rounded-full py-12 text-white-200 md:w-4/5">
      <h1 className="flex justify-center font-orbitron text-5xl font-bold">
        {article.title}
      </h1>
    </div>
  );
};
