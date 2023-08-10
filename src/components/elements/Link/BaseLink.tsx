import Link from "next/link";
import { ComponentProps } from "react";

export type BaseLinkProps = ComponentProps<"a"> & {
  href: string;
  blank?: boolean;
  className?: string;
};

export const BaseLink: React.FC<BaseLinkProps> = ({
  href,
  blank,
  children,
  ...props
}) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        target={blank ? "_blank" : "_self"}
        rel={blank ? "noopener" : undefined}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};
