"use client";

import BlankCard from "@/components/ui/BlankCard";
import CardsGrid from "@/components/ui/GridCard";
import CardComponent from "@/components/ui/CardComponent";
import Button from "@/components/ui/Buttons";
import { CircleArrowOutUpRight } from "lucide-react";

export default function Section2() {
  const cardData = [
    {
      imageSrc: "/solutions/banks-fintech/api.png",
      title: "Integrate Aplite's powerful API",
      subtitle:
        "Reduce manual banking information entry and eliminate payment errors by 99.9%. Our API delivers verified banking details directly into your payment flows.",
    },
    {
      imageSrc: "/solutions/banks-fintech/instant-autofill.png",
      title: "Instant autofill for payment forms",
      subtitle:
        "Users enter an Aplite PIN, choose their preferred payment method (ACH, Wire, or SWIFT), and forms autofill instantly with accurate details for the intended recipient.",
    },
    {
      imageSrc: "/solutions/banks-fintech/meet-iso.png",
      title: "Meet ISO 20022 compliance standards",
      subtitle:
        "Enrich payment data with verified business information, reduce payment fraud and returns, and ensure regulatory compliance all through one integration.",
    },
    {
      imageSrc: "/solutions/banks-fintech/turn-verification.png",
      title: "Turn verification into a competitive advantage",
      subtitle:
        "Offer your customers fraud-proof payments backed by verified banking information. Reduce chargebacks, improve success rates, and build trust at scale.",
    },
  ];

  return (
    <>
      <BlankCard>
        <div className="p-10">
          <div className="space-y-10">
            <h1 className="text-4xl md:text-7xl font-light tracking-tight flex flex-col">
              <div className="flex justify-start mb-4">
                <strong className="mx-4">Empower</strong> Your Systems
              </div>
              <div className="flex justify-end">
                with
                <strong className="mx-4">Verified Payment Intelligence.</strong>
              </div>
            </h1>

            <div className="mb-10">
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
          </div>
        </div>
      </BlankCard>
      <BlankCard className="mt-10">
        <div className="p-6 space-y-6">
          <div className="flex justify-center items-start">
            <p className="text-2xl font-medium  leading-tight">
              Ready to integrate verified banking data?
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button
              icon={CircleArrowOutUpRight}
              label="Contact Us"
              //onClick={onButtonClick}
              variant="primary"
              size="sm"
            />
          </div>
        </div>
      </BlankCard>
    </>
  );
}
