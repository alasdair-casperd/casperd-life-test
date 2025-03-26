"use client";

import { PageContainer } from "@/components/general/page-container";
import { RoundedPanel } from "@/components/general/rounded-panel";
import { CategoryScores } from "@/components/results/category-scores";
import { DataSection } from "@/components/results/data-section";
import { ExperienceHighlight } from "@/components/results/experience-highlight";
import { ExperienceHighlightGroup } from "@/components/results/experience-highlight-group";
import { CategoryComparisonBar } from "@/components/results/progress-bars/category-comparison-bar";
import { OverallProgressBar } from "@/components/results/progress-bars/overall-progress-bar";
import { ResultsView } from "@/components/results/results-view";
import { DataNotice } from "@/components/test/data-notice";
import { ExperienceToggle } from "@/components/test/experience-toggle";
import { SplashText } from "@/components/test/splash-text";
import { TestHeader } from "@/components/test/test-header";
import { categories } from "@/data/category.data";
import { experiences } from "@/data/experience.data";
import { example_results } from "@/data/results.data";
import { example_statistics } from "@/data/statistics.data";
import { Response } from "@/types/response";
import { useState } from "react";

export default function () {
  const [response, setResponse] = useState({} as Response);

  const toggleExperience = (id: number) => {
    setResponse({ ...response, [id]: !response[id] });
  };

  return (
    <PageContainer>
      <SplashText />
      <RoundedPanel>
        <TestHeader
          button={{ text: "Reset Test", action: () => {} }}
        ></TestHeader>

        <div className="mt-10 flex flex-col gap-3">
          {experiences.map((experience, index) => (
            <ExperienceToggle
              key={index}
              experience={experience}
              number={(index + 1).toString()}
              completed={response[experience.id]}
              toggleExperience={() => {
                toggleExperience(experience.id);
              }}
            ></ExperienceToggle>
          ))}
        </div>

        <div className="mt-10">
          <DataNotice />
          <button className="button primary-button w-full">
            Get Your Results
          </button>
        </div>
      </RoundedPanel>
    </PageContainer>
  );
}
