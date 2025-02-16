"use client";

import { PageContainer } from "@/components/general/page-container";
import { RoundedPanel } from "@/components/general/rounded-panel";
import { CategoryProgressBar } from "@/components/results/progress-bars/category-progress-bar";
import { OverallProgressBar } from "@/components/results/progress-bars/overall-progress-bar";
import { categories } from "@/data/category.data";
import { example_statistics } from "@/data/statistics.data";
import { StatisticsSection } from "./statistics-section";
import { experiences } from "@/data/experience.data";
import { ExperienceHighlight } from "@/components/results/experience-highlight";

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
          <StatisticsSection title="Average Overall Score">
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
          </StatisticsSection>
          <StatisticsSection title="Average Category Scores">
            <div className="flex flex-col gap-3">
              {categories.all.map((category, index) => (
                <CategoryProgressBar
                  key={index}
                  category={category}
                  progress={example_statistics.category_averages[category.id]}
                />
              ))}
            </div>
          </StatisticsSection>

          <StatisticsSection title="Experiences Completion Frequencies">
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
          </StatisticsSection>
        </div>
      </RoundedPanel>
    </PageContainer>
  );
}
