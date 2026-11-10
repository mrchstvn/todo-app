"use client";

import NavBar from "@/components/layout/navbar";
import { usePathname } from "next/navigation";

export default function ConditionalNavBar() {
  const showNavBar = ["/"];
  const pathname = usePathname();

  if (!showNavBar.includes(pathname)) {
    return null;
  }
  return <NavBar />;
}
