"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export default function SideTrigger() {
  const { state, isMobile } = useSidebar();

  const showTrigger = isMobile || state === "collapsed";
  return (
    <div>
      {showTrigger && <SidebarTrigger className="m-3 hover:cursor-pointer" />}
    </div>
  );
}
