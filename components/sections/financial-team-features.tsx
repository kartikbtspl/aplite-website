import { ShieldCheck, Clock3, BarChart2, CheckCircle2 } from "lucide-react";
import { FileLock } from "lucide-react";// example Lucide icons

export function FinancialTeamFeatures() {
  return (
    <section className="bg-white py-10 flex flex-col gap-4 items-center px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-3xl font-semibold text-[#0A1544]">
          Built For The whole{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent">
            Financial Team
          </span>
        </h2>
        <p className="text-[#475569]">
          Built for the whole finance team, from AP specialists to the CFO.
        </p>
      </div>
      <div className="border rounded-xl p-8 bg-[#FAFCFE] grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Vertical line separator */}
        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-200 transform -translate-x-1/2"></div>

        {/* Left Column */}
        <div className="space-y-8">
          {/* Card 01 */}
          <div className="relative p-6 rounded-xl flex flex-col items-start">
            {/* Large Faded Number */}
            <span className="absolute left-2 top-0 text-[3.5rem] font-bold text-[#F4F6FA] select-none pointer-events-none z-0 leading-none">
              01
            </span>
            {/* Icon */}
            <div className="relative z-10 mt-2 mr-4">
              <FileLock className="w-8 h-8 text-[#0A1544]" />
            </div>
            {/* Main Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#0A1544] mb-2">
                Stops fraud at the source
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                No more fake invoices, compromised emails, or altered payment details. Every banking update is verified before it ever reaches your AP team, protecting you from the start.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="relative p-6 rounded-xl flex flex-col items-start">
            {/* Large Faded Number */}
            <span className="absolute left-2 top-0 text-[3.5rem] font-bold text-[#F4F6FA] select-none pointer-events-none z-0 leading-none">
              03
            </span>
            {/* Icon */}
            <div className="relative z-10 mt-2 mr-4">
              <BarChart2 className="w-8 h-8 text-[#0A1544]" />
            </div>
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#0A1544] mb-2">
                Grows stronger with every business
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Each company that joins Aplite strengthens the network, making every transaction more secure. Together, we’re building the global trust layer for business payments.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Card 02 */}
          <div className="relative p-6 rounded-xl flex flex-col items-start">
            <span className="absolute left-2 top-0 text-[3.5rem] font-bold text-[#F4F6FA] select-none pointer-events-none z-0 leading-none">
              02
            </span>
            <div className="relative z-10 mt-2 mr-4">
              <Clock3 className="w-8 h-8 text-[#0A1544]" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#0A1544] mb-2">
                Cuts verification time by 99%
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Instantly search any business and access verified banking information in seconds. Eliminate manual checks and speed up every payment with total confidence.
              </p>
            </div>
          </div>

          {/* Card 04 */}
          <div className="relative p-6 rounded-xl flex flex-col items-start">
            <span className="absolute left-2 top-0 text-[3.5rem] font-bold text-[#F4F6FA] select-none pointer-events-none z-0 leading-none">
              04
            </span>
            <div className="relative z-10 mt-2 mr-4">
              <CheckCircle2 className="w-8 h-8 text-[#0A1544]" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#0A1544] mb-2">
                Keeps you in control
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Get real-time alerts for every banking change, with full visibility and audit-ready timestamps. Stay informed and in charge before every payment you make.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
