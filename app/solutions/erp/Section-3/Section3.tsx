import CardContainer from "@/components/ui/CardContainer";
import {
  CheckCircle,
  ClipboardList,
  Key,
  Server,
  ShieldCheck,
} from "lucide-react";

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
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full flex items-center justify-center">
                <Key size={35} className="md:size-[45px] stroke-1" />
              </div>
            </div>

            <div className="text-base md:text-lg font-extrabold text-gray-900">
              User enters Aplite PIN
            </div>
          </div>
        </CardContainer>

        <CardContainer>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full flex items-center justify-center">
                <Server size={35} className="md:size-[45px] stroke-1" />
              </div>
            </div>

            <div className="text-base md:text-lg font-extrabold text-gray-900">
              API call to Aplite
            </div>
          </div>
        </CardContainer>

        <CardContainer>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full flex items-center justify-center">
                <ShieldCheck size={35} className="md:size-[45px] stroke-1" />
              </div>
            </div>

            <div className="text-base md:text-lg font-extrabold text-gray-900">
              Verified data returns
            </div>
          </div>
        </CardContainer>

        <CardContainer>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full flex items-center justify-center">
                <ClipboardList size={35} className="md:size-[45px] stroke-1" />
              </div>
            </div>

            <div className="text-base md:text-lg font-extrabold text-gray-900">
              ERP autofills payment form
            </div>
          </div>
        </CardContainer>

        <CardContainer>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full flex items-center justify-center">
                <CheckCircle size={35} className="md:size-[45px] stroke-1" />
              </div>
            </div>

            <div className="text-base md:text-lg font-extrabold text-gray-900">
              User confirms & pays
            </div>
          </div>
        </CardContainer>
      </CardContainer>

      <CardContainer>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-md text-[#111A4A] leading-tight text-center">
            Ready to integrate verified banking data?
          </h1>
        </div>
      </CardContainer>
    </div>
  );
}
