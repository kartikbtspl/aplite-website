"use client";

import { motion } from "framer-motion";
import Section2 from "./Sections/Section2";
import HeroSec from "@/components/sections/HeroSec";

export default function BanksFintechPage() {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <main className="space-y-10">
      {/* Hero Section */}
      <section>
        <motion.div
          key="hero-sec1"
          initial={fadeInAnimation.initial}
          animate={fadeInAnimation.animate}
          transition={fadeInAnimation.transition}
        >
          <HeroSec
            subtitle="aplite"
            title="Built for Banks & Fintech"
            description="Integrate verified, structured payment data that reduces errors, speeds processing, and eliminates fraud risk."
            buttonLabel="Talk To Our Team"
            onButtonClick={() => console.log("Talk To Our Team")}
          />
        </motion.div>
      </section>

      {/* Section 2 */}
      <section>
        <Section2 />
      </section>
    </main>
  );
}
