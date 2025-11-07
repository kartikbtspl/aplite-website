import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#150A33] via-[#1a0b2e] to-[#2A0E66] text-white m-8 rounded-3xl">
      <div className="mx-auto max-w-7xl py-10">
        {/* Top Section - Logo and Tagline */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center">
              <Image 
                src="/Aplite-logo.svg" 
                alt="Aplite Logo" 
                width={140} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-md text-base leading-relaxed text-white/70">
              Delivering Trust In Every Transaction. Our Platform Verifies Business Banking Information Before Payments Are Made.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-10 h-px bg-white/10"></div>

        {/* Middle Section - Links Grid */}
        <div className="mb-10 flex flex-col justify-between gap-10 md:flex-row">
          {/* Product Section */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/90">PRODUCT</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-base text-white/60 transition-colors hover:text-white hover:underline">
                  Homepage
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/90">SOLUTIONS</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/solutions/ap-teams" className="text-base text-white/60 transition-colors hover:text-white hover:underline">
                  Account Payable Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/ar-teams" className="text-base text-white/60 transition-colors hover:text-white hover:underline">
                  Account Receivable Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/banks-fintech" className="text-base text-white/60 transition-colors hover:text-white hover:underline">
                  Banks & Fintech
                </Link>
              </li>
              <li>
                <Link href="/solutions/erp" className="text-base text-white/60 transition-colors hover:text-white hover:underline">
                  ERP Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions/invoicing" className="text-base text-white/60 transition-colors hover:text-white hover:underline">
                  Invoicing Platforms
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-agents" className="text-base text-white/60 transition-colors hover:text-white hover:underline">
                  AI Agents
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/90">COMPANY</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/company" className="text-base text-white/60 transition-colors hover:text-white hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/90">HELP</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/help" className="text-base text-white/60 transition-colors hover:text-white hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/help#faq" className="text-base text-white/60 transition-colors hover:text-white hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright, Legal, Social */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="text-sm text-white/50">
              Copyright © {new Date().getFullYear()} Aplite LLC. All Rights Reserved
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-white/50">
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-white/20"
              >
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-white/20"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-white/20"
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
