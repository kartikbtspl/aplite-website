import { CheckCircle, Key, TrendingUp, UserCircle } from "lucide-react";

import BlankCard from "@/components/ui/BlankCard";
import CardsGrid from "@/components/ui/GridCard";
import CardComponent from "@/components/ui/CardComponent";
import ReusableReactIcon from "@/components/ui/ReusableReactIcon";
import AnimatedSplitSteps from "@/components/ui/AnimatedSplitSection";
import { useEffect, useState } from "react";

export default function Section2() {
  const [iconSize, setIconSize] = useState<"sm" | "md" | "lg">("md");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setIconSize("sm");
      else if (window.innerWidth < 1024) setIconSize("md");
      else setIconSize("lg");
    };

    handleResize(); // set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const cardData = [
    {
      imageSrc: "/img/search.png",
      title: "Search and retrieve verified business",
      subtitle:
        "Find any vendor's verified payment details in seconds—no more chasing contacts, validating screenshots, or waiting on call-backs.",
    },
    {
      imageSrc: "/img/process-payment.png",
      title: "Process payments with confidence",
      subtitle:
        "Pay using verified banking information that's audit-ready and fraud-proof. Every profile is timestamped and immutable.",
    },
    {
      imageSrc: "/img/stay-protective.png",
      title: "Stay proactive with real-time alerts",
      subtitle:
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

  const steps = [
    {
      id: 1,
      icon: UserCircle,
      title: "Create your verified profile",
      description:
        "Set up your business profile with verified banking information.",
      images: ["/img/t1.png"],
    },
    {
      id: 2,
      icon: Key,
      title: "Add Aplite PIN to invoices",
      description:
        "Include your unique PIN instead of editable banking details.",
      images: ["/img/t2.png"],
    },
    {
      id: 3,
      icon: CheckCircle,
      title: "Access verified details",
      description:
        "They enter your PIN on Aplite and see your verified payment information.",
      images: ["/img/t3.png"],
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Get paid faster",
      description:
        "No verification delays, just immediate confidence and payment.",
      images: ["/img/t4.png"],
    },
  ];

  return (
    <>
      <BlankCard>
        <div className="p-10">
          <div className="px-4 sm:px-6 md:px-10">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-tight flex flex-col gap-3 sm:gap-4 leading-tight">
              <div className="flex flex-col sm:flex-row sm:justify-start text-center sm:text-left">
                Simplify
                <strong className="mx-0 sm:mx-4 font-semibold text-primary">
                  Vendor Payments
                </strong>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-end text-center sm:text-right">
                with
                <strong className="mx-0 sm:mx-4 font-semibold text-primary">
                  Verified Data
                </strong>
              </div>
            </h1>
          </div>

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

          <h1 className="text-3xl flex justify-center pb-8 md:text-5xl font-lg leading-tight tracking-tight ">
            <div className="flex justify-start">
              Why Accounts Receivable Teams choose Aplite
            </div>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start sm:items-center gap-3 text-base sm:text-lg md:text-xl"
              >
                <div className="flex-shrink-0">
                  <ReusableReactIcon
                    sizeprop={iconSize}
                    squareBgColor="#003cff"
                    icon={CheckCircle}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <p className="font-medium leading-snug sm:leading-tight">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <div className="py-6">
            <h1 className="text-3xl flex justify-center mt-8 space-y-6 md:text-5xl font-lg leading-tight tracking-tight ">
              <div className="flex justify-start">How It Works</div>
            </h1>
          </div>
        </div>

        <AnimatedSplitSteps steps={steps} />
      </BlankCard>
    </>
  );
}
