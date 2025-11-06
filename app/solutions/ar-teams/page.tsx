import { PageHero } from "@/components/sections/page-hero";
import Section2 from "./Section-2/Section2";
import Section3 from "./Section-3/Section3";
export default function ARTeamsPage() {
  return (
    <>
      <div className="mx-auto space-y-10">
        <section>
          <PageHero
            title="Accounts Receivable Teams "
            subtitle="Share your banking information securely through an immutable payment profile that customers can trust"
            primaryButton={{
              text: "Get Started",
              href: "/contact",
              showIcon: true,
            }}
            // secondaryButton={{
            //   text: "Schedule Demo",
            //   href: "/demo",
            // }}
            backgroundImage="/img/AR.png"
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
