import { useEffect } from "react";
import gsap from "gsap";
import { Header } from "../Header";

/** TODO:
 * Implement a cursor sticking effect when hovering.
 */

export const Navigator: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setAnimation();
    }
  }, []);

  const setAnimation = () => {
    const stagger = 0.05;
    gsap.fromTo(
      "#nav_btn #cover_rect",
      {
        x: "-100%",
      },
      {
        x: "100%",
        duration: 1.2,
        ease: "power3.inout",
        stagger,
      }
    );
    gsap.fromTo(
      "#nav_btn #nav_label",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        stagger,
      }
    );
  };

  return (
    <>
      <Header />
      {/* Hide this when screen size is reduced to sm */}
      <div
        className="invisible fixed bottom-4 z-10 mx-auto flex w-fit items-center justify-center rounded-full
                  border border-white-200 px-14 font-orbitron text-xs uppercase tracking-wide text-yellow-100 sm:visible sm:px-2"
      >
        <span className="text-base">©</span>
        2023 Yusuke Seki
      </div>
      {/* <Footer /> */}
    </>
  );
};

// const FOOTER_ITEMS = [
//   {
//     name: "BLOG",
//     href: "/blog/list",
//   },
//   {
//     name: "ARCH",
//     href: "/archives",
//   },
// ];

// export const Footer: React.FC = () => {
//   return (
//     <footer className="fixed bottom-8 z-10 flex w-screen items-center justify-between px-10 sm:px-16">
//       {FOOTER_ITEMS.map((item) => (
//         <ul key={item.name}>
//           <li className="relative inline-block overflow-hidden" id="nav_btn">
//             <span
//               id="cover_rect"
//               className="absolute block h-full w-full -translate-x-full bg-white-300 content-none"
//             ></span>
//             <span id="nav_label">
//               <LinkButton
//                 blank={false}
//                 className="before:absolute before:bottom-0 before:left-0 before:block before:h-[1px] before:w-full before:origin-top-left before:scale-x-0 before:bg-white-200 before:transition before:duration-1000 before:ease-in-out before:content-[''] before:hover:scale-x-100"
//                 href={item.href}
//                 text={item.name}
//               />
//             </span>
//           </li>
//         </ul>
//       ))}
//     </footer>
//   );
// };
