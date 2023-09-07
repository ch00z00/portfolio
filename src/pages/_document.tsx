import { Html, Head, Main, NextScript } from "next/document";

/*
 * Component that extend tags such as html and body
 */

/** TODO:
 * [priority-middle]: Implement a cursor sticking effect when hovering.
 */

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="m-0 overflow-x-hidden overflow-y-scroll scroll-smooth bg-black-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
