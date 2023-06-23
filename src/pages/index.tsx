import { BaseLayout } from "@/components/layouts/Layout/BaseLayout";
import type { NextPage } from "next";
import { Hero, Identity } from "@/components/pages/Home";

const Home: NextPage = () => {
  return (
    <>
      <BaseLayout title="">
        <Hero />
        <Identity />
      </BaseLayout>
    </>
  );
};

export default Home;
