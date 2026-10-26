
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotToday() {
  return (
    <div>
      <div className="flex flex-col text-center justify-center gap-2 h-[80vh]">
        <p className="text-lg font-bold">Welcome to today&apos;s view</p>
        <p>See everything due today across all your projects</p>
        <div className="mt-5">
          <Button>
            <div className="flex flex-row gap-2 hover:cursor-pointer w-full">
              <Plus /> <span>Add task</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
