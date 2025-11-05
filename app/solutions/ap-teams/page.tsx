import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, CheckCircle2, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";

export default function APTeamsPage() {
  const features = [
    {
      icon: Search,
      title: "Search and retrieve verified business",
      description: "Easily find and verify business banking details through email. Give customers a verified way they can pay.",
    },
    {
      icon: CheckCircle2,
      title: "Proactively payments with confidence",
      description: "End the back-and-forth of verifying payment details. Aplite gives you confidence in every transaction.",
    },
    {
      icon: Bell,
      title: "Stay proactive with real-time alerts",
      description: "Get notified when customer banking details change, ensuring you always have current information.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Stop sending banking details via email",
      description: "Reduce the risk of fraud by eliminating unsecured email exchanges of banking information.",
    },
    {
      number: "2",
      title: "Reduce payment delays",
      description: "Eliminate mismatched payments with instant verification of banking details.",
    },
    {
      number: "3",
      title: "Eliminate mismatched payments",
      description: "Professional, verified data that keeps your payment process running smoothly.",
    },
    {
      number: "4",
      title: "Professional, verified presence",
      description: "Build trust with customers through verified, up-to-date banking information.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="container py-8 md:py-12">
        <PageHero
          title="Built for Accounts Payable Teams"
          subtitle="Search, Verify & Pay in seconds"
          primaryButton={{
            text: "Get Started",
            href: "/get-started",
            showIcon: true,
          }}
          secondaryButton={{
            text: "Schedule Demo",
            href: "/get-started",
            showIcon: false,
          }}
          backgroundImage="/img/AP.png"
        />
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2">
                  <CardContent className="p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
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

      {/* Ready to transform section */}
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

      {/* How It Works Section */}
      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Center Logo */}
            <div className="mb-16 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                  <span className="text-3xl font-bold text-primary-foreground">A</span>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="grid gap-8 md:grid-cols-2">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
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

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 text-center text-primary-foreground md:px-16 md:py-24">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Get started with Aplite today
            </h2>
            <p className="mb-8 text-lg opacity-90 md:text-xl">
              Transform your AR process with verified banking data
            </p>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
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
