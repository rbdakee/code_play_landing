import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { TrialLessonSection } from "@/components/sections/TrialLessonSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { OneOnOneSection } from "@/components/sections/OneOnOneSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { HowLessonsWorkSection } from "@/components/sections/HowLessonsWorkSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ScarcitySection } from "@/components/sections/ScarcitySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyUsSection />
        <CoursesSection />
        <TrialLessonSection />
        <ValueSection />
        {/* <OneOnOneSection /> */}
        <CasesSection />
        <ReviewsSection />
        <HowLessonsWorkSection />
        <StatsSection />
        <ScarcitySection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
