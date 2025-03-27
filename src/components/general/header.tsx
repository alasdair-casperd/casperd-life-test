import Link from "next/link";

/**
 * A header component to be used globally on the site.
 */
export function Header() {
  return (
    <div className="text-base-200/50 flex w-full flex-row justify-center gap-12 p-8 text-sm">
      <Link href="/" className="hover:text-white">
        Home
      </Link>
      <Link href="/statistics" className="hover:text-white">
        Statistics
      </Link>
      <a
        href="mailto:hello@alasdaircasperd.com?subject=Contact"
        className="hover:text-white"
      >
        Contact
      </a>
    </div>
  );
}
