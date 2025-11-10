import BlankCard from "@/components/ui/BlankCard";
import CardComponent from "@/components/ui/CardComponent";
import CardsGrid from "@/components/ui/GridCard";
import ReusableReactIcon from "@/components/ui/ReusableReactIcon";
import { CheckCircle } from "lucide-react";

export default function Section2() {
  // Card data array
  const cardData = [
    {
      imageSrc: "/img/AR.png",
      title: "Integrate Aplite's API to autofill payment information",
      subtitle:
        "Users enter an Aplite PIN—verified banking details populate instantly. Cut manual entry by 99%, eliminate transcription errors, and reduce payment failures.",
    },
    {
      imageSrc: "/img/AR.png",
      title: "Keep vendor data current automatically",
      subtitle:
        "Real-time updates from Aplite mean no outdated banking information in your ERP. Every payment uses verified, current details with audit-ready documentation.",
    },
  ];

  // Features data array for the grid
  const featuresData = [
    "99% reduction in manual entry",
    "Zero transcription errors",
    "Real-time data updates",
    "Audit-ready documentation",
    "Eliminate payment failures",
    "Verified banking details",
    "Seamless API integration",
    "Automatic vendor updates",
  ];

  return (
    <BlankCard>
      <div className="p-10">
        <h1 className="text-4xl md:text-7xl font-light tracking-tight text-[#072484] flex flex-col">
          <div className="flex justify-start mb-4">
            <strong className="mx-4">Autofill</strong> Verified Banking
          </div>

          <div className="flex justify-end">
            Information in <strong className="mx-4">Your ERP</strong>
          </div>
        </h1>
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
        <h1 className="text-3xl flex justify-center mt-8 space-y-6 md:text-5xl font-lg leading-tight tracking-tight text-[#072484]">
          <div className="flex justify-start">
            Why <strong className="mx-1">ERP Systems</strong> integrate
            <strong className="mx-4">Aplite</strong>
          </div>
        </h1>
      </div>

      {/* 2-column grid for features */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto py-6">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <ReusableReactIcon
                sizeprop="lg"
                squareBgColor="#003cff"
                icon={CheckCircle}
                iconBgColor="#93c5fd"
              />
            </div>
            <p className="text-lg font-medium text-[#1b2f6e] leading-tight">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </BlankCard>
  );
}
