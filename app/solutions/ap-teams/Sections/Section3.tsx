import BlankCard from "@/components/ui/BlankCard";
import Button from "@/components/ui/Buttons";
import { CircleArrowOutUpRight } from "lucide-react";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const fadeInAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.8 },
  };

  return (
    <BlankCard ref={ref}>
      <motion.div
        key="hero-sec"
        initial={fadeInAnimation.initial}
        animate={fadeInAnimation.animate}
        transition={fadeInAnimation.transition}
        className="p-6 space-y-6"
      >
        <div className="text-center">
          <p className="text-2xl font-medium  leading-tight">
            Ready to transform your AP process?
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button
            label="Verify Your First Vendor"
            //onClick={onButtonClick}
            variant="primary"
            size="sm"
          />

          <Button
            icon={CircleArrowOutUpRight}
            label="Join Aplite"
            //onClick={onButtonClick}
            variant="primary"
            size="sm"
          />
        </div>
      </motion.div>
    </BlankCard>
  );
}
