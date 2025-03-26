import { Results } from "@/types/results";
import { experiences } from "./experience.data";

export const example_results: Results = {
  average_overall_score: 0.54,
  category_averages: {
    love: 0.5,
    travel: 0.2,
    activity: 0.35,
    achievements: 0.22,
    skills: 0.94,
    hardship: 0.54,
  },
  most_common_experiences_missed: [
    experiences[0],
    experiences[1],
    experiences[2],
    experiences[3],
    experiences[4],
  ],
  rarest_experiences_completed: [
    experiences[5],
    experiences[6],
    experiences[7],
    experiences[8],
    experiences[9],
  ],
};
