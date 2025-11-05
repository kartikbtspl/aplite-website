"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState(0);
  const solutionsButtonRef = React.useRef<HTMLDivElement>(null);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">A</span>
            </div>
            <p className="text-xl font-bold">aplite</p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/product" className="text-sm font-medium hover:text-primary">
              Product
            </Link>
            <div 
              className="relative" 
              ref={solutionsButtonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium hover:text-primary"
              >
                Solutions
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="/company" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Button variant="default" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/get-started">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Desktop Solutions Dropdown - Outside header */}
      {solutionsOpen && (
        <div
          className="fixed top-16 z-40 hidden md:block"
          style={{ left: `${dropdownPosition}px` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-56 rounded-lg border bg-background p-2 shadow-lg">
              <Link
                href="/solutions/ap-teams"
                className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                onClick={() => setSolutionsOpen(false)}
              >
                Account Payable Teams
              </Link>
              <Link
                href="/solutions/ar-teams"
                className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                onClick={() => setSolutionsOpen(false)}
              >
                Account Receivable Teams
              </Link>
              <Link
                href="/solutions/banks-fintech"
                className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                onClick={() => setSolutionsOpen(false)}
              >
                Bank & Fintech
              </Link>
              <Link
                href="/solutions/erp"
                className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                onClick={() => setSolutionsOpen(false)}
              >
                ERP Systems
              </Link>
              <Link
                href="/solutions/invoicing"
                className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                onClick={() => setSolutionsOpen(false)}
              >
                Invoicing Software
              </Link>
              <Link
                href="/solutions/ai-agents"
                className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                onClick={() => setSolutionsOpen(false)}
              >
                AI Agents
              </Link>
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
                <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                    <span className="text-lg font-bold text-primary-foreground">A</span>
                  </div>
                  <span className="text-xl font-bold">aplite</span>
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
                  <Button variant="default" asChild className="w-full justify-start">
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
