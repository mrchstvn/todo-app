import { CalendarDays, Calendar1, ShieldX } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export default function SidebarItems() {
  const sidebarItems = [
    { title: "Today", url: "/today", icon: Calendar1 },
    { title: "Upcoming", url: "/upcoming", icon: CalendarDays },
    { title: "Due", url: "/due", icon: ShieldX },
  ];
  return (
    <div>
      <SidebarMenu>
        {sidebarItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton className="h-10 p-4  hover:cursor-pointer">
              <a
                href={item.url}
                className="flex flex-row gap-2 items-center w-full"
              >
                <item.icon />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </div>
  );
}
