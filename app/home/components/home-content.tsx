import { ApliteAdvantage } from "./aplite-advantage";
import { BeforeAfterAplite } from "@/app/home/components/before-after-aplite";
import { Benefits } from "./benefits";
import { BiggerProblem } from "./bigger-problem";
import { FinancialTeamFeatures } from "@/app/home/components/financial-team-features";
import { PaymentFraudNoMargin } from "@/app/home/components/payment-fraud-no-margin";
import { Stats } from "@/app/home/components/stats";
import { WhoWeServe } from "@/app/home/components/who-we-serve";
import BlankCard from "@/components/ui/BlankCard";

export function HomeContent() {
  return (
    // <section className="bg-white m-8 sm:m-8 md:m-6 lg:m-8 xl:m-10 rounded-xl sm:rounded-2xl overflow-hidden">
    <BlankCard>
      <div className="p-4 sm:p-6 lg:p-8">
        <PaymentFraudNoMargin />
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <Benefits />
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <BeforeAfterAplite />
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <FinancialTeamFeatures />
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <Stats />
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <BiggerProblem />
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <WhoWeServe />
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <ApliteAdvantage />
      </div>
      {/* <div className="p-4 sm:p-6 lg:p-8">
        <TaglineSec />
      </div> */}
    </BlankCard>
  );
}