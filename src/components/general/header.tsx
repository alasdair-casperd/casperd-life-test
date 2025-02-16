import Link from "next/link";

/**
 * A header component to be used globally on the site.
 */
export function Header() {
  return (
    <div className="text-base-800/20 flex w-full flex-row justify-center gap-12 p-8 text-sm">
      <Link href="/" className="hover:text-base-800/50">
        Home
      </Link>
      <Link href="/statistics" className="hover:text-base-800/50">
        Take the Test
      </Link>
      <Link href="/statistics" className="hover:text-base-800/50">
        Statistics
      </Link>
      <a
        href="mailto:hello@alasdaircasperd.com?subject=Contact"
        className="hover:text-base-800/50"
      >
        Contact
      </a>
    </div>
  );
}
