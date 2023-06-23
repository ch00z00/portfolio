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
        className="hover:gradient-red-white relative inline-flex items-center justify-start overflow-hidden rounded-full border-2 bg-white-100"
      >
        <Link
          href={href}
          className="px-6 py-2 font-orbitron text-black-200 transition-colors duration-300 ease-in-out hover:text-white-100"
        >
          {text}
        </Link>
      </button>
    </>
  );
};
