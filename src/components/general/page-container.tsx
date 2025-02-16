import Link from "next/link";
import { RaysGradient } from "../graphics/rays-gradient";
import { SplashText } from "../test/splash-text";
import { BackToTopButton } from "./back-to-top-button";
import { Footer } from "./footer";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
};

/**
 * A page container component for displaying splash text above a contained content section.
 */
export function PageContainer({
  title,
  subtitle,
  description,
  children,
}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex min-h-[100vh] flex-col justify-between">
        <div className="flex flex-col">
          <div className="fixed top-0 left-0 -z-10 h-[200px] w-full bg-gradient-to-b from-white to-transparent"></div>
          <div className="fixed top-0 left-0 -z-10 h-[700px] w-full bg-gradient-to-b from-transparent from-50% to-white"></div>
          <div className="fixed top-0 left-0 -z-20 h-[700px] w-full">
            <RaysGradient />
          </div>
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
          <div className="text-base-800 flex w-full flex-col items-center">
            <SplashText />
          </div>
          <div className="mb-12 flex w-full flex-row justify-center">
            <div className="w-full max-w-[800px]">
              <div className="mb-16 rounded-2xl bg-white p-4 shadow-lg sm:p-8">
                {children}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}
