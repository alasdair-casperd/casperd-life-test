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
        " bg-base-100 relative w-full items-center overflow-hidden rounded-xl"
      }
    >
      <div className="text-base-500 z-10 ml-4 flex h-full flex-col justify-center text-lg font-bold">
        {children}
      </div>
      {progress > 0 && (
        <div
          className="bg-accent-400 absolute top-0 left-0 z-20 h-full overflow-hidden"
          style={{ width: Math.round(progress * 100).toString() + "%" }}
        >
          <div className="text-base-100 top-0 z-50 ml-4 flex h-full flex-col justify-center text-lg font-bold">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
