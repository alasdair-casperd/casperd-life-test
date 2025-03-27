"use client";

import { Results } from "@/types/results";
import { Statistics } from "@/types/statistics";
import { DataSection } from "./data-section";
import { OverallProgressBar } from "./progress-bars/overall-progress-bar";
import { CategoryScores } from "./category-scores";
import { ExperienceHighlightGroup } from "./experience-highlight-group";
import { CategoryComparisonBar } from "./progress-bars/category-comparison-bar";
import { categories } from "@/data/category.data";
import { useResponse } from "@/composables/useResponse";
import { useRouter } from "next/navigation";

interface Props {
  results: Results;
  statistics: Statistics;
}

export function ResultsView({ results, statistics }: Props) {
  const { clearResponse } = useResponse();
  const router = useRouter();

  const most_common_experiences_missed_data =
    results.highlights.most_common_missed.map((x) => ({
      experience: x,
      completed: false,
    }));

  const rarest_experiences_completed_data =
    results.highlights.rarest_completed.map((x) => ({
      experience: x,
      completed: true,
    }));

  const restartTest = async () => {
    clearResponse();
    router.push("/");
  };

  const reviewAnswers = async () => {
    router.push("/");
  };

  const formattedScore = results.overall_score.toFixed(1);

  return (
    <div className="flex flex-col gap-12">
      <DataSection title="Overall Score">
        <p>
          Your overall life experience score is <b>{formattedScore}</b> out of a
          maximum of <b>10</b>. This score is calculated according to our
          scoring algorithm, which does not weight all experiences equally and
          seeks to reward diversity of experience across different categories.
        </p>
        <OverallProgressBar progress={results.overall_score / 10} />
      </DataSection>

      <DataSection title="Category Completion">
        <CategoryScores category_averages={results.categories} />
      </DataSection>
      <DataSection title="Your Rarest Experiences">
        <p>
          The five experiences below are the least common experiences that you
          selected during your test, according to our data.
        </p>
        <ExperienceHighlightGroup
          data={rarest_experiences_completed_data}
          statistics={statistics}
        />
      </DataSection>

      <DataSection title="The Most Common Experiences you Missed">
        <p>
          The five experiences below are the most common experiences that you
          did not select during your test, according to our data.
        </p>
        <ExperienceHighlightGroup
          data={most_common_experiences_missed_data}
          statistics={statistics}
        />
      </DataSection>

      <DataSection title="How Your Scores Compare">
        <div className="flex flex-col gap-6">
          {categories.all.map((category, index) => (
            <CategoryComparisonBar
              category={category}
              user_progress={results.categories[category.id].completion}
              average_progress={statistics.category_averages[category.id]}
              key={index}
            />
          ))}
        </div>
      </DataSection>

      <div className="flex flex-col gap-4">
        <div className="button secondary-button w-full" onClick={reviewAnswers}>
          Review your Answers
        </div>

        <div className="button primary-button w-full" onClick={restartTest}>
          Take the Test Again
        </div>
      </div>
    </div>
  );
}
