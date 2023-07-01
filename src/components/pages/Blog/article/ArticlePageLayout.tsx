import Head from "next/head";
import { ReactNode } from "react";
import { Navigator } from "@/components/layouts/Nav";
import { DESCRIPTION } from "@/const";
import { Article } from "@/types/blog";
import { ArticleHero } from "./ArticleHero";
import { ArticleBody } from "./ArticleBody";
import { ArticleNum } from "./ArticleNum";
import { ArticleSidebar } from "./ArticleSidebar";

type Props = {
  title?: string;
  className?: string;
  children?: ReactNode;
  article: Article;
};

export const ArticlePageLayout: React.FC<Props> = ({
  title,
  children,
  className,
  article,
  ...props
}) => {
  const blog_title: string = `| Blog - ${article.title}`;
  return (
    <>
      <Head>
        <title>Yusuke Seki {blog_title}</title>
        <meta name="description" content={DESCRIPTION.blog} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600&family=Syne:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigator />
      <div className="flex flex-col bg-black-100 pb-40 pt-20">
        <ArticleHero article={article} />
        <div className="mt-12 flex flex-row">
          <ArticleNum article={article} />
          <ArticleBody article={article} />
          {/* <ArticleSidebar article={article} /> */}
        </div>
      </div>
    </>
  );
};
