import BlankCard from "@/components/ui/BlankCard";
import CardComponent from "@/components/ui/CardComponent";
import CardsGrid from "@/components/ui/GridCard";
import { Button } from "@/components/ui/button";

export default function Section2() {
  // Card data array
  const cardData = [
    {
      imageSrc: "/img/AR.png",
      title: "Machine-readable data structure",
      subtitle:
        "No PDFs, no invoices, no parsing required. Aplite returns structured JSON that agents can process instantly.",
    },
    {
      imageSrc: "/img/AR.png",
      title: "All payment types supported",
      subtitle:
        "ACH, Wire, and SWIFT details formatted for instant agent processing. One API call returns everything needed for the payment type.",
    },
    {
      imageSrc: "/img/AR.png",
      title: "Built for autonomy",
      subtitle:
        "Verified data means agents can execute payments without human oversight—trust is built into the infrastructure.",
    },
  ];

  // Features data array for the grid
  const featuresData = [
    "Structured payment data",
    "No parsing required",
    "Instant verification",
    "Multi-payment type support",
    "Autonomous execution ready",
    "Human-verified infrastructure",
    "Real-time API access",
    "Built for AI agents",
  ];

  return (
    <BlankCard>
      <div className="p-10">
        <h1 className="text-4xl md:text-7xl font-light tracking-tight text-[#072484] flex flex-col">
          <div className="flex justify-start mb-4">
            <strong className="mx-4">AI Agents</strong> Need Payment
          </div>

          <div className="flex justify-end">
            Infrastructure <strong className="mx-4">Built for Autonomy</strong>
          </div>
        </h1>
      </div>

      <div className="px-10">
        <CardsGrid>
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </CardsGrid>
      </div>

      <div className="p-10 space-y-8">
        <h1 className="text-3xl md:text-5xl font-normal leading-tight tracking-tight text-[#072484] text-center">
          AI agents lack payment <strong>infrastructure</strong>
        </h1>
        
        <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          As the world transitions into an agentic future where AI agents handle a majority of global transaction volume, they need a new way to interact with payment systems. Right now, agents lack the fundamental infrastructure to financially engage with the real world.
        </p>

        <div className="space-y-4 text-center">
          <p className="text-lg text-[#072484] font-medium">
            Ready to build autonomous payment systems?
          </p>
          <Button
            variant="primary"
            size="md"
            showIcon={true}
            onClick={() => alert("Contact Us...")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </BlankCard>
  );
}
