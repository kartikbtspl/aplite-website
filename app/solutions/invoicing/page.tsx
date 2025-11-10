"use client";

import HeroSec from "@/components/sections/HeroSec";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";

export default function InvoicingPage() {
  return (
    <div className="space-y-10">
      <section>
        <HeroSec
          subtitle="aplite"
          title="Built for Invoicing Platform"
          description="Embed Aplite PINs on invoices. Not editable banking details."
          buttonLabel="Contact Us"
          onButtonClick={() => alert("Contact Us...")}
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
