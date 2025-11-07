"use client";

import HeroSec from "@/components/sections/HeroSec";
import Section2 from "./Section-2/Section2";

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

    </div>
  );
}
