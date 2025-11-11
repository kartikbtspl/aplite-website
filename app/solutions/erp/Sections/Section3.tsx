import BlankCard from "@/components/ui/BlankCard";
import { Button } from "@/components/ui/button";


export default function Section3() {

  return (
    <BlankCard>
      <div>
        <div className="space-y-4 text-center pt-6">
          <p className="text-2xl font-medium">
            Ready to integrate verified banking data?
          </p>
          <Button
            variant="primary"
            size="sm"
            showIcon={true}
            onClick={() => alert("Contact Us...")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </BlankCard>
  );
}
