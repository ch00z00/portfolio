import Link from "next/link";
import { twMerge } from "tailwind-merge";

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
        <Link
          id={id}
          href={href}
          className={twMerge(
            "relative font-orbitron text-xs tracking-widest text-white-200 sm:text-sm",
            className
          )}
        >
          {text}
        </Link>
      </button>
    </>
  );
};
