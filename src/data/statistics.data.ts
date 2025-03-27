import { Statistics } from "@/types/statistics";

export const example_statistics: Statistics = {
  total_responses: 150,
  average_overall_score: 0.54,
  category_averages: {
    love: 0.5,
    travel: 0.2,
    activity: 0.35,
    achievements: 0.22,
    skills: 0.94,
    hardship: 0.54,
  },
  experiences: {
    1: { frequency: 0.35, completions: 100 },
    2: { frequency: 0.22, completions: 100 },
    3: { frequency: 0.94, completions: 100 },
    4: { frequency: 0.54, completions: 100 },
    5: { frequency: 0.5, completions: 100 },
    6: { frequency: 0.2, completions: 100 },
    7: { frequency: 0.35, completions: 100 },
    8: { frequency: 0.22, completions: 100 },
  },
};
