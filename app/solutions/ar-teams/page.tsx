"use client";

import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import HeroSec from "@/components/sections/HeroSec";
export default function ARTeamsPage() {
  return (
    <>
      <div className="mx-auto space-y-10">
      
       <section>
        <HeroSec
          subtitle="aplite"
          title="Accounts Receivable Teams "
          description="Share your banking information securely through an immutable payment profile that customers can trust"
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
    </>
  );
}
