"use client";

import { PageContainer } from "@/components/general/page-container";
import { RoundedPanel } from "@/components/general/rounded-panel";
import { SplashText } from "@/components/test/splash-text";
import { TestView } from "@/components/test/text-view";
import { Suspense } from "react";

export default function Page() {
  return (
    <PageContainer>
      <SplashText />
      <RoundedPanel>
        <Suspense>
          <TestView />
        </Suspense>
      </RoundedPanel>
    </PageContainer>
  );
}
