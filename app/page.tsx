import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Benefits } from "@/components/sections/benefits";
import { Stats } from "@/components/sections/stats";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefits />
      <Stats />
      <CTA />
    </>
  );
}
