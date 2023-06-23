type CardProps = {
  title: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="h-60 w-80 rounded-xl bg-black-100 opacity-90">
      <div className="gradient-red-white h-36 w-80 rounded-t-xl"></div>
      <div className="my-4 ml-6 text-white-100">
        <div className="text-xl font-bold text-white-100">{title}</div>
        <div className="">{description}</div>
      </div>
    </div>
  );
};
