"use client";

import CardComponent from "../ui/CardComponent";
import CardsGrid from "../ui/GridCard";

export function Stats() {
  return (
    <div className="">
      <div className="p-10">
        <h2 className="text-4xl md:text-7xl font-light tracking-tight text-[#24004c] text-center">
          The True Cost of Payment Fraud
        </h2>
      </div>
      <div className="">
        <CardsGrid>
          <CardComponent
            imageSrc="/stats/79-percent.png"
            title="79%"
            subtitle="of organizations faced payment fraud in 2024 - AFP 2024 Payments Fraud and Control Report"
          />
          <CardComponent
            imageSrc="/stats/50-billion.png"
            title="$50B+"
            subtitle="lost to vendor impersonation and wire scams - FBI IC3 2024 Internet Crime Report"
          />
          <CardComponent
            imageSrc="/stats/183k-loss.png"
            title="$183k"
            subtitle="average loss per incident from payment fraud attacks"
          />
        </CardsGrid>
      </div>
    </div>
  );
}