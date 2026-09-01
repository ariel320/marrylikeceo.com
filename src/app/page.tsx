import { Hero } from "@/components/sections/Hero";
import { StrategyGap } from "@/components/sections/StrategyGap";
import { TheSystem } from "@/components/sections/TheSystem";
import { Story } from "@/components/sections/Story";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Experience } from "@/components/sections/Experience";
import { Book } from "@/components/sections/Book";
import { Community } from "@/components/sections/Community";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQSchema } from "@/components/SEO/FAQSchema";

const HomePage = () => {
  return (
    <>
      <FAQSchema />
      <Hero />
      <StrategyGap />
      <TheSystem />
      <Story />
      <QuoteBand />
      <Experience />
      <Book />
      <Community />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default HomePage;
