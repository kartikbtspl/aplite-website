import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AIAgentsPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Built for AI Agents
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Give your AI agents access to verified banking data for autonomous payments.
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
              Integrate Aplite's API for AI-powered payments
            </h2>
            <p className="text-lg text-muted-foreground">
              Enable your AI agents to verify banking information and process payments autonomously with confidence.
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
