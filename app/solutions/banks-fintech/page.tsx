import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, TrendingUp, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BanksFintechPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Built for Banks & Fintech
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Integrate verified banking data. Reduce payment errors by 99.9%.
            </p>
            <Button size="lg" asChild>
              <Link href="/get-started">
                Talk To Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Integrate Aplite's powerful API</h3>
                <p className="text-muted-foreground">
                  Reduce manual banking information entry and eliminate payment errors.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Instant audit for payment forms</h3>
                <p className="text-muted-foreground">
                  ACH, wire, or card: PCI. Aplite's instant payment method verification.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Meet ISO 20022 compliance standards</h3>
                <p className="text-muted-foreground">
                  Aplite's data meets global standards for payment fraud standards.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Turn verification into a competitive advantage</h3>
                <p className="text-muted-foreground">
                  Differentiate with verified banking information. Reduce chargebacks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to integrate verified banking data?
            </h2>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/get-started">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
