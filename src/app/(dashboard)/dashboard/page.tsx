import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-10 m-h-screen md:px-20">
      <h2 className="text-2xl font-bold ">Today</h2>
      <div className="flex flex-col text-center justify-center gap-2 h-[80vh]">
        <p className="text-lg font-bold">Welcome to today's view</p>
        <p>See everything due today across all your projects</p>
        <div className="mt-5">
          <Button>
            <div className="flex flex-row gap-2 hover:cursor-pointer w-full">
              <Plus /> <p>Add task</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
