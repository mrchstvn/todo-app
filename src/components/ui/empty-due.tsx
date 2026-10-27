import { LucideThumbsUp } from "lucide-react";
import React from "react";

export default function EmptyDue() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-center items-center gap-4">
      <div>
        <LucideThumbsUp size={40} />
      </div>
      <div>
        <h1 className="text-xl font-bold">Your task list is clear.</h1>
        <p className="text-md">No tasks are currently due.</p>
      </div>
    </div>
  );
}
