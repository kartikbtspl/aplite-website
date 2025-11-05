import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product" className="text-sm text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/ap-teams" className="text-sm text-muted-foreground hover:text-foreground">
                  AP Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/ar-teams" className="text-sm text-muted-foreground hover:text-foreground">
                  AR Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/banks-fintech" className="text-sm text-muted-foreground hover:text-foreground">
                  Banks & Fintech
                </Link>
              </li>
              <li>
                <Link href="/solutions/erp" className="text-sm text-muted-foreground hover:text-foreground">
                  ERP Systems
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company#team" className="text-sm text-muted-foreground hover:text-foreground">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-xl font-bold">aplite</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aplite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
