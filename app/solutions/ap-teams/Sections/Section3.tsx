import BlankCard from "@/components/ui/BlankCard";
import Button from "@/components/ui/Buttons";
import { CircleArrowOutUpRight } from "lucide-react";
export default function Section3() {
  return (
    <BlankCard>
      <div className="p-6 space-y-6">
        <div className="flex justify-center items-start">
          <p className="text-2xl font-medium  leading-tight">
            Ready to transform your AP process?
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button
            label="Verify Your First Vendor"
            //onClick={onButtonClick}
            variant="primary"
            size="sm"
          />

          <Button
            icon={CircleArrowOutUpRight}
            label="Join Aplite"
            //onClick={onButtonClick}
            variant="primary"
            size="sm"
          />
        </div>
      </div>
    </BlankCard>
  );
}
