import { ShieldCheck, Clock3, BarChart2, CheckCircle2 } from "lucide-react";
import { FileLock } from "lucide-react";// example Lucide icons
import CardsGrid from "../ui/GridCard";
import CardComponent from "../ui/CardComponent";

export function FinancialTeamFeatures() {
  return (
    <div className=" bg-white mb-40 mt-20">
      <div className="p-10">
        <h2 className="text-4xl md:text-7xl font-light tracking-tight text-[#24004c] text-center">
          Built For The whole Financial Team
        </h2>
      </div>
      <div className="">
        <CardsGrid>
          <CardComponent
            imageSrc="/img/AR.png"
            title="Stops fraud at the source"
            subtitle="No more fake invoices, compromised emails, or altered payment details. Every banking update is verified before it ever reaches your AP team, protecting you from the start."
          />
          <CardComponent
            imageSrc="/img/AR.png"
            title="Grows stronger with every business"
            subtitle="Each company that joins Aplite strengthens the network, making every transaction more secure. Together, we’re building the global trust layer for business payments."
          />
          <CardComponent
            imageSrc="/img/AR.png"
            title="Cuts verification time by 99%"
            subtitle="Instantly search any business and access verified banking information in seconds. Eliminate manual checks and speed up every payment with total confidence."
          />
          <CardComponent
            imageSrc="/img/AR.png"
            title="Keeps you in control"
            subtitle="Get real-time alerts for every banking change, with full visibility and audit-ready timestamps. Stay informed and in charge before every payment you make."
          />
        </CardsGrid>
      </div>
    </div>
  );
}
