import BlankCard from "@/components/ui/BlankCard";
import CardComponent from "@/components/ui/CardComponent";
import CardsGrid from "@/components/ui/GridCard";
import ReusableReactIcon from "@/components/ui/ReusableReactIcon";
import { CheckCircle } from "lucide-react";

export default function Section2() {
  // Card data array
  const cardData = [
    {
      imageSrc: "/img/AR.png",
      title: "Embed Aplite PINs on invoices",
      subtitle:
        "Vendors add their Aplite PIN instead of account numbers. Customers pay using tamper-proof information pulled directly from Aplite—no altered PDFs, no fraudulent wire instructions.",
    },
    {
      imageSrc: "/img/AR.png",
      title: "Faster payments, zero fraud risk",
      subtitle:
        "Customers pay immediately when they trust the banking details. No verification delays, no compromised attachments, just verified information and instant confidence.",
    },
  ];

  // Features data array for the grid
  const featuresData = [
    "Eliminate invoice-based payment fraud",
    "Reduce payment delays",
    "Professional verification badge",
    "Competitive differentiation",
    "Simple PIN integration",
    "No complex API required",
    "Instant customer trust",
    "Improved payment success rates",
  ];

  return (
    <BlankCard>
      <div className="p-10">
        <h1 className="text-4xl md:text-7xl font-light tracking-tight text-[#072484] flex flex-col">
          <div className="flex justify-start mb-4">
            <strong className="mx-4">Secure</strong> Invoice Payments
          </div>

          <div className="flex justify-end">
            With <strong className="mx-4">Verified</strong> Banking Details
          </div>
        </h1>
      </div>

      <div className="px-10 pb-32">
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

      <div className="p-10">
        <h1 className="text-3xl flex justify-center mt-8 space-y-6 md:text-5xl font-lg leading-tight tracking-tight text-[#072484]">
          <div className="flex justify-start">
            Why <strong className="mx-1">invoicing platforms</strong> integrate
            <strong className="mx-4">Aplite</strong>
          </div>
        </h1>
      </div>

      {/* 2-column grid for features */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto py-6">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <ReusableReactIcon
                sizeprop="lg"
                squareBgColor="#003cff"
                icon={CheckCircle}
                iconBgColor="#93c5fd"
              />
            </div>
            <p className="text-lg font-medium text-[#1b2f6e] leading-tight">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </BlankCard>
  );
}
