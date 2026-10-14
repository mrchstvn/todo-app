"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export default function SideTrigger() {
  const { state } = useSidebar();

  return (
    <div>
      {state === "collapsed" && (
        <SidebarTrigger className="m-3 hover:cursor-pointer" />
      )}
    </div>
  );
}
