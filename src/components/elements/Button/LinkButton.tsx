import clsx from "clsx";
import Link from "next/link";

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
            "relative font-orbitron text-xs tracking-widest text-white-200 mix-blend-exclusion before:absolute before:bottom-0 before:left-0 before:block before:h-[1px] before:w-full before:origin-top-left before:scale-x-0 before:bg-white-200 before:transition before:duration-1000 before:ease-in-out before:content-[''] before:hover:scale-x-100 sm:text-sm"
            // TODO: bg-white-200 になったら text-black-100 と before:bg-black-100 にする filter:invert filter:grayscale filter:contrast-100
          )}
        >
          {text}
        </Link>
      </button>
    </>
  );
};
