import { categories } from "@/data/category.data";
import { experiences } from "@/data/experience.data";
import { Response } from "@/types/response";
import { Results } from "@/types/results";
import { Statistics } from "@/types/statistics";

/**
 * A composable used to calculate results based on a response and a statistics snapshot.
 */
export const useScoringAlgorithm = () => {
  /**
   * Scoring algorithm config.
   */
  const config = {
    maximum_score: 100,
    multiplicative_weight: 0.7,
    additive_weight: 0.3,
  };

  /**
   * Calculate results based on a response and a statistics snapshot.
   */
  const calculateResults = (
    response: Response,
    statistics: Statistics,
  ): Results => {
    const category_results = calculateCategoryResults(response);
    const overall_score = calculateOverallScore(
      Object.values(category_results).map((c) => c.score),
    );

    const rarest_completed = experiences
      .filter((e) => response[e.id])
      .sort(
        (a, b) =>
          statistics.experience_frequencies[a.id] -
          statistics.experience_frequencies[b.id],
      )
      .slice(0, 5);

    const most_common_missed = experiences
      .filter((e) => !response[e.id])
      .sort(
        (a, b) =>
          statistics.experience_frequencies[b.id] -
          statistics.experience_frequencies[a.id],
      )
      .slice(0, 5);

    return {
      overall_score,
      categories: category_results,
      highlights: {
        rarest_completed,
        most_common_missed,
      },
      original_response: response,
    };
  };

  /**
   * Calculate category results based on a response.
   */
  const calculateCategoryResults = (
    response: Response,
  ): { [key: string]: { score: number; completion: number } } =>
    categories.all.reduce(
      (acc, category) => {
        const category_experiences = experiences.filter(
          (e) => e.category.id == category.id,
        );
        const completed_category_experiences = category_experiences.filter(
          (e) => response[e.id],
        );
        const completion =
          completed_category_experiences.length / category_experiences.length;
        acc[category.id] = {
          score: completion * config.maximum_score,
          completion,
        };
        return acc;
      },
      {} as { [key: string]: { score: number; completion: number } },
    );

  /**
   * Calculate the overall score based on category completions.
   */
  const calculateOverallScore = (category_completions: number[]): number => {
    const n = category_completions.length;
    const sum = category_completions.reduce((acc, score) => acc + score, 0);
    const product = category_completions.reduce((acc, score) => acc * score, 1);

    const additive_score = (config.maximum_score * sum) / n;
    const multiplicative_score =
      config.maximum_score * Math.pow(product, 1 / n);

    return (
      config.multiplicative_weight * multiplicative_score +
      config.additive_weight * additive_score
    );
  };

  return {
    calculateResults,
  };
};
