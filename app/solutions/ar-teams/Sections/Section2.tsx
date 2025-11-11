import {
  CheckCircle,
  Bell,
  Search,
  CircleArrowOutUpRight,
  UserCircle,
} from "lucide-react";
import MultiSectionCard from "@/components/ui/card";
import CardContainer from "../../../../components/ui/CardContainer";
import BlankCard from "@/components/ui/BlankCard";
import CardsGrid from "@/components/ui/GridCard";
import CardComponent from "@/components/ui/CardComponent";
import Button from "@/components/ui/Buttons";
import ReusableReactIcon from "@/components/ui/ReusableReactIcon";
export default function Section2() {
  const cardData = [
    {
      imageSrc: "/img/AR.png",
      title: "Search and retrieve verified business",
      subtitle:
        "Find any vendor's verified payment details in seconds—no more chasing contacts, validating screenshots, or waiting on call-backs.",
    },
    {
      imageSrc: "/img/AR.png",
      title: "Process payments with confidence",
      subtitle:
        "Pay using verified banking information that's audit-ready and fraud-proof. Every profile is timestamped and immutable.",
    },
    {
      imageSrc: "/img/AR.png",
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

  return (
    <>
      <BlankCard>
        <div className="p-10">
          <h1 className="text-4xl md:text-7xl font-light tracking-tight  flex flex-col">
            <div className="flex justify-start mb-4">
              Simplify
              <strong className="mx-4"> Vendor Payments</strong>
            </div>

            <div className="flex justify-end">
              with <strong className="mx-4"> Verified Data </strong>
            </div>
          </h1>

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

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto ">
            {features.map((feature, index) => (
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
            <h1 className="text-3xl flex justify-center mt-8 space-y-6 md:text-5xl font-lg leading-tight tracking-tight ">
              <div className="flex justify-start">
                How It Works
              </div>
            </h1>
          </div>

          <div className="flex gap-8">
            <div className="flex-1   justify-center">
              <BlankCard> .</BlankCard>
            </div>
            <div className="flex-1">
              <div>
                {/* 1 */}
                {/* <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-full flex items-center justify-center">
                      <UserCircle
                        size={35}
                        className="md:size-[45px] stroke-1"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-base md:text-lg font-extrabold text-gray-900">
                      Vendor adds Aplite PIN to invoice template
                    </div>
                    <div className="text-xs md:text-sm text-[#718096] mt-1">
                      Instead of printing editable banking details on invoices.
                    </div>
                  </div>
                </div> */}
                {/* 2 */}
                {/* <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-full flex items-center justify-center">
                      <UserCircle
                        size={35}
                        className="md:size-[45px] stroke-1"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-base md:text-lg font-extrabold text-gray-900">
                      Vendor adds Aplite PIN to invoice template
                    </div>
                    <div className="text-xs md:text-sm text-[#718096] mt-1">
                      Instead of printing editable banking details on invoices.
                    </div>
                  </div>
                </div> */}

                {/* 3 */}
                {/* <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-full flex items-center justify-center">
                      <UserCircle
                        size={35}
                        className="md:size-[45px] stroke-1"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-base md:text-lg font-extrabold text-gray-900">
                      Vendor adds Aplite PIN to invoice template
                    </div>
                    <div className="text-xs md:text-sm text-[#718096] mt-1">
                      Instead of printing editable banking details on invoices.
                    </div>
                  </div>
                </div> */}

                {/* 4 */}
                {/* <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-full flex items-center justify-center">
                      <UserCircle
                        size={35}
                        className="md:size-[45px] stroke-1"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-base md:text-lg font-extrabold text-gray-900">
                      Vendor adds Aplite PIN to invoice template
                    </div>
                    <div className="text-xs md:text-sm text-[#718096] mt-1">
                      Instead of printing editable banking details on invoices.
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </BlankCard>
    </>
  );
}
