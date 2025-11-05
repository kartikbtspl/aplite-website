"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold tracking-tight">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your Aplite account</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="password" className="mb-2 block text-sm font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    required
                    className="h-12 w-full rounded-lg border bg-background px-4 focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Don't have an account? </span>
                <Link href="/get-started" className="font-medium text-primary hover:underline">
                  Get Started
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
