"use client";

import React from "react";

export default function PricingPage() {
  // Apply red gradient for pricing page
  React.useEffect(() => {
    document.body.classList.add('pricing-gradient');
    return () => {
      document.body.classList.remove('pricing-gradient');
    };
  }, []);

  return (
    <>
      <div className="space-y-6">
        <h1 className="flex flex-wrap items-center justify-center text-4xl font-extrabold text-white gap-2 md:gap-3 leading-tight text-center">
          Work in progress...
        </h1>
      </div>
    </>
  );
}
