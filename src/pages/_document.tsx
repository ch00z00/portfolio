import { Html, Head, Main, NextScript } from "next/document";
// import { useEffect } from "react";
// import gsap from "gsap";

/*
 * Component that extend tags such as html and body
 */

/** TODO:
 * 🦄 [title]: Implement an slide in animation only once when loaded.
 * [items]: Implement a cursor sticking effect when hovering.
 */

export default function Document() {
  // useEffect(() => {
  //   cursorSralker();
  // }, []);

  // const cursorSralker = () => {
  //   gsap.set("#cursor", { xPercent: -50, yPercent: -50 });
  //   const cursor = document.getElementById("cursor");
  //   const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  //   const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  //   const speed = 1;

  //   const xSet = gsap.quickSetter(cursor, "x", "px");
  //   const ySet = gsap.quickSetter(cursor, "y", "px");

  //   window.addEventListener("mousemove", (e) => {
  //     mouse.x = e.x;
  //     mouse.y = e.y;
  //   });

  //   gsap.ticker.add(() => {
  //     // adjust speed for higher refresh monitors
  //     const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  //     pos.x += (mouse.x - pos.x) * dt;
  //     pos.y += (mouse.y - pos.y) * dt;
  //     xSet(pos.x);
  //     ySet(pos.y);
  //   });
  // };

  return (
    <Html lang="en">
      <Head />
      <body className="m-0 overflow-x-hidden overflow-y-scroll bg-black-100">
        <Main />
        <NextScript />
        {/* <div
          id="cursor"
          className="pointer-events-none fixed left-0 top-0 z-20 block h-8 w-8 rounded-full border-2 border-solid border-white-200"
        ></div> */}
      </body>
    </Html>
  );
}
