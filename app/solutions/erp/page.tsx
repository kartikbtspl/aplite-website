import { PageHero } from "@/components/sections/page-hero";
import Section2 from "./Section-2/Section2";
import Section3 from "./Section-3/Section3";

export default function ERPPage() {
  return (
    <>
      <div className="mx-auto space-y-10">
        <section>
          <PageHero
            title="Built for ERP System"
            subtitle="Autofill verified banking information. Cut manual entry by 99%."
            primaryButton={{
              text: "Talk To Our Team",
              href: "/contact",
              showIcon: true,
            }}
            //  secondaryButton={{
            //    text: "Schedule Demo",
            //    href: "/demo",
            //  }}
            backgroundImage="/img/ERP System.png"
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
