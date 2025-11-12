import AnimatedSplitSteps from "@/components/ui/AnimatedSplitSection";
import BlankCard from "@/components/ui/BlankCard";
import CardComponent from "@/components/ui/CardComponent";
import CardsGrid from "@/components/ui/GridCard";
import ReusableReactIcon from "@/components/ui/ReusableReactIcon";
import {
  CheckCircle,
  ClipboardList,
  Key,
  Server,
  ShieldCheck,
} from "lucide-react";

export default function Section2() {
  // Card data array
  const cardData = [
    {
      imageSrc: "/solutions/erp/integrate-aplites.png",
      title: "Integrate Aplite's API to autofill payment information",
      subtitle:
        "Users enter an Aplite PIN—verified banking details populate instantly. Cut manual entry by 99%, eliminate transcription errors, and reduce payment failures.",
    },
    {
      imageSrc: "/solutions/erp/keep-vendor-data.png",
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

  const steps = [
    {
      id: 1,
      icon: Key,
      title: "User enters Aplite PIN",
      description:
        "The paying user or system inputs the unique Aplite PIN found on the invoice.",
      images: ["/solutions/erp/workflow-1.png"],
    },
    {
      id: 2,
      icon: Server,
      title: "API call to Aplite",
      description:
        "Your system initiates a secure API request to the Aplite service, sending the PIN for verification.",
      images: ["/solutions/erp/workflow-2.png"],
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Verified data returns",
      description:
        "Aplite verifies the PIN against the business's profile and returns the confirmed banking details securely.",
      images: ["/solutions/erp/workflow-3.png"],
    },
    {
      id: 4,
      icon: ClipboardList,
      title: "ERP autofill's payment form",
      description:
        "The returned, verified banking information automatically populates the payment fields within your ERP or accounting software.",
      images: ["/solutions/erp/workflow-4.png"],
    },
    {
      id: 5,
      icon: CheckCircle,
      title: "User confirms & pays",
      description:
        "With instant confidence in the payee's details, the user quickly confirms the payment and completes the transaction.",
      images: ["/solutions/erp/workflow-5.png"],
    },
  ];
  return (
    <BlankCard>
      <div className="p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end max-w-7xl mx-auto">
          {/* Left side - Heading with cascading indentation */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight text-[#2A0E66]">
              <div className="mb-1">
                More tools in
              </div>
              <div className="pl-16 md:pl-20 lg:pl-24 mb-1">
                your toolkit than
              </div>
              <div className="pl-32 md:pl-40 lg:pl-48">
                ever before.
              </div>
            </h1>
          </div>
          
          {/* Right side - Description aligned to the bottom right */}
          <div className="flex justify-end">
            <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xs text-right">
              Effortlessly manage every merchant in your portfolio, with an all-in-one sales hub that brings CRM features, digital application creation, and dynamic residual payouts into one place.
            </p>
          </div>
        </div>
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
        <h1 className="text-3xl flex justify-center mt-8 space-y-6 md:text-5xl font-lg leading-tight tracking-tight">
          <div className="flex justify-start">
            Why ERP Systems integrate Aplite
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

      <div className="py-6">
        <h1 className="text-3xl md:text-5xl font-normal leading-tight tracking-tight text-center">
          How It works
        </h1>
      </div>
      <AnimatedSplitSteps steps={steps} />
    </BlankCard>
  );
}
