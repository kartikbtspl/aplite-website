import { ShieldCheck, Clock3, BarChart2, CheckCircle2 } from "lucide-react";
import { FileLock } from "lucide-react";// example Lucide icons
import CardsGrid from "../ui/GridCard";
import CardComponent from "../ui/CardComponent";

export function WhoWeServe() {
  return (
    <div className=" bg-white mb-40 mt-20">
      <div className="p-10">
        <h2 className="text-4xl md:text-7xl font-light tracking-tight text-[#24004c] text-center">
          Who We Serve
        </h2>
      </div>
      <div className="">
        <CardsGrid>
          <CardComponent
            imageSrc="/img/AR.png"
            title="Accounts Payable Teams"
            subtitle="Search, verify, and pay in seconds"
          />
          <CardComponent
            imageSrc="/img/AR.png"
            title="Accounts Receivable Teams"
            subtitle="Share your banking information securely through an immutable payment profile that customers
can trust."
          />
          <CardComponent
            imageSrc="/img/AR.png"
            title="Banks & Fintechs"
            subtitle="Integrate verified, structured payment data that reduces errors, speeds processing, and
eliminates fraud risk."
          />
          <CardComponent
            imageSrc="/img/AR.png"
            title="The Agentic Future"
            subtitle="We're building the structured payment infrastructure that AI agents need to process transactions
autonomously and accurately."
          />
        </CardsGrid>
      </div>
    </div>
  );
}
