import { twMerge } from "tailwind-merge";
import { BaseLink } from "../Link";

type LinkButtonProps = {
  id?: string;
  className?: string;
  href: string;
  text: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  id,
  className,
  href,
  text,
}) => {
  return (
    <>
      <button
        type="button"
        className="relative inline-flex items-center justify-start overflow-hidden"
      >
        <BaseLink
          id={id}
          blank={true}
          href={href}
          className={twMerge(
            "relative font-orbitron text-xs tracking-widest text-white-200 sm:text-sm",
            className
          )}
        >
          {text}
        </BaseLink>
      </button>
    </>
  );
};
