import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 text-center text-primary-foreground md:px-16 md:py-24">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to protect your payments?
          </h2>
          <p className="mb-8 text-lg opacity-90 md:text-xl">
            Join thousands of businesses using Aplite to verify banking details.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="text-white hover:bg-white/10" asChild>
              <Link href="/get-started">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
