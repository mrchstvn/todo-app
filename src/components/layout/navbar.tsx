import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="h-18 w-full flex flex-row justify-between items-center px-5">
      <Link href="/" className="p-4">
        Logo
      </Link>
      <Button className="p-4 hover:cursor-pointer">Sign in</Button>
    </div>
  );
}
