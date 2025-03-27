"use client";

import { categories } from "@/data/category.data";
import { CategoryProgressBar } from "./progress-bars/category-progress-bar";

interface Props {
  category_averages: { [key: string]: { score: number; completion: number } };
}

/**
 * A section for displaying statistics.
 */
export function CategoryScores({ category_averages }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {categories.all.map((category, index) => (
        <CategoryProgressBar
          key={index}
          category={category}
          progress={category_averages[category.id].completion}
        />
      ))}
    </div>
  );
}
