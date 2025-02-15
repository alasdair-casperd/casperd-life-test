import { IconDiamond, IconDiamonds } from "@tabler/icons-react";
import Link from "next/link";

/**
 * A footer component to be used globally on the site.
 */
export function Footer() {
  return (
    <div className="group pt-8 pb-12 w-full flex flex-col items-center justify-center gap-4 bg-base-950 text-white">
      <Link href="/">
        <IconDiamonds className="text-accent w-8 h-8" />
      </Link>

      <div className="text-base-100 text-xs flex sm:flex-row gap-8 justify-center items-center flex-col sm:gap-4 sm:my-4">
        <Link href="/">Home</Link>
        <Link href="/statistics">Statistics</Link>
        <a
          className="text-xs"
          href="mailto:hello@alasdaircasperd.com?subject=Contact"
        >
          Contact
        </a>
      </div>

      <div className="text-xs text-base-500 font-normal">
        ©{" "}
        <a className="font-normal" href="https://alasdaircasperd.com">
          Alasdair Casperd
        </a>{" "}
        2025
      </div>
    </div>
  );
}
