import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

export const ExpCircle: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "h-20 w-20 rounded-full bg-yellow-100 blur-sm",
        className
      )}
    ></div>
  );
};
