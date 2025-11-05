export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Introduction</h2>
            <p className="text-muted-foreground">
              This Privacy Policy describes how Aplite collects, uses, and protects your personal information.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, including name, email address, and company information.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
