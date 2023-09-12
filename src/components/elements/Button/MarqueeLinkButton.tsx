import React from "react";
import { twMerge } from "tailwind-merge";
import { BaseLink } from "../Link";

type Props = {
  text: string;
  href: string;
  blank?: boolean;
  className?: string;
};

export const MarqueeLinkButton: React.FC<Props> = ({
  text,
  href,
  blank,
  className,
}) => {
  return (
    <BaseLink
      href={href}
      blank={blank}
      className={twMerge(
        "group relative flex w-[min(80vw)] overflow-x-hidden bg-black-100 font-march-evoked text-[min(15vw,128px)] text-yellow-100 xl:w-[min(70vw)]",
        className
      )}
    >
      <div
        className="animate-marquee whitespace-nowrap py-[min(0.5vh)] duration-500
                group-hover:bg-orange-100 group-hover:text-black-100"
      >
        <span className="mx-8 group-hover:animate-pulse">{text}</span>
        <span className="mx-8 group-hover:animate-pulse">{text}</span>
        <span className="mx-8 group-hover:animate-pulse">{text}</span>
        <span className="mx-8 group-hover:animate-pulse">{text}</span>
      </div>

      <div
        className="absolute top-0 animate-marquee2 whitespace-nowrap py-[min(0.5vh)]
                  duration-500 group-hover:bg-orange-100 group-hover:text-black-100"
      >
        <span className="mx-8 group-hover:animate-pulse">{text}</span>
        <span className="mx-8 group-hover:animate-pulse">{text}</span>
        <span className="mx-8 group-hover:animate-pulse">{text}</span>
        <span className="mx-8 group-hover:animate-pulse">{text}</span>
      </div>
    </BaseLink>
  );
};
