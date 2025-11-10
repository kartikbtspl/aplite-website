import {Circle} from 'lucide-react'

export function BiggerProblem() {

  return (
    <section className="bg-white py-12 px-4 md:px-0">
      {/* Title */}
      <h2 className="text-4xl md:text-7xl font-light tracking-tight text-[#24004c] text-center mb-10">
        The Problem Is Bigger Than Fraud
      </h2>
      {/* Subtitle */}
      {/* <p className="text-base md:text-lg text-center text-gray-600 mb-8">
        The current system is broken in ways most people don&apos;t realize:
      </p> */}
      {/* Data Rows */}
      <div className="w-full mx-auto flex flex-col gap-2">
        {/* Active Row */}
        <div className="flex items-center border border-[#ebebeb] bg-[#fcfcff] rounded-lg px-3 py-6 opacity-70 mb-1">
          <span className="w-16 h-16 rounded-full border border-[#ebebeb] flex-shrink-0 mr-3" />
          <span className="font-medium text-gray-500">
            65% of US finance teams navigate the complexity of different routing numbers for ACH and wire payments
          </span>
        </div>
        {/* Ghost Rows */}
        <div className="flex items-center border border-[#ebebeb] bg-[#fcfcff] rounded-lg px-3 py-6 opacity-70 mb-1">
          <span className="w-16 h-16 rounded-full border border-[#ebebeb] flex-shrink-0 mr-3" />
          <span className="text-gray-500 font-medium">
            43% of businesses struggle to send international wires due to insufficient banking information from counterparties
          </span>
        </div>
        <div className="flex items-center border border-[#ebebeb] bg-[#fcfcff] rounded-lg px-3 py-6 opacity-70 mb-1">
          <span className="w-16 h-16 rounded-full border border-[#ebebeb] flex-shrink-0 mr-3" />
          <span className="text-gray-500 font-medium">
            Average time to complete domestic wire setup: 35 minutes
          </span>
        </div>
        <div className="flex items-center border border-[#ebebeb] bg-[#fcfcff] rounded-lg px-3 py-6 opacity-70">
          <span className="w-16 h-16 rounded-full border border-[#ebebeb] flex-shrink-0 mr-3" />
          <span className="text-gray-500 font-medium">
            Average time to complete international SWIFT wire setup: 55 minutes
          </span>
        </div>
      </div>
      {/* Aplite Box */}
      <div className="mt-8 mx-auto w-full">
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 py-10 rounded-lg p-6 text-white text-center shadow-lg">
          <div className="text-xl font-semibold mb-2">Aplite Changes This.</div>
          <div className="text-base font-light">
            With structured, verified banking data, payments now take seconds. Finance teams don't need routing number expertise. Aplite provides exact details for each payment type, formatted correctly, verified completely.
          </div>
        </div>
      </div>
    </section>
  )
}