"use client";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PlusCircle, Plus } from "lucide-react";
import AddTask from "@/components/ui/create-task";

export default function AddTaskDialog() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Dialog>
        <DialogTrigger
          render={
            <Button
              variant="ghost"
              className=" flex flex-row gap-2 w-max p-4 hover:cursor-pointer  hover:text-destructive items-center hover:bg-gray-100 rounded-md h-10"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? <PlusCircle /> : <Plus />}

              <span>Add task</span>
            </Button>
          }
        ></DialogTrigger>

        <DialogContent
          showCloseButton={false}
          className="p4 gap-0 min-w-xs sm:min-w-xl md:min-w-3xl lg:min-w-4xl xl:min-w-6xl"
        >
          <AddTask />
        </DialogContent>
      </Dialog>
    </div>
  );
}
