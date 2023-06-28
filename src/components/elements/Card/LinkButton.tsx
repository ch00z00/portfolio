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
          className="font-orbitron text-base tracking-widest text-white-200 duration-500 ease-in-out hover:text-black-200"
        >
          {text}
        </Link>
      </button>
    </>
  );
};
