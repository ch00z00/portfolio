import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { client } from "@/libs/client";
import { Article } from "@/types/blog";
import { ArticlePageLayout } from "@/components/pages/Blog";

type Props = {
  article: Article;
};

const ArticlePage: NextPage<Props> = ({ article }) => {
  console.log(article)
  return (
    <>
      <ArticlePageLayout article={article} />
    </>
  );
};

export default ArticlePage;

// Set path for the article
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: Article) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// Fetch each article
export const getStaticProps: GetStaticProps<Props> = async (
  ctx: GetStaticPropsContext
) => {
  if (ctx && ctx.params != undefined) {
    const id = ctx.params.id;
    const data: Article = await client.get({ endpoint: "blog", contentId: id });
    return {
      props: {
        article: data,
      },
    };
  }
};
