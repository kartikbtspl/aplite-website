import { Search, FileCheck, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search",
      description: "Enter any address instantly using our verified database. Simple, fast, and reliable.",
    },
    {
      icon: FileCheck,
      title: "Review",
      description: "Check verified banking details with complete transparency and peace of mind.",
    },
    {
      icon: Send,
      title: "Pay",
      description: "Send money confidently, knowing every transaction reaches the right business.",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            How Aplite Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Payment fraud is a real risk when you verify before you pay.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-2 transition-all hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
