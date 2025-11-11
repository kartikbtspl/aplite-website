import { ShieldCheck, Clock3, BarChart2, CheckCircle2 } from "lucide-react";
import { FileLock } from "lucide-react";// example Lucide icons
import CardFlowAnimation from "../ui/CardFlowAnimation";

export function WhoWeServe() {
  return (
    <div className=" bg-white">
      <div className="p-10">
        <h2 className="text-4xl md:text-7xl font-light tracking-tight text-[#24004c] text-center">
          Who We Serve
        </h2>
      </div>
      <div className="">
        <CardFlowAnimation cards={[
          {
            imageSrc: "/Accounts Payable Teams.png",
            title: "Accounts Payable Teams",
            subtitle: "Search, verify, and pay in seconds"
          },
          {
            imageSrc: "/Accounts Receivable Teams.png",
            title: "Accounts Receivable Teams",
            subtitle: "Share your banking information securely through an immutable payment profile that customers can trust."
          },
          {
            imageSrc: "/bank & fintch.png",
            title: "Banks & Fintechs",
            subtitle: "Integrate verified, structured payment data that reduces errors, speeds processing, and eliminates fraud risk."
          },
          {
            imageSrc: "/The Agentic Future (2).png",
            title: "The Agentic Future",
            subtitle: "We're building the structured payment infrastructure that AI agents need to process transactions autonomously and accurately."
          }
        ]} />
      </div>
    </div>
  );
}
