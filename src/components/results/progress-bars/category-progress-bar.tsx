"use client";

import { Category } from "@/types/category";
import { ProgressBar } from "./progress-bar";

interface Props {
  category: Category;
  progress?: number;
}

/**
 * A progress bar to display a user's score in a specific category.
 */
export function CategoryProgressBar({ category, progress }: Props) {
  const progress_text = progress ? `${Math.round(progress * 100)}%` : "0%";
  return (
    <div className="mb-4 flex flex-col md:mb-0 md:flex-row">
      <div className="mb-2 flex flex-row gap-2 md:mb-0">
        <div className="text-2xl text-white">{category.icon}</div>
        <div className="font-semibold md:w-[260px]">{category.name}</div>
      </div>
      <ProgressBar progress={progress ?? 0} className="h-8">
        {progress_text}
      </ProgressBar>
    </div>
  );
}
