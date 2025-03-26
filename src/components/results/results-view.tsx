import { Results } from "@/types/results";
import { Statistics } from "@/types/statistics";
import { DataSection } from "./data-section";
import { OverallProgressBar } from "./progress-bars/overall-progress-bar";
import { CategoryScores } from "./category-scores";
import { ExperienceHighlightGroup } from "./experience-highlight-group";
import { CategoryComparisonBar } from "./progress-bars/category-comparison-bar";
import { categories } from "@/data/category.data";

interface Props {
  results: Results;
  statistics: Statistics;
}

export function ResultsView({ results, statistics }: Props) {
  const most_common_experiences_missed_data =
    results.most_common_experiences_missed.map((x) => ({
      experience: x,
      completed: true,
    }));

  const rarest_experiences_completed_data =
    results.rarest_experiences_completed.map((x) => ({
      experience: x,
      completed: false,
    }));

  return (
    <div className="flex flex-col gap-12">
      <h2>Your Results</h2>
      <DataSection title="Overall Score">
        <p>
          Your overall life experience score is 5.6 out of a maximum of 10. This
          score is calculated according to our scoring algorithm, which does not
          weight all experiences equally and seeks to reward diversity of
          experience across different categories.
        </p>
        <OverallProgressBar progress={0.56} />
      </DataSection>

      <DataSection title="Category Completion">
        <CategoryScores category_averages={results.category_averages} />
      </DataSection>
      <DataSection title="Your Rarest Experiences">
        <p>
          The five experiences below are the least common experiences that you
          selected during your test, according to our data.
        </p>
        <ExperienceHighlightGroup
          data={most_common_experiences_missed_data}
          statistics={statistics}
        />
      </DataSection>

      <DataSection title="The Most Common Experiences you Missed">
        <p>
          The five experiences below are the most common experiences that you
          did not select during your test, according to our data.
        </p>
        <ExperienceHighlightGroup
          data={rarest_experiences_completed_data}
          statistics={statistics}
        />
      </DataSection>

      <DataSection title="How Your Scores Compare">
        <div className="flex flex-col gap-6">
          {categories.all.map((category, index) => (
            <CategoryComparisonBar
              category={category}
              user_progress={results.category_averages[category.id]}
              average_progress={statistics.category_averages[category.id]}
              key={index}
            />
          ))}
        </div>
      </DataSection>
    </div>
  );
}
