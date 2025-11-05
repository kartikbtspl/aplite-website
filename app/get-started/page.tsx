"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon.");
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Get Started with Aplite
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="h-12 w-full rounded-lg border bg-background px-4 focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="h-12 w-full rounded-lg border bg-background px-4 focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="h-12 w-full rounded-lg border bg-background px-4 focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
