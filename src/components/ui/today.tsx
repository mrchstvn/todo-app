import { CheckCircle } from "lucide-react";
import React from "react";

export default function Today() {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <CheckCircle width={15} height={15} />
        <span className="text-sm">1 task</span>
      </div>
    </div>
  );
}
