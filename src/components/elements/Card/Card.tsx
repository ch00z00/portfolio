type CardProps = {
  title: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="h-60 w-80 bg-gradient-to-r from-gray-700 to-gray-400 opacity-90 rounded-xl">
      <div className="h-36 w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-t-xl"></div>
      <div className="text-white ml-6 my-4">
        <div className="text-white text-xl font-bold">{title}</div>
        <div className="">{description}</div>
      </div>
    </div>
  );
};
