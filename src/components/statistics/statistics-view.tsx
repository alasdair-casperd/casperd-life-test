"use client";

import { OverallProgressBar } from "@/components/results/progress-bars/overall-progress-bar";
import { DataSection } from "../../components/results/data-section";
import { experiences } from "@/data/experience.data";
import { ExperienceHighlight } from "@/components/results/experience-highlight";
import { CategoryScores } from "@/components/results/category-scores";
import { Statistics } from "@/types/statistics";

interface Props {
  statistics: Statistics;
}

export default function ({ statistics }: Props) {
  /**
   * All experiences, sorted by completion frequency in descending order.
   */
  const sorted_experiences = experiences.sort((a, b) => {
    const f_a = statistics.experiences[a.id].frequency ?? 0;
    const f_b = statistics.experiences[b.id].frequency ?? 0;
    return f_b - f_a;
  });

  const current_date = new Date().toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const category_data = Object.keys(statistics.category_averages).reduce(
    (acc, category) => {
      const x = statistics.category_averages[category];
      acc[category] = {
        score: 100 * x,
        completion: x,
      };
      return acc;
    },
    {} as { [key: string]: { score: number; completion: number } },
  );

  return (
    <div className="flex flex-col gap-12">
      <DataSection title="Average Overall Score">
        <p className="pb-4">
          As of {current_date} the test has received{" "}
          {statistics.total_responses} responses, which have contributed to the
          overall average below.
        </p>
        <div className="flex flex-col gap-6">
          <OverallProgressBar
            progress={statistics.average_overall_score / 10}
          />
        </div>
      </DataSection>
      <DataSection title="Average Category Scores">
        <CategoryScores category_averages={category_data} />
      </DataSection>

      <DataSection title="Experiences Completion Frequencies">
        <p className="pb-4">
          The experiences below are sorted from most to least common, according
          to our data.
        </p>
        <div className="flex flex-col gap-3">
          {sorted_experiences.map((experience, index) => (
            <ExperienceHighlight
              key={index}
              checked={true}
              experience={experience}
              frequency={statistics.experiences[experience.id].frequency ?? 0}
            />
          ))}
        </div>
      </DataSection>
    </div>
  );
}
