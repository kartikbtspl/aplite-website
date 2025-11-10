import { ApliteAdvantage } from "./aplite-advantage";
import { BeforeAfterAplite } from "./before-after-aplite";
import { Benefits } from "./benefits";
import { BiggerProblem } from "./bigger-problem";
import { FinancialTeamFeatures } from "./financial-team-features";
import { PaymentFraudNoMargin } from "./payment-fraud-no-margin";
import { Stats } from "./stats";
import TaglineSec from "./tagline-sec";
import { WhoWeServe } from "./who-we-serve";

export function HomeContent() {
  return (
    <section className="bg-white m-2 sm:m-4 md:m-6 lg:m-8 xl:m-12 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden">
      <PaymentFraudNoMargin />
      <Benefits />
      <BeforeAfterAplite />
      <FinancialTeamFeatures />
      <Stats />
      <BiggerProblem />
      <WhoWeServe />
      <ApliteAdvantage />
      <TaglineSec />
    </section>
  );
}