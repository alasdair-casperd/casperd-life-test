"use client";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export function ComponentsLibrarySection({ title, children }: Props) {
  return (
    <div className="border-base-300 bg-base-900 relative w-full rounded-2xl border p-8 text-white">
      {title && (
        <span className="text-base-400 bg-base-900 absolute top-[-12px] px-3 font-mono font-bold">
          {title}
        </span>
      )}
      {children}
    </div>
  );
}
