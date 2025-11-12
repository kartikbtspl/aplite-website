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
      imageSrc: "/api.png",
      title: "Integrate Aplite's API to autofill payment information",
      subtitle:
        "Users enter an Aplite PIN—verified banking details populate instantly. Cut manual entry by 99%, eliminate transcription errors, and reduce payment failures.",
    },
    {
      imageSrc: "/img/keep-vendor-data.png",
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
      images: ["/img/e1.png"],
    },
    {
      id: 2,
      icon: Server,
      title: "API call to Aplite",
      description:
        "Your system initiates a secure API request to the Aplite service, sending the PIN for verification.",
      images: ["/img/e2.png"],
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Verified data returns",
      description:
        "Aplite verifies the PIN against the business's profile and returns the confirmed banking details securely.",
      images: ["/img/e3.png"],
    },
    {
      id: 4,
      icon: ClipboardList,
      title: "ERP autofill's payment form",
      description:
        "The returned, verified banking information automatically populates the payment fields within your ERP or accounting software.",
      images: ["/img/e4.png"],
    },
    {
      id: 5,
      icon: CheckCircle,
      title: "User confirms & pays",
      description:
        "With instant confidence in the payee's details, the user quickly confirms the payment and completes the transaction.",
      images: ["/img/e5.png"],
    },
  ];
  return (
    <BlankCard>
      <div className="p-10">
        <h1 className="text-4xl md:text-7xl font-light tracking-tight flex flex-col">
          <div className="flex justify-start mb-4">
            Integrate <strong className="mx-4">Once only</strong> &
          </div>

          <div className="flex justify-end">
            Always Pay with <strong className="mx-4">Verified Data.</strong>
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
