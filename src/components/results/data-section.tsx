"use client";

interface Props {
  title: string;
  children?: React.ReactNode;
}

/**
 * A section for displaying statistics.
 */
export function DataSection({ title, children }: Props) {
  return (
    <div>
      <h3 className="my-0">{title}</h3>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
