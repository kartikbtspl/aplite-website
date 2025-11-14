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
      <div className="bg-white rounded-2xl sm:rounded-3xl p-8 m-2 sm:m-4 md:m-6 lg:m-8 xl:m-10 space-y-10">
        <Section2 />
        <Section3 />
      </div>
      <div className="flex flex-col mx-4 sm:mx-8 md:mx-10 my-12 items-center justify-center max-w-full rounded-2xl bg-white py-10 px-6 text-center">
        <p className="text-center text-black text-2xl font-medium py-8">
          We don&apos;t move money.<br />
          We direct where it goes.
        </p>
      </div>
    </>
  );
}
