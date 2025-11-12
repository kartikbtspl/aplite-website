import BlankCard from "@/components/ui/BlankCard";
import CardComponent from "@/components/ui/CardComponent";
import CardsGrid from "@/components/ui/GridCard";
import { Button } from "@/components/ui/button";

export default function Section2() {
  // Card data array
  const cardData = [
    {
      imageSrc: "/solutions/ai-agents/machine-readable.png",
      title: "Machine-readable data structure",
      subtitle:
        "No PDFs, no invoices, no parsing required. Aplite returns structured JSON that agents can process instantly.",
    },
    {
      imageSrc: "/solutions/ai-agents/all-payment-types.png",
      title: "All payment types supported",
      subtitle:
        "ACH, Wire, and SWIFT details formatted for instant agent processing. One API call returns everything needed for the payment type.",
    },
    {
      imageSrc: "/solutions/ai-agents/built-for-autonomy.png",
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
      <div className="p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end max-w-7xl mx-auto">
          {/* Left side - Heading with cascading indentation */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight text-[#2A0E66]">
              <div className="mb-1">
                More tools in
              </div>
              <div className="pl-16 md:pl-20 lg:pl-24 mb-1">
                your toolkit than
              </div>
              <div className="pl-32 md:pl-40 lg:pl-48">
                ever before.
              </div>
            </h1>
          </div>
          
          {/* Right side - Description aligned to the bottom right */}
          <div className="flex justify-end">
            <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xs text-right">
              Effortlessly manage every merchant in your portfolio, with an all-in-one sales hub that brings CRM features, digital application creation, and dynamic residual payouts into one place.
            </p>
          </div>
        </div>
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
        <h1 className="text-3xl md:text-5xl font-normal leading-tight tracking-tight text-center">
          AI agents lack payment infrastructure
        </h1>

        <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          As the world transitions into an agentic future where AI agents handle
          a majority of global transaction volume, they need a new way to
          interact with payment systems. Right now, agents lack the fundamental
          infrastructure to financially engage with the real world.
        </p>

        <div className="space-y-4 text-center">
          <p className="text-2xl font-medium">
            Ready to build autonomous payment systems?
          </p>
          <Button
            variant="primary"
            size="sm"
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
