import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

export const ExpRect: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "h-20 w-20 rotate-45 bg-yellow-100 blur-sm",
        className
      )}
    ></div>
  );
};
