import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1">
          <Button variant="ghost" className="hover:cursor-pointer">
            <User />
            <span>Username</span>
          </Button>
        </div>
        <div className="flex flex-row gap-1  items-center">
          <Button variant="ghost" className="hover:cursor-pointer">
            <Bell />
          </Button>

          <SidebarTrigger className="w-10 h-10 hover:cursor-pointer" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
