import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { BaseLink } from "../Link";

type AnimLinkButtonProps = {
  id?: string;
  blank?: boolean;
  className?: string;
  href: string;
  children: ReactNode;
};

export const AnimLinkButton: React.FC<AnimLinkButtonProps> = ({
  id,
  blank,
  className,
  href,
  children,
}) => {
  return (
    <>
      <button
        type="button"
        className="inline-flex w-[300px] items-center overflow-hidden px-8 py-2 duration-200 hover:rounded-md hover:bg-white-100/20 hover:px-2 hover:text-white-200 sm:w-[500px]"
      >
        <BaseLink
          id={id}
          blank={blank}
          href={href}
          className={twMerge(
            "font-orbitron text-sm tracking-wider text-white-200/70 sm:text-2xl",
            className
          )}
        >
          {children}
        </BaseLink>
      </button>
    </>
  );
};
