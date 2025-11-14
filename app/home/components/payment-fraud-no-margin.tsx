"use client";

import CardComponent from "@/components/ui/CardComponent";
import CardsGrid from "@/components/ui/GridCard";

export function PaymentFraudNoMargin() {
  return (
    <div className="">
      <div className="p-10 text-[#141b3c]">
        <h2 className="text-4xl md:text-7xl font-light tracking-tight text-left leading-tight">
          Payment fraud is<br className="hidden lg:block" />
          <span className="sm:pl-0 md:pl-0 lg:pl-20 text-[#141b3c]"> preventable when you</span><br className="hidden lg:block" />
          <span className="sm:pl-0 md:pl-0 lg:pl-40 text-[#141b3c]"> verify before you pay.</span>
        </h2>

      </div>
      <div className="">
        <CardsGrid>
          <CardComponent
            imageSrc="/home/payment-fraud-no-margin/search.gif"
            title="Search"
            subtitle="Look up any business instantly using our verified database - simple, fast, and reliable."
          />
          <CardComponent
            imageSrc="/home/payment-fraud-no-margin/review.gif"
            title="Review"
            subtitle="Check verified banking details with complete transparency and peace of mind."
          />
          <CardComponent
            imageSrc="/home/payment-fraud-no-margin/pay.gif"
            title="Pay"
            subtitle="Send money confidently, knowing every transaction reaches the right business."
          />
        </CardsGrid>
      </div>
    </div>
  );
}