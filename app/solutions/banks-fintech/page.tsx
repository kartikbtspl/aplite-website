"use client";

import Section2 from "./Sections/Section2";
import HeroSec from "@/components/sections/HeroSec";

export default function BanksFintechPage() {
  return (
    <main className="space-y-10">
      {/* Hero Section */}
      <section>
        <HeroSec
          subtitle="aplite"
          title="Built for Banks & Fintech"
          description="Integrate verified, structured payment data that reduces errors, speeds processing, and eliminates fraud risk."
          buttonLabel="Talk To Our Team"
          onButtonClick={() => console.log("Talk To Our Team")}
        />
      </section>

      {/* Section 2 */}
      <section>
        <Section2 />
      </section>
    </main>
  );
}
