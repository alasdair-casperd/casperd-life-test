"use client";

import { Experience } from "@/types/experience";
import { IconCheck, IconX } from "@tabler/icons-react";

interface Props {
  experience: Experience;
  checked: boolean;
  frequency: number;
}

/**
 * A component displaying whether a user has completed an experience alongside the recorded frequency of completion.
 */
export function ExperienceHighlight({ experience, checked, frequency }: Props) {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-4 bg-white border-2 border-base-200 p-3 rounded-xl group duration-150 relative">
        <div className="flex flex-row items-center gap-3">
          <div
            className={`${
              checked ? "bg-accent-400" : "bg-base-200"
            } w-5 h-5 rounded-md flex items-center justify-center p-1 duration-150`}
          >
            {checked && <IconCheck className="stroke-white stroke-[3px]" />}
            {!checked && <IconX className="stroke-accent-400 stroke-[3px]" />}
          </div>
          <span className="font-semibold">{experience.description.past}</span>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <div className="font-bold text-accent-400">
            {(100 * frequency).toFixed(0)}% of users
          </div>
        </div>
      </div>
    </div>
  );
}
