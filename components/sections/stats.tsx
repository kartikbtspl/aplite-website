import Image from "next/image";


export function Stats() {
  return (
    <section className="flex flex-col gap-8 bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl md:text-3xl font-semibold text-[#0A1544]">
          The True Cost of{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent">
            Payment Fraud
          </span>
        </h2>
      </div>
      <div className="flex gap-4">
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#FAFCFE] border border-[#CCE2FB] rounded-2xl shadow p-8 flex flex-col items-center justify-center w-full mx-auto">
          <div className="mb-2">
            <span className="block text-5xl font-extrabold text-[#0A1544]">79%</span>
          </div>
          <div className="mb-2 text-center">
            <span className="text-[#475569] text-xl">
              of organizations faced payment fraud in 2024
            </span>
          </div>
          <div className="mb-4 text-center">
            <span className="font-semibold text-[#0A1544] text-xl">
              AFP 2024 Payments Fraud and Control Report
            </span>
          </div>
          <Image
            src="/dollar.png"
            alt="Dollar Illustration"
            width={200}
            height={110}
            className="mt-4"
          />
        </div>
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#FAFCFE] border border-[#CCE2FB] rounded-2xl shadow p-8 flex flex-col items-center justify-center w-full mx-auto">
          <div className="mb-2">
            <span className="block text-5xl font-extrabold text-[#0A1544]">$50B+</span>
          </div>
          <div className="mb-2 text-center">
            <span className="text-[#475569] text-xl">
              lost to vendor impersonation and wire scams
            </span>
          </div>
          <div className="mb-4 text-center">
            <span className="font-semibold text-[#0A1544] text-xl">
              FBI IC3 2024 Internet Crime Report
            </span>
          </div>
          <Image
            src="/shield.png"
            alt="Shield Illustration"
            width={200}
            height={110}
            className="mt-4"
          />
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#FFFFFF] to-[#FAFCFE] border border-[#CCE2FB] rounded-2xl shadow p-8 flex flex-col items-center justify-center w-full mx-auto">
        <div className="mb-2">
          <span className="block text-5xl font-extrabold text-[#0A1544]">$183k%</span>
        </div>
        <div className="mb-2 text-center">
          <span className="text-[#475569] text-xl">
            of organizations faced payment fraud in 2024
          </span>
        </div>
        <div className="mb-4 text-center">
          <span className="font-semibold text-[#0A1544] text-xl">
            AFP 2024 Payments Fraud and Control Report
          </span>
        </div>
        <Image
          src="/dollar.png"
          alt="Dollar Illustration"
          width={200}
          height={110}
          className="mt-4"
        />
      </div>
    </section>
  );
}
