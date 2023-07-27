import { Html, Head, Main, NextScript } from "next/document";

/*
 * htmlやbodyといったタグを拡張したコンポーネント
 */

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="m-0 overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
