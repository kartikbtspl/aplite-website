import MultiSectionCard from "@/components/ui/card";
import CardContainer from "@/components/ui/CardContainer";
import { CheckCircle, CloudLightning, Server, TrendingUp } from "lucide-react";

export default function Section2() {
  const sections = [
    {
      number: "01",
      icon: <Server />,
      title: "Integrate Aplite's powerful API",
      description:
        "Reduce manual banking information entry and eliminate payment errors by 99.9%. Our API delivers verified banking details directly into your payment flows.",
    },
    {
      number: "02",
      icon: <CloudLightning />,
      title: "Instant autofill for payment forms",
      description:
        "Users enter an Aplite PIN, choose their preferred payment method (ACH, Wire, or SWIFT), and forms autofill instantly with accurate details for the intended recipient.",
    },
    {
      number: "03",
      icon: <CheckCircle />,
      title: "Meet ISO 20022 compliance standards",
      description:
        "Enrich payment data with verified business information, reduce payment fraud and returns, and ensure regulatory compliance all through one integration.",
    },
    {
      number: "04",
      icon: <TrendingUp />,
      title: "Turn verification into a competitive advantage",
      description:
        "Offer your customers fraud-proof payments backed by verified banking information. Reduce chargebacks, improve success rates, and build trust at scale.",
    },
  ];
  return (
    <div className="rounded space-y-8 mb-8 mx-auto">
      <MultiSectionCard
        sections={sections}
        columns={2}
        iconSize={45}
        iconOffsetY={6}
        showOuterPadding={true}
      />

      <CardContainer>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-md text-[#111A4A] leading-tight text-center">
            Ready to integrate verified banking data?
          </h1>
        </div>
      </CardContainer>
    </div>
  );
}
