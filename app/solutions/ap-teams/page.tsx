import { PageHero } from "@/components/sections/page-hero";
import Section2 from "./Section-2/Section2";

export default function APTeamsPage() {
  return (
    <>
      {/* Page Hero */}

      <div className="mx-auto space-y-10">
        <section>
          <PageHero
            title="Built for Accounts Payable Teams"
            subtitle="Search, Verify & Pay in seconds"
            primaryButton={{
              text: "Get Started",
              href: "/contact",
              showIcon: true,
            }}
            secondaryButton={{
              text: "Schedule Demo",
              href: "/demo",
            }}
            backgroundImage="/img/AP.png"
            backgroundOverlay={true}
          />
        </section>

        {/* Section 2 */}
        <section >
          <Section2 />
        </section>
      </div>
    </>
  );
}
