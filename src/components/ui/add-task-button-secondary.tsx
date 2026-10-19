"use client";

import { Plus, PlusCircle } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddTask from "./add-task";

export default function AddTaskButtonSecondary() {
  const [isHovered, setIsHovered] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setShowAddTask(!showAddTask)}
        variant="ghost"
        className=" flex flex-row gap-2 w-max p-4 hover:cursor-pointer  hover:text-destructive items-center hover:bg-gray-100 rounded-md h-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <PlusCircle /> : <Plus />}

        <span>Add task</span>
      </Button>
      {showAddTask && (
        <div className="flex h-screen w-screen justify-center bg-gray-100">
          <AddTask />
        </div>
      )}
    </div>
  );
}
