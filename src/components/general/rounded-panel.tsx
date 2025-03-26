type Props = {
  children?: React.ReactNode;
};

/**
 * A white, rounded-panel used for grouping content on a page.
 */
export function RoundedPanel({ children }: Props) {
  return (
    <div className="bg-base-900/50 border-base-500/20 mb-16 w-full max-w-[800px] rounded-2xl border p-4 shadow-lg backdrop-blur-lg sm:p-8">
      {children}
    </div>
  );
}
