"use client";

import HeroSec from "@/components/sections/HeroSec";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";

export default function APTeamsPage() {
  return (
    <div className="space-y-10">
      <section>
        <HeroSec
          subtitle="aplite"
          title="Built for Accounts Payable Teams"
          description="Search, Verify & Pay in seconds"
          buttonLabel="Get Started"
          onButtonClick={() => alert("Get Started...")}
        />
      </section>

      <section>
       <Section2 />
      </section>

      <section>
        <Section3 />
      </section>

    </div>
  );
}
