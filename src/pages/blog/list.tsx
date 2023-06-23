import type { GetStaticProps, NextPage } from "next";
import { client } from "../../libs/client";
import { Article } from "@/types/blog";
import { BaseLayout } from "@/components/layouts/Layout";
import { BlogPageLayout } from "@/components/pages/Blog/blog";

type Props = {
  blog: Article[];
};

const BlogPage: NextPage<Props> = ({ blog }) => {
  return (
    <BaseLayout title="| Blog">
      <BlogPageLayout blog={blog} />
    </BaseLayout>
  );
};

export default BlogPage;

/*
 * Fetch blog article list
 */
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: [...data.contents].reverse(),
    },
  };
};
