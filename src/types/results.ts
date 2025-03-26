import { Experience } from "./experience";

export type Results = {
  average_overall_score: number;
  category_averages: { [key: string]: number };
  rarest_experiences_completed: Experience[];
  most_common_experiences_missed: Experience[];
}