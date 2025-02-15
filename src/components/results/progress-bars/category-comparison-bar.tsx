import { Category } from "@/types/category";

interface Props {
  category: Category;
  user_progress: number;
  average_progress: number;
}

/**
 * A split progress bar to compare a user's category score with the average.
 */
export function CategoryComparisonBar({
  category,
  user_progress,
  average_progress,
}: Props) {
  const comparison_description =
    user_progress > average_progress ? "% above average" : "% below average";

  const difference_text = (
    100 * Math.abs(user_progress - average_progress)
  ).toFixed(0);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-semibold mb-2">
        <div className="flex flex-row gap-2">
          <div className="text-accent-400">{category.icon}</div>
          <div>{category.name}</div>
        </div>
        <div className="text-base-400">
          {difference_text + comparison_description}
        </div>
      </div>
      <div className="flex flex-col">
        <div
          className={`bg-base-100 overflow-hidden h-4 rounded-t-xl relative items-center w-full`}
        >
          {average_progress > 0 && (
            <div
              className="absolute left-0 top-0 bg-accent-400/20 h-full overflow-hidden z-20"
              style={{
                width: Math.round(average_progress * 100).toString() + "%",
              }}
            />
          )}
        </div>
        <div
          className={`bg-base-100 overflow-hidden h-4 rounded-b-xl relative items-center w-full`}
        >
          {user_progress > 0 && (
            <div
              className="absolute left-0 top-0 bg-accent-400 h-full overflow-hidden z-20"
              style={{
                width: Math.round(user_progress * 100).toString() + "%",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
