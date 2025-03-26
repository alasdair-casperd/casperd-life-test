"use client";

import { PageContainer } from "@/components/general/page-container";
import { RoundedPanel } from "@/components/general/rounded-panel";
import { OverallProgressBar } from "@/components/results/progress-bars/overall-progress-bar";
import { example_statistics } from "@/data/statistics.data";
import { DataSection } from "../../components/results/data-section";
import { experiences } from "@/data/experience.data";
import { ExperienceHighlight } from "@/components/results/experience-highlight";
import { CategoryScores } from "@/components/results/category-scores";

export default function () {
  /**
   * All experiences, sorted by completion frequency in descending order.
   */
  const sorted_experiences = experiences.sort((a, b) => {
    const f_a = example_statistics.experience_frequencies[a.id] ?? 0;
    const f_b = example_statistics.experience_frequencies[b.id] ?? 0;
    return f_b - f_a;
  });

  const current_date = new Date().toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <PageContainer>
      <h1>Statistics</h1>
      <RoundedPanel>
        <div className="flex flex-col gap-12">
          <DataSection title="Average Overall Score">
            <p className="pb-4">
              As of {current_date} the test has received{" "}
              {example_statistics.total_responses} responses, which have
              contributed to the overall average below.
            </p>
            <div className="flex flex-col gap-6">
              <OverallProgressBar
                progress={example_statistics.average_overall_score}
              />
            </div>
          </DataSection>
          <DataSection title="Average Category Scores">
            <CategoryScores
              category_averages={example_statistics.category_averages}
            />
          </DataSection>

          <DataSection title="Experiences Completion Frequencies">
            <p className="pb-4">
              The experiences below are sorted from most to least common,
              according to our data.
            </p>
            <div className="flex flex-col gap-3">
              {sorted_experiences.map((experience, index) => (
                <ExperienceHighlight
                  key={index}
                  checked={true}
                  experience={experience}
                  frequency={
                    example_statistics.experience_frequencies[experience.id] ??
                    0
                  }
                />
              ))}
            </div>
          </DataSection>
        </div>
      </RoundedPanel>
    </PageContainer>
  );
}
