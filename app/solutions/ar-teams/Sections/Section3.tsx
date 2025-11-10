import BlankCard from "@/components/ui/BlankCard";
import  Button  from "@/components/ui/Buttons";
import { CheckCircle, CircleArrowOutUpRight, Key, TrendingUp, UserCircle } from "lucide-react";

export default function Section3() {
  return (
    <>
      <BlankCard>
        <div className="mb-10">
          <div className="flex justify-center  pt-10  items-start">
            <p className="text-lg font-medium mb-4 text-[#1b2f6e] leading-tight">
              Ready to transform your AR process?
            </p>
          </div>
          <div className="flex justify-center pb-10 items-center gap-4">
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
    </>
  );
}
