import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InvoicingPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Built for Invoicing Software
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Add verified banking data to every invoice. Get paid faster.
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
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
              Integrate Aplite to add verified banking data
            </h2>
            <p className="text-lg text-muted-foreground">
              Help your customers pay faster with verified, up-to-date banking information on every invoice.
            </p>
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
