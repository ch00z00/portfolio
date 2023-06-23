import { Article } from "@/types/blog";

type Props = {
  article: Article;
};

export const ArticleBody: React.FC<Props> = ({ article }) => {
  return (
    <>
      <div className="mx-auto h-fit w-2/3 rounded-3xl bg-white-100 px-20 py-28">
        <div>
          <div
            className="prose-xl"
            dangerouslySetInnerHTML={{
              __html: `${article.body}`,
            }}
          />
        </div>
      </div>
    </>
  );
};
