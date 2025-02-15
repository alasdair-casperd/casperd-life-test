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
    <div className="flex flex-col bg-slate-200">
      <div className="min-h-[100vh] flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="bg-accent-400 text-white w-full pb-[100px] flex flex-col items-center">
            <SplashText
              title={title}
              subtitle={subtitle}
              description={description}
            ></SplashText>
          </div>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 2243 128"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full fill-accent-400 -translate-y-1 rotate-180 h-[150px]"
          >
            <path
              className="wave-path"
              d="M0,43.7121864 C0,43.7121864 280.375,0.062096789 560.75,0.062096789 C841.125,0.062096789 1401.875,87.362276 1682.25,87.362276 C1869.16667,87.362276 2056.08333,72.8122462 2243,43.7121864 L2243,127.841876 L0,127.841876"
              id="Path-2-Copy"
            ></path>
          </svg>
          <div className="w-full flex flex-row justify-center mt-[-250px] z-50 mb-12">
            <div className="w-full max-w-[800px]">
              <div className="bg-white rounded-2xl p-4 sm:p-8 mb-16">
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
