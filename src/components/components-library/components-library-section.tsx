"use client";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export function ComponentsLibrarySection({ title, children }: Props) {
  return (
    <div className="border-base-300 relative w-full rounded-2xl border bg-white p-8">
      {title && (
        <span className="text-base-400 absolute top-[-12px] bg-white px-3 font-mono font-bold">
          {title}
        </span>
      )}
      {children}
    </div>
  );
}
