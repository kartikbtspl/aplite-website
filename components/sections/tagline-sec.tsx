import { Search, ArrowRight } from "lucide-react";
import Button from "../ui/Buttons";

export default function TaglineSec() {
  return (
    <div className="flex flex-col items-center justify-center w-full rounded-2xl bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 py-10 px-6 text-center">
      <h1 className="text-white text-2xl md:text-3xl font-semibold mb-6">
        We don't move money. We direct where it goes.
      </h1>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center bg-white rounded-xl px-4 w-[280px] sm:w-[400px] shadow-md h-10 sm:h-12 md:h-14">
          <Search className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search Anything"
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <Button variant="primary" size="lg" label="Get Started" className="w-auto px-6 sm:px-8 h-10 sm:h-12 md:h-14">
        </Button>
      </div>
    </div>
  );
}
