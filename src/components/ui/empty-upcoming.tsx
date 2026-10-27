import { PartyPopper } from "lucide-react";
import React from "react";

export default function EmptyUpcoming() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-center items-center gap-4">
      <div>
        <PartyPopper size={40} />
      </div>
      <div>
        <h1 className="text-xl font-bold">You&apos;re all caught up!</h1>
        <p className="text-md">You have no upcoming tasks at the moment.</p>
      </div>
    </div>
  );
}
