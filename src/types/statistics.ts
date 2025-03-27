/**
 * A type representing a snapshot of the response data collected.
 */
export type Statistics = {
  total_responses: number;
  average_overall_score: number;
  category_averages: { [key: string]: number };
  experiences: { [key: number]: { frequency: number; completions: number } };
};
