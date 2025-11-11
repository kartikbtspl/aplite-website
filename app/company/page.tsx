import HeroSec from "@/components/sections/HeroSec";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";

export default function CompanyPage() {
  return (
    <>
      <div className="">
        <HeroSec
          subtitle="aplite"
          title="About Aplite"
          description="We are on a mission to eliminate payment fraud and errors by providing instant access to verified business banking information."
          buttonLabel=""
        />
      </div>
      <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 mx-4 sm:mx-6 lg:mx-8 space-y-10">
        <Section2 />
        <Section3 />
        <div className="w-full rounded-2xl mx-auto mb-4 mt-8 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900">
          <p className="text-center text-white text-2xl font-medium py-8">
            We don&apos;t move money.<br />
            We direct where it goes.
          </p>
        </div>
      </div>
    </>
  );
}
