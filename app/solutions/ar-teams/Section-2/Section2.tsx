import {

  CheckCircle,
  Bell,
  Search,
} from "lucide-react";
import MultiSectionCard from "@/components/ui/card";
import CardContainer from "../../../../components/ui/CardContainer";
export default function Section2() {
  const sections = [
    {
      number: "01",
      icon: <Search />,
      title: "Search and retrieve verified business",
      description:
        "Find any vendor's verified payment details in seconds—no more chasing contacts, validating screenshots, or waiting on call-backs.",
    },
    {
      number: "02",
      icon: <CheckCircle />,
      title: "Process payments with confidence",
      description:
        "Pay using verified banking information that's audit-ready and fraud-proof. Every profile is timestamped and immutable.",
    },
    {
      number: "03",
      icon: <Bell />,
      title: "Stay proactive with real-time alerts",
      description:
        "Get notified instantly when vendor payment information changes.",
    },
  ];
  const features = [
    "Stop sending banking details via email",
    "Tamper-proof payment information",
    "Reduce payment delays",
    "Instant updates to all customers",
    "Eliminate misdirected payments",
    "Reduce customer verification calls",
    "Professional, verified presence",
    "Build trust at scale",
  ];

  return (
    <div className="max-w-[1400px] rounded space-y-6  mb-8 mx-auto">
      <MultiSectionCard
        sections={sections}
        columns={3}
        iconSize={45}
        iconOffsetY={6}
      />

      <CardContainer>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-md text-[#111A4A] leading-tight text-center">
            Ready to transform your AR process?
          </h1>
        </div>
      </CardContainer>

      <div className="space-y-6">
        <h1 className="flex flex-wrap items-center justify-center text-4xl font-extrabold text-slate-900 gap-2 md:gap-3 leading-tight text-center">
          Why
          <span>Accounts Receivable</span>
          teams choose Aplite
        </h1>
      </div>

      <CardContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 pl-24 gap-y-4 p-4">
          {features.map((text, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle
                size={20}
                className="text-[#02A54D] flex-shrink-0 mt-1"
              />
              <p className="text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </CardContainer>
    </div>
  );
}
