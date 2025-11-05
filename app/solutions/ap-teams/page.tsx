import { PageHero } from "@/components/sections/page-hero";
import Section2 from "./Section-2/Section2";

export default function APTeamsPage() {
  return (
    <>
      {/* Page Hero */}

      <div className="mx-auto space-y-10">
        <section>
          <PageHero
            title="AP Teams"
            subtitle="Streamline your accounts payable processes with powerful automation and collaboration tools designed for modern finance teams."
            primaryButton={{
              text: "Get Started",
              href: "/contact",
              showIcon: true,
            }}
            secondaryButton={{
              text: "Schedule Demo",
              href: "/demo",
            }}
            backgroundImage="/img/ap.png"
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
