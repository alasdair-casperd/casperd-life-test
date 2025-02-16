import { IconDiamond, IconDiamonds } from "@tabler/icons-react";
import Link from "next/link";

/**
 * A footer component to be used globally on the site.
 */
export function Footer() {
  return (
    <div className="group bg-base-950 flex w-full flex-col items-center justify-center gap-4 pt-8 pb-12 text-white">
      <Link href="/">
        <IconDiamonds className="text-accent-400 h-8 w-8" />
      </Link>

      <div className="text-base-100 flex flex-col items-center justify-center gap-8 text-xs sm:my-4 sm:flex-row sm:gap-4">
        <Link href="/">Home</Link>
        <Link href="/statistics">Statistics</Link>
        <a
          className="text-xs"
          href="mailto:hello@alasdaircasperd.com?subject=Contact"
        >
          Contact
        </a>
      </div>

      <div className="text-base-500 text-xs font-normal">
        ©{" "}
        <a className="font-normal" href="https://alasdaircasperd.com">
          Alasdair Casperd
        </a>{" "}
        2025
      </div>
    </div>
  );
}
