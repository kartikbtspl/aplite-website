"use client";

import HeroSec from "@/components/sections/HeroSec";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";

export default function ERPPage() {
  return (
    <div className="space-y-10">
      <section>
        <HeroSec
          subtitle="aplite"
          title="Built for ERP System"
          description="Autofill verified banking information. Cut manual entry by 99%."
          buttonLabel="Talk To Sales Team"
          onButtonClick={() => alert("Talk To Sales Team...")}
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
