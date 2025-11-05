import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, RefreshCw, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ERPPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Built for ERP Systems
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              AutoFill verified banking information. Cut manual entry by 98%.
            </p>
            <Button size="lg" asChild>
              <Link href="/get-started">
                Talk To Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Integrate Aplite's API to autofill payment information
                </h3>
                <p className="text-muted-foreground">
                  Users enter an email or business name and Aplite autofills banking information.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Keep vendor data current automatically
                </h3>
                <p className="text-muted-foreground">
                  Sync new vendors from Aplite to your ERP. Automatically update existing vendor information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
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
            <div className="space-y-8">
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right">
                  <h3 className="mb-2 text-lg font-semibold">User enters Aplite PIN</h3>
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex items-center gap-8">
                <div className="h-px flex-1 bg-border" />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">API call to Aplite</h3>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right">
                  <h3 className="mb-2 text-lg font-semibold">Verified data returns</h3>
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex items-center gap-8">
                <div className="h-px flex-1 bg-border" />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">ERP autofills payment form</h3>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right">
                  <h3 className="mb-2 text-lg font-semibold">User confirms & pays</h3>
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="mb-6 text-lg font-medium">Ready to integrate verified banking data?</p>
            <Button size="lg" asChild>
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
