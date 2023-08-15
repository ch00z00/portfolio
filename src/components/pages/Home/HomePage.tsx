import Image from "next/image";

export const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black-100">
      <span className="z-10 font-neuropol text-8xl text-white-200">
        Optimistic
        <br /> <span className="text-5xl">&</span> <br />
        sociopathic
      </span>
      <Image
        src="/assets/pom.jpeg"
        width={400}
        height={400}
        alt="picture of me"
        className="-ml-10"
      />
    </div>
  );
};
