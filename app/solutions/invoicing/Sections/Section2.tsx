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
      imageSrc: "/solutions/invoicing/embed-aplite.png",
      title: "Embed Aplite PINs on invoices",
      subtitle:
        "Vendors add their Aplite PIN instead of account numbers. Customers pay using tamper-proof information pulled directly from Aplite—no altered PDFs, no fraudulent wire instructions.",
    },
    {
      imageSrc: "/solutions/invoicing/faster-payments.png",
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
      images: ["/solutions/invoicing/feature-1.png"],
    },
    {
      id: 2,
      icon: Key,
      title: "Customer enters PIN on Aplite",
      description:
        "The customer inputs the PIN on the Aplite platform (or via API) to initiate quick and easy verification of the payee.",
      images: ["/solutions/invoicing/feature-2.png"],
    },
    {
      id: 3,
      icon: CheckCircle,
      title:
        "Verified banking details display instantly - customer pays with confidence",
      description:
        "The customer instantly receives the secure, tamper-proof banking details, allowing them to pay with immediate trust and confidence.",
      images: ["/solutions/invoicing/feature-3.png"],
    },
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
