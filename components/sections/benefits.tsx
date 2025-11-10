"use client";

import { CheckCircle2, XCircle, Play, Pause } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { PaymentFraudNoMargin } from "./payment-fraud-no-margin";
import { BeforeAfterAplite } from "./before-after-aplite";
import { FinancialTeamFeatures } from "./financial-team-features";

export function Benefits() {
  const [activeRiskIndex, setActiveRiskIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
  const [isSolutionPaused, setIsSolutionPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const solutionIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveRiskIndex((prev) => (prev + 1) % risks.length);
      }, 3000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  useEffect(() => {
    if (!isSolutionPaused) {
      solutionIntervalRef.current = setInterval(() => {
        setActiveSolutionIndex((prev) => (prev + 1) % solutions.length);
      }, 3000);
    } else {
      if (solutionIntervalRef.current) clearInterval(solutionIntervalRef.current);
    }

    return () => {
      if (solutionIntervalRef.current) clearInterval(solutionIntervalRef.current);
    };
  }, [isSolutionPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const toggleSolutionPause = () => {
    setIsSolutionPaused(!isSolutionPaused);
  };

  const handleRiskClick = (index: number) => {
    setActiveRiskIndex(index);
    setIsPaused(true);
  };

  const handleSolutionClick = (index: number) => {
    setActiveSolutionIndex(index);
    setIsSolutionPaused(true);
  };
  const risks = [
    "Scam fraud can cost up to $50k",
    "Wrong or expired data is too common",
    "Changing details over multiple bank accounts",
    "Legitimate vendors may be using stolen or incorrect details",
    "Vendor data - unverified or wrong",
  ];

  const solutions = [
    "Instant verification eliminates the risk of sending money to the wrong account",
    "Up-to-date data removes delays and failed payments",
    "Aplite confirms vendor banking details before you send money",
    "Vendor verification ensures banking details are legitimate and current",
    "All payment information is pre-verified and regularly updated for accuracy",
    "Aplite integrates seamlessly with your existing workflow and sending process",
  ];

  return (
    <section className="bg-white mt-20">
      {/* <PaymentFraudNoMargin /> */}
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <h2 className="text-4xl md:text-7xl font-light tracking-tight text-[#24004c] text-center">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#475569] max-w-3xl mb-6 sm:mb-8 lg:mb-10 mx-auto">
            The real risks of unverified payments and how Aplite eliminates them.
          </p>
        </div>

        {/* Risk Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16 overflow-hidden">
          <div className="grid gap-6 sm:gap-8 lg:gap-20 lg:grid-cols-2 min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh]">
            {/* Left sub-section - Animated based on active risk */}
            <div className="pt-10 pl-10 bg-[#4914FF] rounded-2xl">
              <div className={`rounded-2xl bg-white p-8 h-full transition-all duration-500 flex items-center justify-center ${activeRiskIndex === 0 ? 'bg-blue-500 animate-bounce' :
                  activeRiskIndex === 1 ? 'bg-blue-500 ' :
                    activeRiskIndex === 2 ? 'bg-blue-500 ' :
                      activeRiskIndex === 3 ? 'bg-blue-500 ' :
                        'bg-blue-500 '
                }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">{activeRiskIndex + 1}</div>
                  <div className="text-sm text-gray-600">Risk Animation</div>
                </div>
              </div>
            </div>

            {/* Right sub-section - Risks */}
            <div className="flex flex-col p-3">
              <h3 className="mb-6 sm:mb-8 lg:mb-10 text-2xl sm:text-3xl lg:text-4xl font-semibold">Real Risks Of Unverified Payments</h3>
              <ul className="space-y-4">
                {risks.map((risk, index) => (
                  <div key={index}>
                    <hr  className={`transition-all duration-300 ${index === activeRiskIndex ? 'border-2 border-gray-900' : 'border-gray-300'
                      }`} />
                    <li 
                      
                      className="flex items-start gap-3 transition-all duration-300 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                      onClick={() => handleRiskClick(index)}
                    >
                      {/* <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" /> */}
                      <span className={`transition-all duration-300 ${index === activeRiskIndex
                          ? 'text-lg sm:text-xl text-gray-900 '
                          : 'text-gray-400 text-lg sm:text-xl'
                        }`}>
                        {risk}
                      </span>
                    </li>

                  </div>
                ))}
              </ul>

              {/* Pause/Play Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={togglePause}
                  className="flex items-center gap-2 px-4 py-2 bg-white-900 text-black shadow-lg rounded-lg hover:bg-[#4914FF] hover:text-white transition-colors"
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  {isPaused ? 'Play' : 'Pause'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16 overflow-hidden">
          <div className="grid gap-6 sm:gap-8 lg:gap-20 lg:grid-cols-2 min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh]">
            {/* Left sub-section - Solutions */}
            <div className="flex flex-col p-3">
              <h3 className="mb-6 sm:mb-8 lg:mb-10 text-2xl sm:text-3xl lg:text-4xl font-semibold">How Aplite Eliminates Them</h3>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index}>
                    <hr className={`transition-all duration-300 ${
                      index === activeSolutionIndex ? 'border-2 border-gray-900' : 'border-gray-300'
                    }`} />
                    <li 
                      // key={index} 
                      className="flex items-start gap-3 transition-all duration-300 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                      onClick={() => handleSolutionClick(index)}
                    >
                      {/* <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" /> */}
                      <span className={`transition-all duration-300 ${
                        index === activeSolutionIndex
                          ? 'text-lg sm:text-xl text-muted-50'
                          : 'text-gray-500 text-lg sm:text-xl'
                      }`}>
                        {solution}
                      </span>
                    </li>
                  </div>
                ))}
              </ul>

              {/* Pause/Play Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={toggleSolutionPause}
                  className="flex items-center gap-2 px-4 py-2 bg-white-900 text-black shadow-lg rounded-lg hover:bg-[#4914FF]
                  hover:text-white transition-colors"
                >
                  {isSolutionPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  {isSolutionPaused ? 'Play' : 'Pause'}
                </button>
              </div>
            </div>

            {/* Right sub-section - Animated based on active solution */}
            <div className="pt-10 pl-10 bg-[#4914FF] rounded-2xl">
              <div className={`rounded-2xl bg-white p-8 h-full transition-all duration-500 flex items-center justify-center ${
                activeSolutionIndex === 0 ? 'bg-blue-500 ' :
                activeSolutionIndex === 1 ? 'bg-blue-500 ' :
                activeSolutionIndex === 2 ? 'bg-blue-500 ' :
                activeSolutionIndex === 3 ? 'bg-blue-500 ' :
                activeSolutionIndex === 4 ? 'bg-blue-500 ' :
                'bg-blue-500 '
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">{activeSolutionIndex + 1}</div>
                  <div className="text-sm text-gray-600">Solution Animation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BeforeAfterAplite /> */}
      {/* <FinancialTeamFeatures /> */}
    </section>
  );
}
