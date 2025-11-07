import BlankCard from "@/components/ui/BlankCard";
import CardComponent from "@/components/ui/CardComponent";
import CardsGrid from "@/components/ui/GridCard";

export default function Section2() {
  return (
    <BlankCard>
      <div className="p-10">
        <h1 className="text-4xl  md:text-7xl font-light tracking-tight text-[#24004c] flex flex-col">
          <div className="flex justify-start mb-4">
            Turning <strong className="mx-4">Payments </strong> into
          </div>

          <div className="flex justify-end">Trusted  <strong className="mx-4">Relationships </strong></div>
        </h1>
      </div>

      <div className="px-10">
        <CardsGrid>
          <CardComponent
            imageSrc="/img/AR.png"
            title="Secure Payment"
            subtitle="Eliminate the risk of email-based and invoice-based payment information exchanges. Your banking details live in a secure, verified profile."
          />
          <CardComponent
            imageSrc="/img/AR.png"
            title="Digital Payment Profile"
            subtitle="Your payment information lives in a tamper-proof profile that cannot be edited or altered like invoices and PDFs. Customers always have your correct, verified details."
          />

          <CardComponent
            imageSrc="/img/AR.png"
            title="Build Trust"
            subtitle="When customers pay using your Aplite profile, they know the banking details are legitimate, reducing payment delays and fraud concerns."
          />
        </CardsGrid>
      </div>

      <div className="p-10">
        <h1 className="text-3xl flex justify-center mt-8 space-y-6 md:text-5xl font-lg leading-tight tracking-tight text-[#24004c] ">
          <div className="flex justify-start">
            Why <strong className="mx-1">Accounts Payable </strong> Teams choose{" "}
            <strong className="mx-4">Aplite</strong>{" "}
          </div>
        </h1>
      </div>
    </BlankCard>
  );
}
