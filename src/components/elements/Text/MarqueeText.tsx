import React from "react";
import { twMerge } from "tailwind-merge";
import { BaseLink } from "../Link";

type Props = {
  text: string;
  href: string;
  blank?: boolean;
  className?: string;
};

export const MarqueeText: React.FC<Props> = ({
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
        "relative flex w-[min(70vw)] overflow-x-hidden bg-black-100 font-march-evoked text-9xl text-yellow-100",
        className
      )}
    >
      <div className="animate-marquee whitespace-nowrap py-4">
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4">
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </div>
    </BaseLink>
  );
};
