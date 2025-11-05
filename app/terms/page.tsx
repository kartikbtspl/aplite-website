export default function TermsPage() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight">Terms of Service</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using Aplite's services, you agree to be bound by these Terms of Service.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Use of Services</h2>
            <p className="text-muted-foreground">
              You may use our services only as permitted by law and these Terms.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Account Responsibilities</h2>
            <p className="text-muted-foreground">
              You are responsible for maintaining the security of your account and password.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
