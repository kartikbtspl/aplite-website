import Image from "next/image";

export function BeforeAfterAplite() {
  return (
    <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
      <div className="max-w-full mx-auto px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3 text-blue-900">
          Before Aplite: How Businesses Handle Banking Information
        </h2>
        <p className="text-center text-gray-600 mb-5 sm:mb-7 text-sm sm:text-base px-4 sm:px-0">
          The traditional approach exposes businesses to fraud and errors.<br />
          Here’s how Aplite transforms the process.
        </p>
        <div className="space-y-6 sm:space-y-8">
          {/* Before Aplite */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Left Card */}
            <div className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col justify-center min-h-[170px]">
              <span className="inline-block mb-4 text-base font-semibold bg-white rounded-full px-4 py-2 shadow w-fit">
                Before Aplite:
              </span>
              <ul className="space-y-5">
                <li>
                  <span className="font-semibold text-blue-900">
                    ● Unverified banking details & fragmented sources
                  </span>
                  <div className="text-gray-600 text-sm mt-1">
                    Companies rely on emails, invoices, and ACH forms, no way to verify details. One mistake costs $183K on average.
                  </div>
                </li>
                <li>
                  <span className="font-semibold text-blue-900">
                    ● Banking information changes via email (fraud-prone)
                  </span>
                  <div className="text-gray-600 text-sm mt-1">
                    Vendors send banking change updates via email – the #1 fraud vector. Every update is a massive risk.
                  </div>
                </li>
              </ul>
            </div>
            {/* Right Illustration */}
            <div className="flex items-center justify-center">
              <Image
                src="/before.png" // Use your actual filename here!
                alt="Before Aplite Shield Illustration"
                width={340}
                height={180}
                className="rounded-2xl shadow object-contain"
                priority
              />
            </div>
          </div>
          {/* After Aplite */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/after.png"
                alt="After Aplite Shield Illustration"
                width={340}
                height={180}
                className="rounded-2xl shadow object-contain"
                priority
              />
            </div>
            {/* Left Card */}
            <div className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col justify-center min-h-[170px]">
              <span className="inline-block mb-4 text-base font-semibold bg-white rounded-full px-4 py-2 shadow w-fit">
                After Aplite:
              </span>
              <ul className="space-y-5">
                <li>
                  <span className="font-semibold text-blue-900">
                    • Verified Repository
                  </span>
                  <div className="text-gray-600 text-sm mt-1">
                    Every business gets an instantly accessible, verified digital payment profile. Pay with complete confidence.
                  </div>
                </li>
                <li>
                  <span className="font-semibold text-blue-900">
                    • Real-Time Verified Alerts
                  </span>
                  <div className="text-gray-600 text-sm mt-1">
                    We verify every banking change before it reaches your team. Live verification for every update request.
                  </div>
                </li>
              </ul>
            </div>
            {/* Right Illustration */}
            
          </div>
        </div>
      </div>
    </section>
  );
}
