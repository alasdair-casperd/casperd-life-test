"use client";

interface Props {
  progress: number;
  className?: string;
  children?: React.ReactNode;
}

/**
 * A generic progress bar to display a progress value between 0 and 1.
 */
export function ProgressBar({ children, progress, className }: Props) {
  return (
    <div
      className={
        className +
        " bg-base-100 overflow-hidden rounded-xl relative items-center w-full"
      }
    >
      <div className="ml-4 h-full flex flex-col justify-center text-lg font-bold z-10 text-base-500">
        {children}
      </div>
      {progress > 0 && (
        <div
          className="absolute left-0 top-0 bg-accent-400 h-full overflow-hidden z-20"
          style={{ width: Math.round(progress * 100).toString() + "%" }}
        >
          <div className="ml-4 top-0 h-full flex flex-col justify-center text-lg font-bold z-50 text-base-100">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
