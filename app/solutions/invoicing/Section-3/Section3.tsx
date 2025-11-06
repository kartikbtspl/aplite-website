import CardContainer from "@/components/ui/CardContainer";
import { CheckCircle, Key, UserCircle } from "lucide-react";

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
                Vendor adds Aplite PIN to invoice template
              </div>
              <div className="text-xs md:text-sm text-[#718096] mt-1">
                Instead of printing editable banking details on invoices.
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
                Customer enters PIN on Aplite
              </div>
              <div className="text-xs md:text-sm text-[#718096] mt-1">
                Quick verification of who they are paying.
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
                Verified banking details display instantly - customer pays with
                confidence
              </div>
              <div className="text-xs md:text-sm text-[#718096] mt-1">
                Tamper-proof information they can trust.
              </div>
            </div>
          </div>
        </CardContainer>
      </CardContainer>

      <CardContainer>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-md text-[#111A4A] leading-tight text-center">
            Ready to eliminate invoice fraud?
          </h1>
        </div>
      </CardContainer>
    </div>
  );
}
