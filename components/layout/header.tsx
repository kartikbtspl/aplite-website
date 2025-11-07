"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const solutionsButtonRef = React.useRef<HTMLDivElement>(null);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setSolutionsOpen(true);
    if (solutionsButtonRef.current) {
      setDropdownPosition(solutionsButtonRef.current.offsetLeft);
    }
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-2 md:px-4">
        <nav className={`flex h-24 items-center justify-between px-6 transition-all duration-300 md:px-10 ${
          isScrolled ? "rounded-b-3xl bg-white shadow-lg" : "bg-transparent"
        }`}>
          <Link href="/" className="flex items-center">
            <Image 
              src={isScrolled ? "/Aplite-logo-dark.svg" : "/Aplite-logo.svg"}
              alt="Aplite Logo" 
              width={120} 
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className={`text-base font-semibold transition-colors hover:text-primary ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              Home
            </Link>
            <Link href="/product" className={`text-base font-semibold transition-colors hover:text-primary ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              Product
            </Link>
            <div 
              className="relative" 
              ref={solutionsButtonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Solutions
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <Link href="/pricing" className={`text-base font-semibold transition-colors hover:text-primary ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              Pricing
            </Link>
            <Link href="/company" className={`text-base font-semibold transition-colors hover:text-primary ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              About Us
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Button 
              variant="secondary" 
              size="sm" 
              asChild
              className={isScrolled ? "!border-gray-900 !text-gray-900 hover:!bg-gray-100" : ""}
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              asChild
              className={`!bg-white !text-black ${
                isScrolled ? "!border !border-gray-900" : "!border !border-white"
              }`}
            >
              <Link href="/get-started">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Backdrop Blur Overlay */}
      {solutionsOpen && (
        <div className="fixed inset-0 top-24 z-30 hidden backdrop-blur-sm md:block" />
      )}

      {/* Desktop Solutions Dropdown - Outside header */}
      {solutionsOpen && (
        <div
          className="fixed top-24 z-40 hidden md:block"
          style={{ left: `${dropdownPosition}px` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Arrow/Notch */}
          <div className="relative ml-8">
            <div className="absolute -top-3 left-0 h-6 w-6 rotate-45 bg-white border-l border-t border-gray-200"></div>
          </div>
          
          <div className="relative w-[600px] rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl">
            <div className="grid grid-cols-2 gap-3">
              {/* Left Column */}
              <div className="space-y-2">
                <Link
                  href="/solutions/ap-teams"
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                  onClick={() => setSolutionsOpen(false)}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4914FF] to-[#0e3c9f]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-0.5 text-sm font-semibold text-gray-900">Account Payable Teams</h3>
                    <p className="text-xs text-gray-500">Streamline AP workflows</p>
                  </div>
                </Link>
                
                <Link
                  href="/solutions/ar-teams"
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                  onClick={() => setSolutionsOpen(false)}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#283EB0] to-[#120d61]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-0.5 text-sm font-semibold text-gray-900">Account Receivable Teams</h3>
                    <p className="text-xs text-gray-500">Accelerate collections</p>
                  </div>
                </Link>

                <Link
                  href="/solutions/banks-fintech"
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                  onClick={() => setSolutionsOpen(false)}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#332e92] to-[#4914FF]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-0.5 text-sm font-semibold text-gray-900">Banks & Fintech</h3>
                    <p className="text-xs text-gray-500">Payment verification</p>
                  </div>
                </Link>
              </div>

              {/* Right Column */}
              <div className="space-y-2">
                <Link
                  href="/solutions/erp"
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                  onClick={() => setSolutionsOpen(false)}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0e3c9f] to-[#130e5f]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-0.5 text-sm font-semibold text-gray-900">ERP Systems</h3>
                    <p className="text-xs text-gray-500">Integrate seamlessly</p>
                  </div>
                </Link>

                <Link
                  href="/solutions/invoicing"
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                  onClick={() => setSolutionsOpen(false)}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#120d61] to-[#332e92]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-0.5 text-sm font-semibold text-gray-900">Invoicing Software</h3>
                    <p className="text-xs text-gray-500">Verify before sending</p>
                  </div>
                </Link>

                <Link
                  href="/solutions/ai-agents"
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                  onClick={() => setSolutionsOpen(false)}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4914FF] to-[#283EB0]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-0.5 text-sm font-semibold text-gray-900">AI Agents</h3>
                    <p className="text-xs text-gray-500">Automate with AI</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Slide-in Menu */}
          <div className="fixed inset-y-0 left-0 z-50 w-[80%] max-w-sm animate-slide-in bg-background shadow-xl md:hidden">
            <div className="flex h-full flex-col overflow-y-auto">
              {/* Menu Header */}
              <div className="flex items-center justify-between border-b p-4">
                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <Image 
                    src="/Aplite-logo.svg" 
                    alt="Aplite Logo" 
                    width={120} 
                    height={32}
                    className="h-8 w-auto"
                  />
                </Link>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 space-y-1 p-4">
                <Link
                  href="/"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/product"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Product
                </Link>
                <div className="space-y-1">
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                  >
                    Solutions
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileSolutionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSolutionsOpen && (
                    <div className="space-y-1 pl-3">
                      <Link
                        href="/solutions/ap-teams"
                        className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        AP Teams
                      </Link>
                      <Link
                        href="/solutions/ar-teams"
                        className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        AR Teams
                      </Link>
                      <Link
                        href="/solutions/banks-fintech"
                        className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Banks & Fintech
                      </Link>
                      <Link
                        href="/solutions/erp"
                        className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        ERP Systems
                      </Link>
                      <Link
                        href="/solutions/invoicing"
                        className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Invoicing Software
                      </Link>
                      <Link
                        href="/solutions/ai-agents"
                        className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        AI Agents
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/pricing"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/company"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </div>

              {/* Bottom Buttons */}
              <div className="border-t p-4">
                <div className="flex flex-col gap-3">
                  <Button variant="secondary" asChild className="w-full justify-start">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/get-started" onClick={() => setMobileMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
