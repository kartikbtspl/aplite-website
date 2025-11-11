import BlankCard from "@/components/ui/BlankCard";
import { Button } from "@/components/ui/button";
import { CheckCircle, ClipboardList, Key, Server, ShieldCheck } from "lucide-react";

export default function Section3() {
  const steps = [
    {
      icon: Key,
      title: "User enters Aplite PIN",
    },
    {
      icon: Server,
      title: "API call to Aplite",
    },
    {
      icon: ShieldCheck,
      title: "Verified data returns",
    },
    {
      icon: ClipboardList,
      title: "ERP autofill's payment form",
    },
    {
      icon: CheckCircle,
      title: "User confirms & pays",
    },
  ];

  return (
    <BlankCard>
      <div className="p-10 space-y-8">
        <h1 className="text-3xl md:text-5xl font-normal leading-tight tracking-tight text-center">
          How It works
        </h1>

        <div className="space-y-4 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <Icon size={40} className="stroke-1" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-4 text-center pt-6">
          <p className="text-2xl font-medium">
            Ready to integrate verified banking data?
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
