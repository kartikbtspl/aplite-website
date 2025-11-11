import BlankCard from "@/components/ui/BlankCard";
import { Button } from "@/components/ui/button";

export default function Section3() {
  return (
    <BlankCard>
      <div className="space-y-8">
        <div className="space-y-4 text-center pt-6">
          <p className="text-2xl font-medium">
            Ready to eliminate invoice fraud?
          </p>
          <Button
            variant="primary"
            size="sm"
            showIcon={true}
            onClick={() => alert("Talk To Our Team...")}
          >
            Talk To Our Team
          </Button>
        </div>
      </div>
    </BlankCard>
  );
}
