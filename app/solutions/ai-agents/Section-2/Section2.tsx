import {  Server, CloudLightning, Cpu } from "lucide-react";
import MultiSectionCard from "@/components/ui/card";
import CardContainer from "../../../../components/ui/CardContainer";
export default function Section2() {
  const sections = [
    {
      number: "01",
      icon: <Server />,
      title: "Machine-readable data structure",
      description:
        "No PDFs, no invoices, no parsing required. Aplite returns structured JSON that agents can process instantly.",
    },
    {
      number: "02",
      icon: <CloudLightning />,
      title: "All payment types supported",
      description:
        "ACH, Wire, and SWIFT details formatted for instant agent processing. One API call returns everything needed for the payment type.",
    },
    {
      number: "03",
      icon: <Cpu />,
      title: "Built for autonomy",
      description:
        "Verified data means agents can execute payments without human oversight—trust is built into the infrastructure.",
    },
  ];

  return (
    <div className="rounded space-y-8 mb-8 mx-auto">
      <MultiSectionCard
        sections={sections}
        columns={3}
        iconSize={45}
        iconOffsetY={6}
      />

      <div className="space-y-6">
        <h1 className="flex flex-wrap items-center justify-center text-4xl font-extrabold text-slate-900 gap-2 md:gap-3 leading-tight text-center">
          AI agents lack payment
          <span>Infrastructure</span>
        </h1>
        <p className="text-center  justify-center text-lg text-[#111A4A]">
          As the world transitions into an agentic future where AI agents handle
          a majority of global transaction volume, they need a new way to
          interact with payment systems. Right now, agents lack the fundamental
          infrastructure to financially engage with the real world.
        </p>
      </div>

      <CardContainer>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-md text-[#111A4A] leading-tight text-center">
            Ready to build autonomous payment systems?
          </h1>
        </div>
      </CardContainer>
    </div>
  );
}
