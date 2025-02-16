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
      <div className="border-base-200 group relative flex w-full flex-col items-start justify-between gap-1 rounded-xl border-2 bg-white p-3 duration-150 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex flex-row items-center gap-3">
          <div
            className={`${
              checked ? "bg-accent-400" : "bg-base-200"
            } flex h-5 w-5 items-center justify-center rounded-md p-1 duration-150`}
          >
            {checked && <IconCheck className="stroke-white stroke-[3px]" />}
            {!checked && <IconX className="stroke-accent-400 stroke-[3px]" />}
          </div>
          <span className="font-semibold">{experience.description.past}</span>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <div className="text-accent-400 font-bold">
            {(100 * frequency).toFixed(0)}% of users
          </div>
        </div>
      </div>
    </div>
  );
}
