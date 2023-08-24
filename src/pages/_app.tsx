import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";

/*
 * 全ページを初期化するためのコンポーネント
 * 全ページで必要となる処理もここに記述する
 */

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
