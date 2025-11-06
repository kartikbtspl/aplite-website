import MultiSectionCard from "@/components/ui/card";
import CardContainer from "@/components/ui/CardContainer";
import { CheckCircle, Clock, LockKeyhole } from "lucide-react";

export default function Section2() {
  const sections = [
    {
      number: "01",
      icon: <LockKeyhole />,
      title: "Embed Aplite PINs on invoices",
      description:
        "Vendors add their Aplite PIN instead of account numbers. Customers pay using tamper-proof information pulled directly from Aplite—no altered PDFs, no fraudulent wire instructions.",
    },
    {
      number: "02",
      icon: <Clock />,
      title: "Faster payments, zero fraud risk",
      description:
        "Customers pay immediately when they trust the banking details. No verification delays, no compromised attachments, just verified information and instant confidence.",
    },
  ];

  const features = [
    "Eliminate invoice-based payment fraud",
    "Simple PIN integration",
    "Reduce payment delays",
    "No complex API required",
    "Professional verification badge",
    "Instant customer trust",
    "Competitive differentiation",
    "Improved payment success rates",
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

      <div className="space-y-6">
        <h1 className="flex flex-wrap items-center justify-center text-3xl md:text-4xl font-extrabold text-slate-900 gap-2 md:gap-3 leading-tight text-center px-4">
          Why
          <span>Invoicing Platforms </span>
          Integrate Aplite
        </h1>
      </div>

      <CardContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 lg:gap-x-12 gap-y-4 p-4 md:pl-12 lg:pl-24">
          {features.map((text, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle
                size={20}
                className="text-[#02A54D] flex-shrink-0 mt-1"
              />
              <p className=" text-lg text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </CardContainer>
    </div>
  );
}
