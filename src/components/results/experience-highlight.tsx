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
      <div className="border-base-500/30 group bg-base-950/30 relative flex w-full flex-col items-start justify-between gap-1 rounded-xl border p-3 duration-150 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex flex-row items-center gap-3">
          <div
            className={`${
              checked ? "bg-base-100" : "bg-base-950/50"
            } flex h-5 w-5 items-center justify-center rounded-md p-1 duration-150`}
          >
            {checked && <IconCheck className="stroke-black stroke-[3px]" />}
            {!checked && <IconX className="stroke-base-500 stroke-[3px]" />}
          </div>
          <span className="font-semibold">{experience.description.past}</span>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <div className="text-base-400 font-bold">
            {(100 * frequency).toFixed(0)}% of users
          </div>
        </div>
      </div>
    </div>
  );
}
