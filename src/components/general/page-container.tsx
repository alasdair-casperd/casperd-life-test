import Link from "next/link";
import { RaysGradient } from "../graphics/rays-gradient";
import { SplashText } from "../test/splash-text";
import { BackToTopButton } from "./back-to-top-button";
import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
  children?: React.ReactNode;
};

const image_url =
  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

/**
 * A page container component for displaying splash text above a contained content section.
 */
export function PageContainer({ children }: Props) {
  return (
    <div className="flex flex-col text-white">
      <div className="flex min-h-[100vh] flex-col justify-between">
        <div className="flex flex-col">
          <img src={image_url} className="fixed -z-50 min-h-screen w-full" />
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
