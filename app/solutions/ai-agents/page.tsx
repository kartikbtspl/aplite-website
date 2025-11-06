import { PageHero } from "@/components/sections/page-hero";
import Section2 from "./Section-2/Section2";

export default function AIAgentsPage() {
  return (
    <>
      <div className="mx-auto space-y-10">
        <section>
          <PageHero
            title="The Agentic Future"
            subtitle="We're building the structured payment infrastructure that AI agents need to process transactions autonomously and accurately."
            primaryButton={{
              text: "Talk To Sales Team",
              href: "/contact",
              showIcon: true,
            }}
            //  secondaryButton={{
            //    text: "Schedule Demo",
            //    href: "/demo",
            //  }}
            backgroundImage="/img/The Agentic Future.png"
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
