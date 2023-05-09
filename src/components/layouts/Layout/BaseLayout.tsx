import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "../Header";

type BaseLayoutProps = {
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  title = "choozoo",
  description,
  children,
  className,
  ...props
}) => {
  return (
    <>
      <Head>
        <title>choozoo {title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};
