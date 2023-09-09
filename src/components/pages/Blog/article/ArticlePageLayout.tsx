import Head from "next/head";
import { ReactNode } from "react";
import { Navigator } from "@/components/layouts/Nav";
import { DESCRIPTION } from "@/const";
import { Article } from "@/types/blog";
import { ArticleHero } from "./ArticleHero";
import { ArticleBody } from "./ArticleBody";
import { ArticleSidebar } from "./ArticleSidebar";
import { ScrollButton } from "@/components/elements/Button";

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
        <meta charSet="UTF-8" />
        <meta name="description" content={DESCRIPTION.blog} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600&family=Syne:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigator />
      <div className="flex flex-col bg-black-100 pb-40 pt-20">
        <ArticleHero article={article} />
        <div className="mt-6 flex flex-row md:mt-12">
          <ArticleBody article={article} />
          {/* <ArticleSidebar article={article} /> */}
        </div>
        <div className="fixed bottom-10 right-4 z-10 sm:right-14">
          <ScrollButton />
        </div>
      </div>
    </>
  );
};
