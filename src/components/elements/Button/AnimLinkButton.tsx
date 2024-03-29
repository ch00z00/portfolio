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
        className="group inline-flex items-center
                  overflow-hidden duration-200
                  hover:rounded-md hover:bg-white-100/20"
      >
        <BaseLink
          id={id}
          blank={blank}
          href={href}
          className={twMerge(
            "font-orbitron text-[min(13vw,100px)] tracking-wider text-white-200 duration-200 group-hover:px-4",
            className
          )}
        >
          {children}
        </BaseLink>
      </button>
    </>
  );
};
