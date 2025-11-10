import BlankCard from "@/components/ui/BlankCard";
import { Button } from "@/components/ui/button";
import { CheckCircle, Key, UserCircle } from "lucide-react";

export default function Section3() {
  const steps = [
    {
      icon: UserCircle,
      title: "Vendor adds Aplite PIN to invoice template",
      description: "Instead of printing editable banking details on invoices.",
    },
    {
      icon: Key,
      title: "Customer enters PIN on Aplite",
      description: "Quick verification of who they're paying.",
    },
    {
      icon: CheckCircle,
      title: "Verified banking details display instantly—customer pays with confidence",
      description: "Tamper-proof information they can trust.",
    },
  ];

  return (
    <BlankCard>
      <div className="p-10 space-y-8">
        <h1 className="text-3xl md:text-5xl font-normal leading-tight tracking-tight text-[#072484] text-center">
          How It <strong>Works</strong>
        </h1>

        <div className="space-y-4 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <Icon size={40} className="text-[#072484] stroke-1" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-4 text-center pt-6">
          <p className="text-lg text-[#072484] font-medium">
            Ready to eliminate invoice fraud?
          </p>
          <Button
            variant="primary"
            size="md"
            showIcon={true}
            onClick={() => alert("Talk To Our Team...")}
          >
            Talk To Our Team
          </Button>
        </div>
      </div>
    </BlankCard>
  );
}
