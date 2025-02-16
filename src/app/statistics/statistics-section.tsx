"use client";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

/**
 * A section for displaying statistics.
 */
export function StatisticsSection({ title, children }: Props) {
  return (
    <div>
      <h3 className="mt-0">{title}</h3>
      {children}
    </div>
  );
}
