"use client";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export function ComponentsLibrarySection({ title, children }: Props) {
  return (
    <div className="w-full border-base-300 border p-8 rounded-2xl relative bg-white">
      {title && (
        <span className="font-bold font-mono text-base-400 absolute top-[-12px] bg-white px-3">
          {title}
        </span>
      )}
      {children}
    </div>
  );
}
