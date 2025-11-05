import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand Section */}
          <div>
            <Link href="/" className="mb-6 inline-flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
                <span className="text-xl font-bold text-primary">A</span>
              </div>
              <span className="text-2xl font-bold text-white">aplite</span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              Delivering Trust In Every Transaction. Our Platform Verifies Business Banking Information Before Payments Are Made.
            </p>
            <div className="flex gap-3">
              <Link
                href="mailto:contact@aplite.com"
                className="flex h-10 w-10 items-center justify-center rounded border border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded border border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded border border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">PRODUCT</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Homepage
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">SOLUTIONS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/ap-teams" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Account Payable Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/ar-teams" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Account Receivable Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/banks-fintech" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Banks & Fintech
                </Link>
              </li>
              <li>
                <Link href="/solutions/erp" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  ERP Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions/invoicing" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Invoicing Platforms
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-agents" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  AI Agents
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">HELP</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/help#faq" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/60 md:flex-row">
            <p>Copyright © {new Date().getFullYear()} Aplite LLC. All Rights Reserved</p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-primary-foreground">
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-primary-foreground">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/security" className="hover:text-primary-foreground">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
