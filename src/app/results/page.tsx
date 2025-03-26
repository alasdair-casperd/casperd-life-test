"use client";

import { PageContainer } from "@/components/general/page-container";
import { RoundedPanel } from "@/components/general/rounded-panel";
import { ResultsView } from "@/components/results/results-view";
import { SplashText } from "@/components/test/splash-text";
import { example_results } from "@/data/results.data";
import { example_statistics } from "@/data/statistics.data";

export default function () {
  return (
    <PageContainer>
      <h1 className="py-20">Your Results</h1>
      <RoundedPanel>
        <ResultsView
          results={example_results}
          statistics={example_statistics}
        />
      </RoundedPanel>
    </PageContainer>
  );
}
