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
        <meta charSet="UTF-8" />
        <meta name="description" content={DESCRIPTION.base} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600&family=Syne:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigator />
      {/* Set no margin & avoid over-scroll here. */}
      <main className="relative h-screen w-screen">{children}</main>
    </>
  );
};
