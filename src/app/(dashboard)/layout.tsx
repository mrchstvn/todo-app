import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import SideTrigger from "@/components/layout/sidetrigger";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SideTrigger />
      <main className="w-full px-6 pt-5 m-h-screen lg:px-20">{children}</main>
    </SidebarProvider>
  );
}
