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
      slideInAnim();
    }
  }, []);

  const slideInAnim = () => {
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
  };

  return (
    <div>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black-100">
        <ul>
          {blog.map((blog) => (
            <li id="article" key={blog.id} className="group">
              <AnimLinkButton
                href={`/blog/${blog.id}`}
                className="w-[300px] font-neuropol sm:w-[500px]"
              >
                <div className="flex items-center justify-between">
                  <div>{blog.title}</div>
                  <div className="rounded-full bg-black-200 px-3 text-white-200">
                    →
                  </div>
                </div>
              </AnimLinkButton>
              <hr className="mx-auto w-full text-white-100/30 group-hover:invisible" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
