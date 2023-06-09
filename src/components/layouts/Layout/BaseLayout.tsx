import Head from "next/head";
import { ReactNode } from "react";
import { Navigator } from "../Nav";
import { DESCRIPTION } from "@/const";

type BaseLayoutProps = {
  title?: string;
  className?: string;
  children?: ReactNode;
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <>
      <Head>
        <title>Yusuke Seki {title}</title>
        <meta name="description" content={DESCRIPTION.base} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600&family=Syne:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigator />
      <main className="relative h-screen w-screen">{children}</main>
    </>
  );
};
