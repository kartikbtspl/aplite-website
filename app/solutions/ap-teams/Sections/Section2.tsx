import BlankCard from "@/components/ui/BlankCard";
import CardComponent from "@/components/ui/CardComponent";
import CardsGrid from "@/components/ui/GridCard";
import ReusableReactIcon from "@/components/ui/ReusableReactIcon";
import { CheckCircle } from "lucide-react";

export default function Section2() {
  // Card data array
  const cardData = [
    {
      imageSrc: "/img/AP.png",
      title: "Secure Payment",
      subtitle:
        "Eliminate the risk of email-based and invoice-based payment information exchanges. Your banking details live in a secure, verified profile.",
    },
    {
      imageSrc: "/img/AP.png",
      title: "Digital Payment Profile",
      subtitle:
        "Your payment information lives in a tamper-proof profile that cannot be edited or altered like invoices and PDFs. Customers always have your correct, verified details.",
    },
    {
      imageSrc: "/img/AP.png",
      title: "Build Trust",
      subtitle:
        "When customers pay using your Aplite profile, they know the banking details are legitimate, reducing payment delays and fraud concerns.",
    },
  ];

  // Features data array for the grid
  const featuresData = [
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
    <BlankCard>
      <div className="p-10">
        <h1 className="text-4xl md:text-7xl font-light tracking-tight  flex flex-col">
          <div className="flex justify-start mb-4">
            <strong className="mx-4"> Secure </strong> Digital Payments
          </div>

          <div className="flex justify-end">
            Built on <strong className="mx-4">Trust </strong>
          </div>
        </h1>
      </div>

      <div className="px-10">
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
        <h1 className="text-3xl flex justify-center mt-8 space-y-6 md:text-5xl font-lg leading-tight tracking-tight ">
          <div className="flex justify-start">
            Why Accounts Payable Teams choose Aplite
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
    </BlankCard>
  );
}
