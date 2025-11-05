import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function PricingPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Choose the plan that's right for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Up to 100 verifications/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Basic API access</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" variant="outline" asChild>
                  <Link href="/get-started">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary">
              <CardHeader>
                <div className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Up to 1,000 verifications/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Full API access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Real-time alerts</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" asChild>
                  <Link href="/get-started">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Unlimited verifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>SLA guarantee</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" variant="outline" asChild>
                  <Link href="/get-started">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to get started?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join thousands of businesses protecting their payments with Aplite.
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
    </>
  );
}
