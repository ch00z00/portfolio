import clsx from "clsx";
import Link from "next/link";

// TODO: bg-whiteでtext-black-200にする

type LinkButtonProps = {
  href: string;
  text: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <>
      <button
        type="button"
        className="relative inline-flex items-center justify-start overflow-hidden"
      >
        <Link
          href={href}
          className={clsx(
            "font-orbitron text-xs tracking-widest text-white-200 sm:text-sm"
          )}
        >
          {text}
        </Link>
      </button>
    </>
  );
};
