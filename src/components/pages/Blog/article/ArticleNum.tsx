import { Article } from "@/types/blog";

type Props = {
  article: Article;
};

export const ArticleNum: React.FC<Props> = ({ article }) => {
  return (
    <div className="fixed ml-[6%] flex h-60 items-center justify-center rounded-3xl text-white-200">
      <h1 className="-rotate-90 transform font-orbitron text-3xl font-bold">
        1 / 3
      </h1>
    </div>
  );
};
