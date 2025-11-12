import CardComponent from "@/components/ui/CardComponent";
import CardsGrid from "@/components/ui/GridCard";

export default function Section3() {
  return (
    <section className="flex flex-col gap-8 ">
      <div>
        <h1 className="text-3xl md:text-5xl font-normal leading-tight tracking-tight text-[#072484] text-center">
          AI agents lack payment <strong>infrastructure</strong>
        </h1>
      </div>
      <div className="mb-40">
        <CardsGrid>
        <CardComponent
          imageSrc="/solutions/ap-teams/hero.png"
          title="For accounts payable teams"
          subtitle="Search, verify, and pay in seconds."
        />
        <CardComponent
          imageSrc="/solutions/ar-teams/hero.png"
          title="For accounts receivable teams"
          subtitle="Share your banking information securely through an immutable payment profile that customers can trust."
        />
        <CardComponent
          imageSrc="/solutions/banks-fintech/hero.png"
          title="Banks and fintech's"
          subtitle="Integrate verified, structured payment data that reduces errors, speeds processing, and eliminates fraud risk."
        />
        <CardComponent
          imageSrc="/solutions/ai-agents/hero.png"
          title="The agentic future"
          subtitle="We're building the structured payment infrastructure that AI agents need to process transactions autonomously and accurately."
        />
      </CardsGrid>
      </div>
      
    </section>
  );
}