import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#150A33] via-[#1a0b2e] to-[#2A0E66] text-white m-8 rounded-3xl">
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Top Section - Logo and Tagline */}
        <div className="mb-6 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="inline-flex items-center">
            <Image 
              src="/Aplite-logo.svg" 
              alt="Aplite Logo" 
              width={140} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-lg text-white md:text-xl">
            Verify Confidently, <span><i className="text-white">Transact Securely.</i></span>
          </p>
        </div>

        {/* Solutions Section */}
        <div className="mb-6">
          <h3 className="mb-3 text-lg font-semibold text-white">Solutions</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {/* AP Teams */}
            <Link href="/solutions/ap-teams" className="group flex items-start gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                <Image 
                  src="/img/header/payable.png" 
                  alt="AP Teams" 
                  width={48} 
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 self-start">
                <h4 className="text-base text-white">
                  Payable
                </h4>
                <p className="text-sm leading-relaxed text-white/60">
                  The smarter way to set up and scale your merchant portfolio.
                </p>
              </div>
            </Link>

            {/* AR Teams */}
            <Link href="/solutions/ar-teams" className="group flex items-start gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                <Image 
                  src="/img/header/receiveable.png" 
                  alt="AR Teams" 
                  width={48} 
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 self-start">
                <h4 className="text-base text-white">
                  Receivable
                </h4>
                <p className="text-sm leading-relaxed text-white/60">
                  Accept and manage payments from any place through a single portal.
                </p>
              </div>
            </Link>

            {/* Banks & Fintech */}
            <Link href="/solutions/banks-fintech" className="group flex items-start gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                <Image 
                  src="/img/header/Bank-fintech.png" 
                  alt="Banks & Fintech" 
                  width={48} 
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 self-start">
                <h4 className="text-base text-white">
                  Banks & Fintech
                </h4>
                <p className="text-sm leading-relaxed text-white/60">
                  Secure payment capabilities seamlessly integrated via our API.
                </p>
              </div>
            </Link>

            {/* ERP Systems */}
            <Link href="/solutions/erp" className="group flex items-start gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                <Image 
                  src="/img/header/ERP.png" 
                  alt="ERP Systems" 
                  width={48} 
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 self-start">
                <h4 className="text-base text-white">
                  ERP Systems
                </h4>
                <p className="text-sm leading-relaxed text-white/60">
                  Integrate with your ERP to verify banking information before payments.
                </p>
              </div>
            </Link>

            {/* Invoicing Platforms */}
            <Link href="/solutions/invoicing" className="group flex items-start gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                <Image 
                  src="/img/header/Invoice-2.png" 
                  alt="Invoicing Platforms" 
                  width={48} 
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 self-start">
                <h4 className="text-base text-white">
                  Invoicing
                </h4>
                <p className="text-sm leading-relaxed text-white/60">
                  Enhance your platform with real-time banking verification.
                </p>
              </div>
            </Link>

            {/* AI Agents */}
            <Link href="/solutions/ai-agents" className="group flex items-start gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                <Image 
                  src="/img/header/AI.png" 
                  alt="AI Agents" 
                  width={48} 
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 self-start">
                <h4 className="text-base text-white">
                  AI Agents
                </h4>
                <p className="text-sm leading-relaxed text-white/60">
                  Empower AI agents with trusted verification for autonomous payments.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section - Links Grid with Subscribe */}
        <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">
          {/* Left Group - Company, Product, Help */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12 md:gap-24">
            {/* Company Section */}
            <div>
              <h3 className="mb-4 text-sm font-normal text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-white/60 transition-colors hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product Section */}
            <div>
              <h3 className="mb-4 text-sm font-normal text-white">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">
                    Homepage
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="mb-4 text-sm font-normal text-white">Help</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/help" className="text-sm text-white/60 transition-colors hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-white/60 transition-colors hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="w-full md:w-[280px]">
            <h3 className="mb-4 text-sm font-normal text-white">Subscribe</h3>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="name@emailaddress.com"
                className="flex-1 rounded-md bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-medium text-[#150A33] transition-all hover:bg-white/90">
                Send
              </button>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/50">
              Sign up for our newsletter to stay up to speed on the latest features and releases.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            {/* Copyright */}
            <div className="text-xs text-white/50">
              <p>Copyright © {new Date().getFullYear()} Aplite LLC. All Rights Reserved</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs text-white/50">
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms & Conditions
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/security" className="transition-colors hover:text-white">
                Security
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <Link
                href="mailto:contact@aplite.com"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all hover:border-white/40 hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all hover:border-white/40 hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all hover:border-white/40 hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
