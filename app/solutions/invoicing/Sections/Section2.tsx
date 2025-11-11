import AnimatedSplitSteps from "@/components/ui/AnimatedSplitSection";
import BlankCard from "@/components/ui/BlankCard";
import CardComponent from "@/components/ui/CardComponent";
import CardsGrid from "@/components/ui/GridCard";
import ReusableReactIcon from "@/components/ui/ReusableReactIcon";
import { CheckCircle, Key, UserCircle } from "lucide-react";

export default function Section2() {
  // Card data array
  const cardData = [
    {
      imageSrc: "/img/embed-aplite.png",
      title: "Embed Aplite PINs on invoices",
      subtitle:
        "Vendors add their Aplite PIN instead of account numbers. Customers pay using tamper-proof information pulled directly from Aplite—no altered PDFs, no fraudulent wire instructions.",
    },
    {
      imageSrc: "/img/Faster-payments-zero-fraud-risk.png",
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

  const steps = [
    {
      id: 1,
      icon: UserCircle,
      title: "Vendor adds Aplite PIN to invoice template",
      description:
        "The vendor replaces editable banking details on their invoices with their unique, non-editable Aplite PIN.",
      images: ["/img/i1.png"],
    },
    {
      id: 2,
      icon: Key,
      title: "Customer enters PIN on Aplite",
      description:
        "The customer inputs the PIN on the Aplite platform (or via API) to initiate quick and easy verification of the payee.",
      images: ["/img/i2.png"],
    },
    {
      id: 3,
      icon: CheckCircle,
      title:
        "Verified banking details display instantly - customer pays with confidence",
      description:
        "The customer instantly receives the secure, tamper-proof banking details, allowing them to pay with immediate trust and confidence.",
      images: ["/img/i3.png"],
    },
  ];
  return (
    <BlankCard>
      <div className="p-10">
        <h1 className="text-4xl md:text-7xl font-light tracking-tight flex flex-col">
          <div className="flex justify-start mb-4">
            Eliminate <strong className="mx-4">Invoice Fraud</strong>
          </div>

          <div className="flex justify-end">
            Build <strong className="mx-4"> Instant Trust</strong>
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
        <h1 className="text-3xl flex justify-center mt-8 space-y-6 md:text-5xl font-lg leading-tight tracking-tight">
          <div className="flex justify-start">
            Why Invoicing Platforms integrate Aplite
          </div>
        </h1>
      </div>

      {/* 2-column grid for features */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto py-6">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <ReusableReactIcon
                sizeprop="md"
                squareBgColor="#003cff"
                icon={CheckCircle}
                iconBgColor="#93c5fd"
              />
            </div>
            <p className="text-xl font-medium  leading-tight">{feature}</p>
          </div>
        ))}
      </div>

      <div className="py-6">
        <h1 className="text-3xl md:text-5xl font-normal leading-tight tracking-tight text-center">
          How It Works
        </h1>

        <AnimatedSplitSteps steps={steps} />
      </div>
    </BlankCard>
  );
}
