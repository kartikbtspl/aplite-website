"use client";

import CardComponent from "../ui/CardComponent";
import CardsGrid from "../ui/GridCard";

export function PaymentFraudNoMargin() {
  return (
    <div className="">
      <div className="p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-light tracking-tight text-[#141b3c] text-left leading-tight">
          Payment fraud is<br />
          <span className="pl-8 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-40 text-black">preventable when you</span><br />
          <span className="pl-16 sm:pl-32 md:pl-48 lg:pl-64 xl:pl-80 text-black">verify before you pay.</span>
        </h2>

      </div>
      <div className="">
        <CardsGrid>
          <CardComponent
            imageSrc="/home/search.gif"
            title="Search"
            subtitle="Look up any business instantly using our verified database - simple, fast, and reliable."
          />
          <CardComponent
            imageSrc="/home/review.gif"
            title="Review"
            subtitle="Check verified banking details with complete transparency and peace of mind."
          />
          <CardComponent
            imageSrc="/home/pay.gif"
            title="Pay"
            subtitle="Send money confidently, knowing every transaction reaches the right business."
          />
        </CardsGrid>
      </div>
    </div>
  );
}