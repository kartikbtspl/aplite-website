import BlankCard from "@/components/ui/BlankCard";
import CardComponent from "@/components/ui/CardComponent";
import CardsGrid from "@/components/ui/GridCard";
import ReusableReactIcon from "@/components/ui/ReusableReactIcon";
import { CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const fadeInAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.8 },
  };

  // Card data array
  const cardData = [
    {
      imageSrc: "/solutions/ap-teams/secure-payment.png",
      title: "Secure Payment",
      subtitle:
        "Eliminate the risk of email-based and invoice-based payment information exchanges. Your banking details live in a secure, verified profile.",
    },
    {
      imageSrc: "/solutions/ap-teams/digital-payment-profile.png",
      title: "Digital Payment Profile",
      subtitle:
        "Your payment information lives in a tamper-proof profile that cannot be edited or altered like invoices and PDFs. Customers always have your correct, verified details.",
    },
    {
      imageSrc: "/solutions/ap-teams/build-trust.png",
      title: "Build Trust",
      subtitle:
        "When customers pay using your Aplite profile, they know the banking details are legitimate, reducing payment delays and fraud concerns.",
    },
  ];

  // Features data array for the grid
  const featuresData = [
    "Cut verification time by 99%",
    "Stop vendor impersonation fraud",
    "Eliminate manual data entry",
    "No more email-based banking updates",
    "Reduce payment errors to zero",
    "Real-time change notifications",
    "Audit-ready documentation",
    "Human-verified, not bot-scraped",
  ];

  return (
    <BlankCard ref={ref}>
      <div className="pt-10 lg:pt-16 pl-0 lg:pl-10">
        <motion.div
          key="hero-content"
          initial={fadeInAnimation.initial}
          animate={fadeInAnimation.animate}
          transition={fadeInAnimation.transition}
          className="grid gap-6 mx-auto"
        >
          {/* Heading */}
          <div>
            <h1
              className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          tracking-tight leading-tight
          text-center lg:text-left
        "
            >
              <div className="mb-2 lg:mb-1 lg:pl-0">Highly Secure</div>

              <div className="mb-2 lg:mb-1 lg:pl-20 xl:pl-64">
                Digital Payments Built
              </div>

              <div className="mb-0 lg:mb-0 lg:text-right lg:pr-20 xl:pr-32">
                On Financial Trust.
              </div>
            </h1>
          </div>

          <div className="flex justify-center p-4 lg:justify-end lg:pl-20">
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed text-center lg:text-left max-w-2xl">
              Eliminate the risk of email-based and invoice-based payment
              information exchanges. Your banking details live in a secure,
              verified profile that builds trust with every transaction.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="px-4 sm:px-8 md:px-10 lg:px-16 xl:px-24">
        <CardsGrid>
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </CardsGrid>
      </div>

      <motion.div
        key="hero-features"
        initial={fadeInAnimation.initial}
        animate={fadeInAnimation.animate}
        transition={fadeInAnimation.transition}
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-8"
      >
        <h1 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mt-4 sm:mt-6 md:mt-8">
          Why Accounts Payable Teams choose Aplite
        </h1>
      </motion.div>

      {/* Responsive grid for features */}
      <motion.div
        key="hero-grid"
        initial={fadeInAnimation.initial}
        animate={fadeInAnimation.animate}
        transition={fadeInAnimation.transition}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-12 sm:gap-y-6 max-w-5xl mx-auto px-4 px-6 md:px-8 lg:px-12 lg:py-6"
      >
        {featuresData.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0">
              <ReusableReactIcon
                sizeprop="md"
                squareBgColor="#003cff"
                icon={CheckCircle}
                iconBgColor="#93c5fd"
              />
            </div>
            <p className="text-lg sm:text-lg md:text-xl font-medium leading-tight">
              {feature}
            </p>
          </div>
        ))}
      </motion.div>
    </BlankCard>
  );
}
