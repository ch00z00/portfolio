import Image from "next/image";

export const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black-100">
      <Image
        src="/assets/pom.jpeg"
        width={400}
        height={400}
        alt="picture of me"
      />
    </div>
  );
};
