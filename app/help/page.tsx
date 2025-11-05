import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export default function HelpPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Help Center
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Get the support you need to make the most of Aplite.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Get help via email from our support team.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/get-started">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Chat with our team in real-time.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/get-started">Start Chat</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Browse our comprehensive guides.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/help">View Docs</Link>
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
              Still have questions?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our team is here to help you get started.
            </p>
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
