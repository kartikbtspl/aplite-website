import MultiSectionCard from "@/components/ui/card";
import { RefreshCcw, Server } from "lucide-react";

export default function Section2() {
  const sections = [
    {
      number: "01",
      icon: <Server />,
      title: "Integrate Aplite's API to autofill payment information",
      description:
        "Users enter an Aplite PIN—verified banking details populate instantly. Cut manual entry by 99%, eliminate transcription errors, and reduce payment failures.",
    },
    {
      number: "02",
      icon: <RefreshCcw />,
      title: "Keep vendor data current automatically",
      description:
        "Real-time updates from Aplite mean no outdated banking information in your ERP. Every payment uses verified, current details with audit-ready documentation.",
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
    </div>
  );
}
