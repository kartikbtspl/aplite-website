"use client";

import { Play, Pause } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export function ApliteAdvantage() {
  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
  const [isSolutionPaused, setIsSolutionPaused] = useState(false);
  const solutionIntervalRef = useRef<NodeJS.Timeout | null>(null);

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

  const toggleSolutionPause = () => {
    setIsSolutionPaused(!isSolutionPaused);
  };

  const handleSolutionClick = (index: number) => {
    setActiveSolutionIndex(index);
    setIsSolutionPaused(true);
  };

  const solutions = [
    {
      title: "Single Source of Verified Truth",
      content: "No more juggling emails, spreadsheets, and vendor portals. Aplite consolidates verified banking information in one searchable repository, reducing payment errors by 99.9% and giving finance teams one place to trust."
    },
    {
      title: "Immutable Payment Profiles",
      content: "Banking details can't be edited, altered, or spoofed like invoices and PDFs. Once verified, your payment information lives in a tamper- proof profile that customers can trust—eliminating the number one vector for payment fraud."
    },
    {
      title: "Real-Time Change Verification",
      content: "When vendors update their banking information, we verify it before notifying your Accounts Payable team. Your AP team only acts on changes we've confirmed are legitimate."
    },
    {
      title: "Built for the Agentic Future",
      content: "Structured, machine-readable payment data that AI agents can process instantly. While others scramble to adapt, Aplite provides the infrastructure autonomous payments need—ACH, Wire, and SWIFT details in the exact format agents require."
    },
  ];

  const advantageImages = [
    "/home/aplite-advantage/single-source.png",
    "/home/aplite-advantage/immutable-payment.png",
    "/home/aplite-advantage/real-time.png",
    "/home/aplite-advantage/built-future.png",
  ];

  return (
    <section className="bg-white py-20">
      <div className="px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <h2 className="text-4xl mb-8 md:text-7xl font-light tracking-tight text-[#24004c] text-center">
            Aplite Advantage
          </h2>
          <p className="w-full text-lg sm:text-xl text-gray-400 leading-relaxed text-center">
            Discover how Aplite transforms your payment process.
          </p>
        </div>

        {/* Solutions Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16 overflow-hidden">
          <div className="grid gap-6 sm:gap-8 lg:gap-20 lg:grid-cols-2 min-h-[50vh] sm:min-h-[60vh] md:min-h-[60vh] lg:min-h-[70vh]">
            {/* Left sub-section - Solutions */}
            <div className="flex flex-col p-3 min-h-[300px] sm:min-h-[400px] justify-between">
              <h3 className="mb-6 sm:mb-8 lg:mb-10 text-2xl sm:text-3xl lg:text-4xl font-semibold">Aplite Solutions</h3>
              <ul className="space-y-6 flex-1 flex flex-col justify-evenly">
                {solutions.map((solution, index) => (
                  <div key={index}>
                    <hr className={`transition-all duration-300 ${index === activeSolutionIndex ? 'border-2 border-gray-900' : 'border-gray-300'
                      }`} />
                    <li
                      className="flex flex-col gap-2 transition-all duration-300 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                      onClick={() => handleSolutionClick(index)}
                    >
                      <span className={`transition-all duration-300 ${index === activeSolutionIndex
                        ? 'text-lg sm:text-xl text-gray-900'
                        : 'text-gray-500 text-lg sm:text-xl'
                        }`}>
                        {solution.title}
                      </span>
                      {index === activeSolutionIndex && (
                        <p className="text-sm text-gray-600 mt-2">
                          {solution.content}
                        </p>
                      )}
                    </li>
                  </div>
                ))}
              </ul>

              {/* Pause/Play Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={toggleSolutionPause}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black shadow-lg rounded-lg hover:bg-[#4914FF] hover:text-white transition-colors"
                >
                  {isSolutionPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  {isSolutionPaused ? 'Play' : 'Pause'}
                </button>
              </div>
            </div>

            {/* Right sub-section - Animated based on active solution */}
            <div className="bg-white rounded-2xl min-h-[300px] sm:min-h-[400px]">
              <div className="rounded-2xl bg-white h-full transition-all duration-500 flex items-center justify-center min-h-[280px] sm:min-h-[380px]">
                <div className="relative w-full h-full flex items-center justify-center min-h-[260px] sm:min-h-[360px]">
                  <Image
                    src={advantageImages[activeSolutionIndex] || "/solutions/erp/workflow-5.png"}
                    alt={`Advantage ${activeSolutionIndex + 1}`}
                    fill
                    className={`rounded-lg object-cover transition-all duration-500 ${
                      activeSolutionIndex === 0 ? '' :
                      activeSolutionIndex === 1 ? '' :
                      activeSolutionIndex === 2 ? '' :
                      ''
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}