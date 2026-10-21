import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarHeader,
  SidebarTrigger,
  SidebarMenu,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";
import AddTaskButtonPrimary from "../ui/add-task-button";
import SidebarItems from "@/components/ui/sidebar-items";
import SidebarFooterItems from "@/components/ui/sidebar-footer-items";

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
        {/* actions */}
        <SidebarGroup>
          <AddTaskButtonPrimary />
        </SidebarGroup>

        {/* sidebar items */}
        <SidebarGroup>
          <SidebarItems />
        </SidebarGroup>
      </SidebarContent>

      {/* footer */}
      <SidebarFooter>
        <SidebarFooterItems />
      </SidebarFooter>
    </Sidebar>
  );
}
