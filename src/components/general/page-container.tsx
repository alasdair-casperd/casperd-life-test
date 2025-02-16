import Link from "next/link";
import { RaysGradient } from "../graphics/rays-gradient";
import { SplashText } from "../test/splash-text";
import { BackToTopButton } from "./back-to-top-button";
import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
  children?: React.ReactNode;
};

/**
 * A page container component for displaying splash text above a contained content section.
 */
export function PageContainer({ children }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex min-h-[100vh] flex-col justify-between">
        <div className="flex flex-col">
          <div className="fixed top-0 left-0 -z-10 h-[200px] w-full bg-gradient-to-b from-white to-transparent"></div>
          <div className="fixed top-0 left-0 -z-10 h-[700px] w-full bg-gradient-to-b from-transparent from-50% to-white"></div>
          <div className="fixed top-0 left-0 -z-20 h-[700px] w-full">
            <RaysGradient />
          </div>
          <Header />
          <div className="mb-12 flex w-full flex-col items-center">
            {children}
          </div>
        </div>
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}
