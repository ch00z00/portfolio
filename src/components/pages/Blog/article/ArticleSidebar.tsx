import { Article } from "@/types/blog";

type Props = {
  article: Article;
};

export const ArticleSidebar: React.FC<Props> = ({ article }) => {
  return (
    <div className="fixed ml-[90%] flex h-60 items-center justify-center rounded-3xl text-black-200">
      <h1 className="-rotate-90 transform font-orbitron text-3xl font-bold">
        1 / 3
      </h1>
    </div>
  );
};
