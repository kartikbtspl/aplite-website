"use client";

import HeroSec from "@/components/sections/HeroSec";
import Section2 from "./Sections/Section2";

export default function AIAgentsPage() {
  return (
    <div className="space-y-10">
      <section>
        <HeroSec
          subtitle="aplite"
          title="The Agentic Future"
          description="We're building the structured payment infrastructure that AI agents need to process transactions autonomously and accurately."
          buttonLabel="Talk To Sales Team"
          onButtonClick={() => alert("Talk To Sales Team...")}
        />
      </section>

      <section>
        <Section2 />
      </section>
    </div>
  );
}
