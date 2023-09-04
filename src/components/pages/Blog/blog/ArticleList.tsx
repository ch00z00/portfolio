import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { AnimLinkButton } from "@/components/elements/Button";
import { Article } from "@/types/blog";

type Props = {
  blog: Article[];
};

export const ArticleList: React.FC<Props> = ({ blog }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const stagger = 0.4;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#article",
            start: "top 70%",
            toggleActions: "play none none reset",
          },
        })
        .fromTo(
          "#article",
          { alpha: 0, x: -35 },
          {
            alpha: 1,
            x: 0,
            duration: 1,
            stagger,
          },
          "<"
        );
    }
  }, []);

  return (
    <div>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black-100">
        <ul>
          {blog.map((blog) => (
            <li id="article" key={blog.id} className="group">
              <AnimLinkButton
                href={`/blog/${blog.id}`}
                className="w-[min(80vw)] py-4 font-neuropol text-lg group-hover:px-0 md:group-hover:px-4 lg:w-[min(70vw)] xl:text-3xl"
              >
                <div className="flex flex-col items-center justify-between space-y-2 md:flex-row">
                  <div>{blog.title}</div>
                  <div className="rounded-full bg-black-200 px-3 text-white-200">
                    →
                  </div>
                </div>
              </AnimLinkButton>
              <hr className="mx-auto w-[min(80vw)] text-white-100/30 group-hover:invisible lg:w-[min(70vw)]" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
