"use client";

import { PageContainer } from "@/components/general/page-container";
import { RoundedPanel } from "@/components/general/rounded-panel";
import { SplashText } from "@/components/test/splash-text";
import { TestView } from "@/components/test/text-view";

export default function () {
  return (
    <PageContainer>
      <SplashText />
      <RoundedPanel>
        <TestView />
      </RoundedPanel>
    </PageContainer>
  );
}
