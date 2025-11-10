"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What Is Aplite",
    answer: "Aplite is a verified repository of business banking information. We provide profiles with verified banking information that companies use to process payments, eliminating fraud and processing errors."
  },
  {
    question: "What Is An Aplite PIN",
    answer: "An Aplite PIN is a unique identifier for each verified business profile. Vendors can include their PIN on invoices instead of printing editable banking details. When customers enter the PIN on Aplite, they access verified, tamper-proof payment information."
  },
  {
    question: "How Do I Use Aplite To Pay A Vendor?",
    answer: "Search for your vendor by business name or PIN, view their verified payment profile, and use those details to process your payment through your existing bank or payment system. Aplite provides the verified information—you process payments as usual."
  },
  {
    question: "How Does Aplite Prevent Payment Fraud?",
    answer: "We verify business identity and banking information before it enters our system. Every profile is human-reviewed, timestamped, and immutable, meaning you're always paying verified details, not information from a potentially compromised email or edited invoice."
  },
  {
    question: "How Do I Get My Business Verified On Aplite?",
    answer: "Create a profile by providing your business registration details and banking information. We'll schedule a quick 1-5 minute live verification call with you. Our verification team will confirm legitimacy and activate your verified profile."
  },
  {
    question: "What Is An Aplite Digital Payment Profile?",
    answer: "An Aplite digital payment profile is a verified, tamper-proof record of a business's banking information. Each profile shows verified business name, address, website, contact information, and complete banking details for all payment types. Unlike invoices or PDFs, profiles cannot be edited or altered, giving you full visibility before you pay and ensuring your funds reach the right recipient."
  },
  {
    question: "What Payment Type Does Aplite Support?",
    answer: "Aplite provides verified banking information for ACH, domestic wire transfers, international wire transfers, and SWIFT payments. Each profile includes the specific details needed for your payment method—routing numbers, intermediary banks, SWIFT codes, and account information."
  },
  {
    question: "What Type Of Fraud Does Aplite Eliminate?",
    answer: "Aplite prevents Business Email Compromise (BEC), wire fraud, ACH fraud, invoice manipulation, and vendor impersonation. We verify banking information through rigorous checks and live verification—ensuring fraudsters can't redirect payments using compromised emails, fake invoices, or imposter companies."
  },
  {
    question: "What Happens When A Vendor's Banking Information Changes?",
    answer: "When verified banking information changes on Aplite, connected businesses receive real-time alerts. We verify the change before notifying your AP team—you're never acting on unverified updates from emails."
  },
  {
    question: "Who Verifies The Banking Information?",
    answer: "Our trained verification team reviews every business profile and banking record for accuracy, legitimacy, and ownership."
  },
  {
    question: "What If My Vendor Isn't On Aplite Yet?",
    answer: "You can invite your vendor to join Aplite directly from your dashboard. Send an invitation through the app, they'll receive a link to create their verified profile. Onboarding takes about 5 minutes, and once verified, their banking information is instantly accessible."
  },
  {
    question: "How Quickly Can I Verify A Business?",
    answer: "Searching an existing verified profile takes seconds. If a business isn't on Aplite yet and you invite them, verification typically completes within 24-48 hours after they submit their information."
  },
  {
    question: "Can I See When Banking Information Was Last Verified?",
    answer: "Yes. Every profile includes a timestamp showing when information was last verified. This gives your AP team audit-ready documentation for compliance and internal controls."
  },
  {
    question: "Is Aplite Different From My Bank's Vendor Database?",
    answer: "Yes. Your bank stores whatever information you provide. Aplite verifies that information is accurate and legitimate before you ever enter it. We're the verification layer that sits before payment processing—ensuring the data going into your bank is correct."
  },
  {
    question: "Does Aplite Integrate With My ERP Or Accounting Software?",
    answer: "Yes. Our API integrates with ERPs, invoicing platforms, and payment systems. Users can enter an Aplite PIN and autofill payment forms with verified banking details—eliminating manual entry and reducing errors by 99%."
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <>
      <div className="bg-white m-2 sm:m-4 md:m-6 lg:m-8 xl:m-12 rounded-xl sm:rounded-2xl p-12 sm:p-6 lg:p-12 overflow-hidden">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl md:text-7xl font-light tracking-tight text-[#24004c] text-center">
            Frequntly Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#475569] max-w-3xl mb-6 sm:mb-8 lg:mb-10 mx-auto">
            The real risks of unverified payments and how Aplite eliminates them.
          </p>
        </div>
        <div className="w-full mx-auto py-8">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-gray-200 bg-white rounded-lg shadow-md mb-4 transition-shadow"
            >
              <button
                type="button"
                className="w-full font-medium text-left flex items-center justify-between py-3 px-4 outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`ml-2 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>
              {openIdx === idx && (
                <div className="px-4 pb-3 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}