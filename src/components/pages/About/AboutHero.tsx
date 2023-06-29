import Image from "next/image";

export const AboutHero: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black-100 pt-20 text-white-200">
      <div className="grid grid-cols-2 items-center justify-center px-40">
        <div className="flex h-2/3 w-full flex-col items-start justify-center gap-12 bg-black-100 pl-10 font-syne">
          <p className="font-orbitron text-xl">01.</p>
          <div className="ml-8">
            <p className="mb-8 text-7xl">Hello</p>
            <p className="font-neuropol text-lg">
              Hi guys 👋 My name is Yusuke Seki. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Porro, magni laborum voluptatem
              praesentium at voluptate, officia ipsa, veritatis iste in vitae
              nemo minima ipsum repellendus doloremque impedit temporibus
              ratione neque.
            </p>
          </div>
        </div>
        <Image src="/assets/me.png" width={700} height={700} alt="me" />
      </div>
    </div>
  );
};
