import Image from "next/image";
import { Mail, AlertTriangle, DollarSign, ShieldAlert, Clock, Database, IdCard, Lock, BellRing, MailCheck, FileCheck, Handshake } from 'lucide-react';
import ReusableReactIcon from "../ui/ReusableReactIcon";


export function BeforeAfterAplite() {
  return (
    <section className="bg-white mt-40 ">
      <div className="max-w-full mx-auto px-2 sm:px-4">
        <h2 className="text-4xl md:text-7xl font-light tracking-tight text-[#24004c] text-center ">
          How Businesses Handle <br /> Banking Information - And How Aplite Redefines It
        </h2>
        {/* <p className="text-center text-gray-600 mb-5 sm:mb-7 text-sm sm:text-base px-4 sm:px-0">
          The traditional approach exposes businesses to fraud and errors.<br />
          Here’s how Aplite transforms the process.
        </p> */}
        <section className="flex flex-col gap-8 py-12 mt-10">
          {/* Before Aplite Section */}
          <div className="w-full p-6 flex gap-20 ">
            <div className="flex w-2/3">
              <h2 className="text-4xl font-semibold mb-6">Before Aplite</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-8">
                <div className="">
                  {/* <Mail className="mt-1 text-[#4914FF]" size={40} /> */}
                  <ReusableReactIcon
                    sizeprop="sm"
                    squareBgColor="#003cff"
                    icon={Mail}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <div>
                  <span className="font-semibold text-lg text-gray-800">Scattered Communication Channels</span>
                  <p className="text-gray-700 text-base">Businesses manage banking info via emails, invoices, and phone calls, with no central system.</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="">
                  {/* <AlertTriangle className="mt-1 text-[#4914FF]" size={40} /> */}
                  <ReusableReactIcon
                    sizeprop="sm"
                    squareBgColor="#003cff"
                    icon={AlertTriangle}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <div>
                  <span className="font-semibold text-lg text-gray-800">No Way to Verify Details</span>
                  <p className="text-gray-700 text-base">Any typo or compromised email can lead to severe financial losses—average $183K per incident.</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="">
                  {/* <ShieldAlert className="mt-1 text-[#4914FF]" size={40} /> */}
                  <ReusableReactIcon
                    sizeprop="sm"
                    squareBgColor="#003cff"
                    icon={ShieldAlert}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <div>
                  <span className="font-semibold text-lg text-gray-800">Email Is the #1 Fraud Vector</span>
                  <p className="text-gray-700 text-base">Banking changes arrive through email, making every update a massive risk for fraud.</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="">
                  {/* <Clock className="mt-1 text-[#4914FF]" size={40} /> */}
                  <ReusableReactIcon
                    sizeprop="sm"
                    squareBgColor="#003cff"
                    icon={Clock}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <div>
                  <span className="font-semibold text-lg text-gray-800">Wasted Verification Effort</span>
                  <p className="text-gray-700 text-base">Finance teams spend hours cross-checking info across sources, still exposed to risk.</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="">
                  {/* <Database className="mt-1 text-[#4914FF]" size={40} /> */}
                  <ReusableReactIcon
                    sizeprop="sm"
                    squareBgColor="#003cff"
                    icon={Database}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <div>
                  <span className="font-semibold text-lg text-gray-800">No Central Repository</span>
                  <p className="text-gray-700 text-base">Lack of a unified, verifiable source causes confusion, delays, and increased exposure.</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* After Aplite Section */}
          <div className="w-full p-6 flex gap-20">
            <div className="flex w-2/3">
              <h2 className="text-4xl font-semibold mb-6">After Aplite</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-8">
                <div className="">
                  {/* <IdCard className="mt-1 text-[#4914FF]" size={40} /> */}
                  <ReusableReactIcon
                    sizeprop="sm"
                    squareBgColor="#003cff"
                    icon={IdCard}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <div>
                  <span className="font-semibold text-lg text-gray-800">Verified Digital Payment Profile</span>
                  <p className="text-gray-700 text-base">Every business gets an instantly accessible, authenticated profile—pay with confidence.</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="">
                  {/* <Lock className="mt-1 text-[#4914FF]" size={40} /> */}
                  <ReusableReactIcon
                    sizeprop="sm"
                    squareBgColor="#003cff"
                    icon={Lock}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <div>
                  <span className="font-semibold text-lg text-gray-800">All Banking Details Authenticated</span>
                  <p className="text-gray-700 text-base">Details are verified and stored securely, eliminating manual verification and fraud risk.</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="">
                  {/* <BellRing className="mt-1 text-[#4914FF]" size={40} /> */}
                  <ReusableReactIcon
                    sizeprop="sm"
                    squareBgColor="#003cff"
                    icon={BellRing}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <div>
                  <span className="font-semibold text-lg text-gray-800">Real-Time Verified Alerts</span>
                  <p className="text-gray-700 text-base">Receive instant, source-verified alerts for every banking change—block fraud before it starts.</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="">
                  {/* <MailCheck className="mt-1 text-[#4914FF]" size={40} /> */}
                  <ReusableReactIcon
                    sizeprop="sm"
                    squareBgColor="#003cff"
                    icon={MailCheck}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <div>
                  <span className="font-semibold text-lg text-gray-800">No More Email Risks</span>
                  <p className="text-gray-700 text-base">Eliminate manual email updates, so payments can’t be hijacked by attackers.</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="">
                  {/* <FileCheck className="mt-1 text-[#4914FF]" size={40} /> */}
                  <ReusableReactIcon
                    sizeprop="sm"
                    squareBgColor="#003cff"
                    icon={FileCheck}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <div>
                  <span className="font-semibold text-lg text-gray-800">Centralized, Tamper-Proof Repository</span>
                  <p className="text-gray-700 text-base">All updates are stored in one secure source—compliance and audit made easy.</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="">
                  {/* <Handshake className="mt-1 text-[#4914FF]" size={40} /> */}
                  <ReusableReactIcon
                    sizeprop="sm"
                    squareBgColor="#003cff"
                    icon={Handshake}
                    iconBgColor="#93c5fd"
                  />
                </div>
                <div>
                  <span className="font-semibold text-lg text-gray-800">Trusted, Secure Relationships</span>
                  <p className="text-gray-700 text-base">Strengthen partnerships with fraud-proof payments and trusted verification.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
