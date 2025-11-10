"use client";

import BlankCard from "../ui/BlankCard";
import CardComponent from "../ui/CardComponent";
import CardsGrid from "../ui/GridCard";

export function PaymentFraudSection() {
  return (
    <BlankCard className="m-0">
      <div className="p-10">
        <h2 className="text-4xl md:text-7xl font-light tracking-tight text-[#24004c] text-center">
          Payment fraud is preventable when you verify before you pay.
        </h2>
      </div>

      <div className="px-10">
        <CardsGrid>
          <CardComponent
            imageSrc="/img/AR.png"
            title="Search"
            subtitle="Look up any business instantly using our verified database - simple, fast, and reliable."
          />
          <CardComponent
            imageSrc="/img/AR.png"
            title="Review"
            subtitle="Check verified banking details with complete transparency and peace of mind."
          />
          <CardComponent
            imageSrc="/img/AR.png"
            title="Pay"
            subtitle="Send money confidently, knowing every transaction reaches the right business."
          />
        </CardsGrid>
      </div>
    </BlankCard>
  )
}