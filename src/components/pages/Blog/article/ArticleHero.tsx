import { Article } from "@/types/blog";

type Props = {
  article: Article;
};

export const ArticleHero: React.FC<Props> = ({ article }) => {
  return (
    <div
      className="gradient-red-white mx-auto mt-12 flex
                h-fit w-4/5 flex-col items-center justify-center
                rounded-full py-4 text-white-200 md:py-8 lg:w-3/5"
    >
      <h1
        className="flex justify-center
                  text-[min(3vw,36px)] font-bold tracking-wide"
      >
        {article.title}
      </h1>
    </div>
  );
};
