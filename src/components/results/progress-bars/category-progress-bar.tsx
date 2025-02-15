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
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-row gap-2">
        <div className="text-accent text-2xl">{category.icon}</div>
        <div className="md:w-[260px] font-semibold">{category.name}</div>
      </div>
      <ProgressBar progress={progress ?? 0} className="h-8">
        {progress_text}
      </ProgressBar>
    </div>
  );
}
