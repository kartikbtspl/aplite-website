import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Trusted by thousands
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold md:text-5xl">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
