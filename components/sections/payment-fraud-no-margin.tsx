"use client";

import CardComponent from "../ui/CardComponent";
import CardsGrid from "../ui/GridCard";

export function PaymentFraudNoMargin() {
  return (
    <div className="">
      <div className="p-10 text-[#141b3c]">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-light tracking-tight  text-left leading-tight">
          Payment fraud is<br />
          <span className="pl-20 sm:pl-0 md:pl-20 lg:pl-20 text-[#141b3c]">preventable when you</span><br />
          <span className="pl-40 sm:pl-0 md:pl-40 lg:pl-40 text-[#141b3c]">verify before you pay.</span>
        </h2>

      </div>
      <div className="">
        <CardsGrid>
          <CardComponent
            imageSrc="/search.gif"
            title="Search"
            subtitle="Look up any business instantly using our verified database - simple, fast, and reliable."
          />
          <CardComponent
            imageSrc="/review.gif"
            title="Review"
            subtitle="Check verified banking details with complete transparency and peace of mind."
          />
          <CardComponent
            imageSrc="/pay.gif"
            title="Pay"
            subtitle="Send money confidently, knowing every transaction reaches the right business."
          />
        </CardsGrid>
      </div>
    </div>
  );
}