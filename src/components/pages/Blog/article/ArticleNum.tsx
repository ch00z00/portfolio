import { Article } from "@/types/blog";

type Props = {
  article: Article;
};

export const ArticleNum: React.FC<Props> = ({ article }) => {
  return (
    <div className="fixed ml-[3%] flex h-60 items-center justify-center rounded-3xl text-white-200 sm:ml-[6%]">
      <h1 className="-rotate-90 transform font-orbitron text-lg font-bold md:text-3xl">
        1 / 3
      </h1>
    </div>
  );
};
