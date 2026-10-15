import { CircleQuestionMark } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export default function SidebarFooterItems() {
  const footerItems = [
    { title: "Help & resources", url: "/help", icon: CircleQuestionMark },
  ];
  return (
    <div>
      <SidebarMenu>
        {footerItems.map((item) => (
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
