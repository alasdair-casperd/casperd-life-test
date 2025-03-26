"use client";

import { ProgressBar } from "./progress-bar";

interface Props {
  progress?: number;
}

/**
 * A progress bar to display a user's overall score.
 */
export function OverallProgressBar({ progress }: Props) {
  const progress_text = progress ? `${(progress * 10).toFixed(1)}` : "0.0";
  return (
    <ProgressBar progress={progress ?? 0} className="h-16">
      {progress_text}
    </ProgressBar>
  );
}
