import { PageHero } from "@/components/sections/page-hero";
import Section2 from "./Section-2/Section2";
import Section3 from "./Section-3/Section3";

export default function InvoicingPage() {
  return (
    <>
      <div className="mx-auto space-y-10">
        <section>
          <PageHero
            title="Built for Invoicing Platform"
            subtitle="Embed Aplite PINs on invoices. Not editable banking details."
            primaryButton={{
              text: "Contact Us",
              href: "/contact",
              showIcon: true,
            }}
            // secondaryButton={{
            //   text: "Schedule Demo",
            //   href: "/demo",
            // }}
            backgroundImage="/img/Invoicing Platform.png"
            backgroundOverlay={true}
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
