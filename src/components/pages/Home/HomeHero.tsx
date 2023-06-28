import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-blue-200 p-20 font-orbitron text-black-200">
      <div className="text-white-200">Hello</div>
      <div className="flex items-center justify-center gap-16 px-40">
        <Image src="/assets/me.png" width={500} height={500} alt="me" />
      </div>
    </div>
  );
};
