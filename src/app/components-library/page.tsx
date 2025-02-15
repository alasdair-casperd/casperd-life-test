"use client";

import { experiences } from "@/data/experience.data";
import { ExperienceToggle } from "@/components/test/experience-toggle";
import { ComponentsLibrarySection } from "@/components/components-library/components-library-section";
import { DataNotice } from "@/components/test/data-notice";
import { SplashText } from "@/components/test/splash-text";
import { TestHeader } from "@/components/test/test-header";
import { Footer } from "@/components/general/footer";
import { ExperienceHighlight } from "@/components/results/experience-highlight";
import { CategoryComparisonBar } from "@/components/results/progress-bars/category-comparison-bar";
import { categories } from "@/data/category.data";
import { OverallProgressBar } from "@/components/results/progress-bars/overall-progress-bar";
import { ProgressBar } from "@/components/results/progress-bars/progress-bar";
import { CategoryProgressBar } from "@/components/results/progress-bars/category-progress-bar";

export default function () {
  return (
    <div
      className="flex flex-col w-full p-12 gap-8 min-h-screen"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, #f2f2f2 0 1px, transparent 1px 10px)",
      }}
    >
      <ComponentsLibrarySection title="Headings">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt <a href="#">adipiscing elit</a> ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Buttons">
        <div className="flex flex-row gap-4">
          <button className="primary-button">Primary Button</button>
          <button className="secondary-button">Secondary Button</button>
        </div>
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Experience Toggle">
        <div className="flex flex-col gap-4">
          <ExperienceToggle
            completed={false}
            number={"1"}
            experience={experiences[0]}
            toggleExperience={() => {}}
          ></ExperienceToggle>
          <ExperienceToggle
            completed={true}
            number={"2"}
            experience={experiences[1]}
            toggleExperience={() => {}}
          ></ExperienceToggle>
          <ExperienceToggle
            completed={true}
            number={"3"}
            experience={experiences[2]}
            toggleExperience={() => {}}
          ></ExperienceToggle>
        </div>
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Progress Bar">
        <ProgressBar progress={0.2} className="h-10">
          Progress
        </ProgressBar>
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Overall Progress Bar">
        <OverallProgressBar progress={0.2}></OverallProgressBar>
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Category Progress Bar">
        <div className="flex flex-col gap-6">
          <CategoryProgressBar
            category={categories.love}
            progress={0.94}
          ></CategoryProgressBar>
          <CategoryProgressBar
            category={categories.achievements}
            progress={0.2}
          ></CategoryProgressBar>
          <CategoryProgressBar
            category={categories.hardship}
            progress={0.52}
          ></CategoryProgressBar>
        </div>
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Category Comparison Bar">
        <CategoryComparisonBar
          category={categories.activity}
          user_progress={0.21}
          average_progress={0.5}
        ></CategoryComparisonBar>
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Experience Highlight">
        <div className="flex flex-col gap-4">
          <ExperienceHighlight
            experience={experiences[0]}
            checked={true}
            frequency={0.06}
          ></ExperienceHighlight>
          <ExperienceHighlight
            experience={experiences[0]}
            checked={false}
            frequency={0.98}
          ></ExperienceHighlight>
        </div>
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Data Collection Notice">
        <DataNotice />
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Splash Text">
        <div className="flex flex-col items-center w-full">
          <SplashText
            title="Lorem Ipsum Dolor Sit"
            subtitle="Consectetur Adipiscing Elit"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ></SplashText>
        </div>
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Test Header">
        <TestHeader button={{ text: "Button", action: () => {} }}></TestHeader>
      </ComponentsLibrarySection>

      <ComponentsLibrarySection title="Site Footer">
        <Footer />
      </ComponentsLibrarySection>
    </div>
  );
}
