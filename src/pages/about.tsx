import { BaseLayout } from "@/components/layouts/Layout/BaseLayout";
import { AboutLayout } from "@/components/pages/About";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

// ReferenceError could not be avoided, so I was forced to apply dynamic.
const DynamicComponent = dynamic(
  () =>
    import("../components/pages/About/AboutLayout").then(
      (mod) => mod.AboutLayout
    ),
  { ssr: false }
);

export const Archives: NextPage = () => {
  return (
    <>
      <BaseLayout title="| About">
        {/* <AboutLayout /> */}
        <DynamicComponent />
      </BaseLayout>
    </>
  );
};

export default Archives;
