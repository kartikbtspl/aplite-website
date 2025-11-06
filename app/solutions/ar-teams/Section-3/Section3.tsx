import CardContainer from "@/components/ui/CardContainer";
import { CheckCircle, Key, TrendingUp, UserCircle } from "lucide-react";

export default function Section3() {
  return (
    <div className="rounded space-y-8 mb-8 mx-auto">
      <div className="space-y-6">
        <h1 className="flex flex-wrap items-center justify-center text-4xl font-extrabold text-slate-900 gap-2 md:gap-3 leading-tight text-center">
          How It
          <span>Works</span>
        </h1>
      </div>

      <CardContainer className="space-y-4 md:space-y-6">
        <CardContainer>
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full flex items-center justify-center">
                <UserCircle size={35} className="md:size-[45px] stroke-1" />
              </div>
            </div>

            <div className="flex-1">
              <div className="text-base md:text-lg font-extrabold text-gray-900">
                Create your verified profile
              </div>
              <div className="text-xs md:text-sm text-[#718096] mt-1">
                Set up your business profile with verified banking information.
              </div>
            </div>
          </div>
        </CardContainer>

        <CardContainer>
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full flex items-center justify-center">
                <Key size={35} className="md:size-[45px] stroke-1" />
              </div>
            </div>

            <div className="flex-1">
              <div className="text-base md:text-lg font-extrabold text-gray-900">
                Add Aplite PIN to invoices
              </div>
              <div className="text-xs md:text-sm text-[#718096] mt-1">
                Include your unique PIN instead of editable banking details.
              </div>
            </div>
          </div>
        </CardContainer>

        <CardContainer>
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full flex items-center justify-center">
                <CheckCircle size={35} className="md:size-[45px] stroke-1" />
              </div>
            </div>

            <div className="flex-1">
              <div className="text-base md:text-lg font-extrabold text-gray-900">
                Access verified details
              </div>
              <div className="text-xs md:text-sm text-[#718096] mt-1">
                They enter your PIN on Aplite and see your verified payment
                information.
              </div>
            </div>
          </div>
        </CardContainer>

        <CardContainer>
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full flex items-center justify-center">
                <TrendingUp size={35} className="md:size-[45px] stroke-1" />
              </div>
            </div>

            <div className="flex-1">
              <div className="text-base md:text-lg font-extrabold text-gray-900">
                Get paid faster
              </div>
              <div className="text-xs md:text-sm text-[#718096] mt-1">
                No verification delays, just immediate confidence and payment.
              </div>
            </div>
          </div>
        </CardContainer>
      </CardContainer>
    </div>
  );
}
