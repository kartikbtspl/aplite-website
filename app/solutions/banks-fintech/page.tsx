import { PageHero } from "@/components/sections/page-hero";
import Section2 from "./Section-2/Section2";

export default function BanksFintechPage() {
  return (
    <>
      <div className="mx-auto space-y-10">
        <section>
          <PageHero
            title="Built for Banks & Fintech "
            subtitle="Integrate verified, structured payment data that reduces errors, speeds processing, and eliminates fraud risk."
            primaryButton={{
              text: "Talk To Our Team",
              href: "/contact",
              showIcon: true,
            }}
            //  secondaryButton={{
            //    text: "Schedule Demo",
            //    href: "/demo",
            //  }}
            backgroundImage="/img/Banks & Fintech.png"
            backgroundOverlay={true}
          />
        </section>

        <section>
          <Section2 />
        </section>
      </div>
    </>
  );
}
