import { twMerge } from "tailwind-merge";
import { BaseLink } from "../Link";

type LinkButtonProps = {
  id?: string;
  blank?: boolean;
  className?: string;
  text: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  id,
  blank,
  className,
  text,
  href,
  onClick,
}) => {
  return (
    <>
      <button
        type="button"
        className="relative inline-flex items-center justify-start overflow-hidden"
        onClick={onClick}
      >
        <BaseLink
          id={id}
          blank={blank}
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
