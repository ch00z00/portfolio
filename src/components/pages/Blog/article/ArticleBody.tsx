import { Article } from "@/types/blog";

type Props = {
  article: Article;
};

export const ArticleBody: React.FC<Props> = ({ article }) => {
  return (
    <>
      <div className="mx-auto h-fit w-2/3 overflow-hidden rounded-3xl bg-white-200/90 px-7 py-12 backdrop-blur-sm md:px-20 md:py-28">
        <div className="post">
          <div
            className="prose prose-sm font-orbitron tracking-wide md:prose-xl"
            dangerouslySetInnerHTML={{
              __html: `${article.body}`,
            }}
          />
        </div>
      </div>
    </>
  );
};
