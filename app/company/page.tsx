import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CompanyPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About Aplite
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              We are on a mission to eliminate payment fraud and errors by providing instant access to verified business banking information.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Our Mission</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Every day, businesses lose millions to payment fraud and errors caused by unverified banking information. We built Aplite to solve this problem.
            </p>
            <p className="text-lg text-muted-foreground">
              Our platform provides instant access to verified business banking data, protecting companies from fraud while streamlining their payment processes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Join Us</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Ready to protect your payments and eliminate fraud?
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
