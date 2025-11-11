"use client";

import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { LucideIcon } from "lucide-react";
// Import the ReusableReactIcon component. Adjust path if needed.
import ReusableReactIcon from "@/components/ui/ReusableReactIcon"; 

// --- INTERFACE DEFINITIONS ---
interface StepItem {
  id: number;
  icon?: LucideIcon;
  title: string;
  description: string;
  images: string[];
}

interface AnimatedSplitStepsProps {
  steps: StepItem[];
  className?: string;
}
// -----------------------------

const StepSlide: React.FC<{
  step: StepItem;
  index: number;
  totalSteps: number;
  scrollYProgress: MotionValue<number>;
}> = ({ step, index, totalSteps, scrollYProgress }) => {
  const stepDuration = 1 / totalSteps;
  const progressStart = index * stepDuration;
  const progressEnd = (index + 1) * stepDuration;

  // Key change for overlapping animation:
  // Overlap factor: 0.25 (25% overlap with the preceding and succeeding steps)
  const overlapFactor = 0.25; 
  const overlap = overlapFactor * stepDuration;

  // New extended scroll range for the animation
  const animStart = progressStart - overlap; 
  const animEnd = progressEnd + overlap;
  
  // Midpoint for scale/opacity peak
  const animMid = (progressStart + progressEnd) / 2;

  // Y-TRANSFORM (Slide Up/Down)
  // Animation runs from the extended start/end
  const y = useTransform(
    scrollYProgress,
    // [Start scrolling early, End scrolling late]
    [animStart, animEnd], 
    ["100%", "-100%"] // Moves from bottom (100%) to top (-100%)
  );

  // SCALE TRANSFORMS (Peak at the step's center)
  const scale = useTransform(
    scrollYProgress,
    // Input range: Extended start, Midpoint, Extended end
    [animStart, animMid, animEnd],
    // Output range: Small -> Full Size -> Small
    [0.9, 1, 0.9] 
  );

  // OPACITY TRANSFORMS (Fade In/Out smoothly)
  const opacity = useTransform(
    scrollYProgress,
    // Input range: Extended start, Midpoint, Extended end
    [animStart, animMid, animEnd],
    // Output range: Fully Faded -> Opaque -> Fully Faded (0.0 for smooth disappearance)
    [0.0, 1, 0.0] 
  );

  const Icon = step.icon;
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      style={{ opacity, y, scale }} 
      className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-6 md:px-16 ${
        isReversed ? "md:flex-row-reverse" : ""
      } transform-gpu origin-center`} 
    >
      {/* IMAGE SIDE */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[450px] flex justify-center items-center overflow-hidden">
        {step.images[0] && (
          <img
            src={step.images[0]}
            alt={`step-${index}-img1`}
            className="absolute w-full h-full rounded-2xl shadow-xl object-cover"
          />
        )}
      </div>

      {/* TEXT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        {Icon && (
          <div className="flex justify-center md:justify-start mb-2">
            <ReusableReactIcon 
                sizeprop="xl" 
                icon={Icon} 
            />
          </div>
        )}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          {step.title}
        </h2>
        <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const AnimatedSplitSteps: React.FC<AnimatedSplitStepsProps> = ({
  steps,
  className = "",
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Ensures animation starts as the component enters the viewport
    offset: ["start end", "end end"], 
  });

  const totalSteps = steps.length;
  // smooth dot activation
  const dotProgress = useTransform(scrollYProgress, [0, 1], [-0.01, totalSteps - 0.01]);

  return (
    <div
      ref={containerRef}
      // Sets the scrollable height to be N * 100vh
      style={{ height: `${totalSteps * 100}vh` }}
      className={`relative ${className}`}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
        
        {/* Render the slides */}
        {steps.map((step, index) => (
          <StepSlide
            key={step.id}
            step={step}
            index={index}
            totalSteps={totalSteps}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Navigation Dots/Slider Effect */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 z-10">
          {steps.map((_, index) => (
            <Dot key={index} index={index} dotProgress={dotProgress} />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Dot Component for Navigation ---
const Dot: React.FC<{ index: number; dotProgress: MotionValue<number> }> = ({
  index,
  dotProgress,
}) => {
  const rangeStart = index - 0.2;
  const rangeEnd = index + 0.8;

  const opacity = useTransform(dotProgress, [index - 0.4, index + 0.6], [0.3, 1]);
  const scale = useTransform(dotProgress, [index - 0.2, index + 0.2], [1, 1.3]);
  
  const backgroundColor = useTransform(
    dotProgress,
    [rangeStart, index, rangeEnd],
    ["#cbd5e1", "#003cff", "#cbd5e1"]
  );

  return (
    <motion.div
      style={{ opacity, scale, backgroundColor }}
      className="w-2 h-2 rounded-full transition duration-150" 
    />
  );
};

export default AnimatedSplitSteps;

// "use client";

// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { LucideIcon } from "lucide-react";

// interface StepItem {
//   id: number;
//   icon?: LucideIcon;
//   title: string;
//   description: string;
//   images: string[];
// }

// interface AnimatedSplitStepsProps {
//   steps: StepItem[];
//   className?: string;
// }

// const StepSection: React.FC<{ step: StepItem; index: number }> = ({ step, index }) => {
//   const isReversed = index % 2 !== 0;
//   const Icon = step.icon;
//   const ref = React.useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
//   const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

//   return (
//     <section
//       ref={ref}
//       className={`flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-6 md:px-16 py-10 ${
//         isReversed ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       <div className="relative w-full md:w-1/2 h-[300px] md:h-[450px] flex justify-center items-center overflow-hidden">
//         {step.images[0] && (
//           <motion.img
//             src={step.images[0]}
//             alt={`image-1-${index}`}
//             style={{ y: y1 }}
//             className="absolute w-2/3 rounded-xl shadow-lg object-cover"
//             initial={{ opacity: 0, scale: 0.9, y: 40 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//           />
//         )}
//         {step.images[1] && (
//           <motion.img
//             src={step.images[1]}
//             alt={`image-2-${index}`}
//             style={{ y: y2 }}
//             className="absolute w-1/2 rounded-xl shadow-xl object-cover opacity-90"
//             initial={{ opacity: 0, scale: 0.9, y: -40 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             viewport={{ once: true }}
//           />
//         )}
//       </div>

//       <motion.div
//         className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left"
//         initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         {Icon && (
//           <div className="flex justify-center md:justify-start mb-2">
//             <Icon className="w-10 h-10 text-blue-500" />
//           </div>
//         )}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
//           {step.title}
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg mx-auto md:mx-0">
//           {step.description}
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// const AnimatedSplitSteps: React.FC<AnimatedSplitStepsProps> = ({
//   steps,
//   className = "",
// }) => {
//   return (
//     <div className={`flex flex-col gap-24 md:gap-32 ${className}`}>
//       {steps.map((step, index) => (
//         <StepSection key={step.id} step={step} index={index} />
//       ))}
//     </div>
//   );
// };

// export default AnimatedSplitSteps;
