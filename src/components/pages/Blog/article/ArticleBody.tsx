import { Article } from "@/types/blog";

type Props = {
  article: Article;
};

export const ArticleBody: React.FC<Props> = ({ article }) => {
  return (
    <>
      <div className="mx-auto h-fit w-2/3 rounded-3xl bg-white-200 px-20 py-28">
        <div className="post">
          <div
            className="prose prose-xl font-orbitron tracking-wide"
            dangerouslySetInnerHTML={{
              __html: `${article.body}`,
            }}
          />
        </div>
      </div>
    </>
  );
};
