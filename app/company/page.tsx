"use client"
import HeroSec from "@/components/sections/HeroSec";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import BlankCard from "@/components/ui/BlankCard";
import { fadeInUp } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      <BlankCard>
      <motion.div {...fadeInUp()}>
        <div className="space-y-8 text-center p-6">
          <p className="text-2xl font-medium">
            We don't move money. We direct where it goes.
          </p>
          <Button
            variant="primary"
            size="sm"
            showIcon={true}
            onClick={() => alert("Contact Us...")}
          >
            Contact Us
          </Button>
        </div>
      </motion.div>
    </BlankCard>
    </>
  );
}
