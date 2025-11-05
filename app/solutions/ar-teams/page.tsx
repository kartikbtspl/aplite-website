import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, CheckCircle2, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ARTeamsPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Accounts Receivable Teams
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Stop sending banking details through email. Give customers a verified way they can trust.
            </p>
            <Button size="lg" asChild>
              <Link href="/get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Search and retrieve verified business</h3>
                <p className="text-muted-foreground">
                  Easily find and verify business banking details through email.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Process payments with confidence</h3>
                <p className="text-muted-foreground">
                  End the back-and-forth of verifying payment details.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Stay proactive with real-time alerts</h3>
                <p className="text-muted-foreground">
                  Get notified when customer banking details change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to transform your AR process?
            </h2>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/get-started">Verify Your First Invoice</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/help">Just Aplite</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
          </div>
          <div className="relative mx-auto max-w-4xl">
            <div className="mb-16 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                  <span className="text-3xl font-bold text-primary-foreground">A</span>
                </div>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Stop sending banking details via email</h3>
                  <p className="text-muted-foreground">Reduce fraud risk by eliminating unsecured exchanges.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Reduce payment delays</h3>
                  <p className="text-muted-foreground">Instant verification eliminates delays.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Tamper-proof payment information</h3>
                  <p className="text-muted-foreground">Verified data keeps payments secure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  4
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Instant updates to all customers</h3>
                  <p className="text-muted-foreground">Real-time updates ensure accuracy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  5
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Build trust at scale</h3>
                  <p className="text-muted-foreground">Professional verified presence builds confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
