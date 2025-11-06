import { Shield, TrendingUp, LockIcon, CheckCircle } from "lucide-react";
import MultiSectionCard from "@/components/ui/card";
import CardContainer from "../../../../components/ui/CardContainer";
export default function Section2() {
  const sections = [
    {
      number: "01",
      icon: <Shield />,
      title: "Secure Payment",
      description:
        "Eliminate the risk of email-based and invoice-based payment information exchanges. Your banking details live in a secure, verified profile.",
    },
    {
      number: "02",
      icon: <LockIcon />,
      title: "Digital Payment Profile",
      description:
        "Your payment information lives in a tamper-proof profile that cannot be edited or altered like invoices and PDFs. Customers always have your correct, verified details.",
    },
    {
      number: "03",
      icon: <TrendingUp />,
      title: "Build Trust",
      description:
        "WWhen customers pay using your Aplite profile, they know the banking details are legitimate, reducing payment delays and fraud concerns.",
    },
  ];
  const features = [
    "Cut verification time by 99%",
    "Stop vendor impersonation fraud",
    "Eliminate manual data entry",
    "No more email-based banking updates",
    "Reduce payment errors to zero",
    "Real-time change notifications",
    "Audit-ready documentation",
    "Human-verified, not bot-scraped",
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
        <h1 className="flex flex-wrap items-center justify-center text-3xl md:text-4xl font-extrabold text-slate-900 gap-2 md:gap-3 leading-tight text-center px-4">
          Why
          <span className="text-nowrap">Accounts Payable</span>
          teams choose Aplite
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
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </CardContainer>

      <CardContainer>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-md text-[#111A4A] leading-tight text-center">
            Ready to transform your AP process?
          </h1>
        </div>
      </CardContainer>
    </div>
  );
}
