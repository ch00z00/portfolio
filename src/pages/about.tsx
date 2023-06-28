import { BaseLayout } from "@/components/layouts/Layout/BaseLayout";
import { AboutLayout } from "@/components/pages/About";
import type { NextPage } from "next";

export const Archives: NextPage = () => {
  return (
    <>
      <BaseLayout title="| About">
        <AboutLayout />
      </BaseLayout>
    </>
  );
};

export default Archives;
