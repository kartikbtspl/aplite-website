import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Zap, Database, ArrowRight } from "lucide-react";

export default function ProductPage() {
  const features = [
    {
      icon: Shield,
      title: "Verified Banking Data",
      description: "Access real-time, verified business banking information to eliminate fraud and errors.",
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Verify banking details in seconds, not days. Speed up your payment process.",
    },
    {
      icon: Database,
      title: "Always Up-to-Date",
      description: "Our database is continuously updated to ensure you always have current information.",
    },
  ];

  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              The Complete Payment Verification Platform
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Everything you need to verify business banking information and protect against payment fraud.
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
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to verify payments with confidence
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
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
