import { CheckCircle2, AlertCircle } from "lucide-react";

export function Benefits() {
  const risks = [
    "Scam fraud can cost up to $50k",
    "Wrong or expired data is too common",
    "Changing details over multiple bank accounts",
    "Legitimate vendors may be using stolen or incorrect details",
    "Vendor data - unverified or wrong",
  ];

  const solutions = [
    "Instant verification eliminates the risk of sending money to the wrong account",
    "Up-to-date data removes delays and failed payments",
    "Aplite confirms vendor banking details before you send money",
    "Vendor verification ensures banking details are legitimate and current",
    "All payment information is pre-verified and regularly updated for accuracy",
    "Aplite integrates seamlessly with your existing workflow and sending process",
  ];

  return (
    <section className="bg-muted/50 py-20 md:py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Why businesses need Aplite
          </h2>
          <p className="text-lg text-muted-foreground">
            The real risks of unverified payments and how Aplite eliminates them.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Risks */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Real Risks Of Unverified Payments</h3>
            <ul className="space-y-4">
              {risks.map((risk, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                  <span className="text-muted-foreground">{risk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">How Aplite Eliminates Them</h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center Logo */}
        <div className="mt-16 flex justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary">
              <span className="text-4xl font-bold text-primary-foreground">A</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
