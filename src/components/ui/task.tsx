"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Edit, Ellipsis, Inbox, MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import UpdateTaskButton from "@/components/ui/update-task-button";
import { Button } from "@/components/ui/button";
import { completeTask } from "@/app/actions/task.action";
import DeleteTaskButton from "@/components/ui/delete-task-button";

type TaskProps = {
  id: string;
  taskName: string;
  completed: boolean;
  dueDate: Date;
};

export default function Task({ id, taskName, completed, dueDate }: TaskProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [checked, setChecked] = useState(completed);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckedChange = async (value: boolean) => {
    setChecked(value);
    setIsLoading(true);

    try {
      const result = await completeTask(Number(id), value);

      if (!result.success) {
        setChecked(!value);
        console.error(result.error);
      }
    } catch (error) {
      setChecked(!value);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className="w-full mt-4 pl-8 hover:cursor-pointer border-b h-15"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row items-center text-md justify-between h-7">
        <div className="flex flex-row gap-3 items-center">
          <Checkbox
            id={`task-${id}`}
            checked={checked}
            disabled={isLoading}
            onCheckedChange={(value) => handleCheckedChange(value === true)}
          />
          <span className={cn(checked && "line-through")}>{taskName}</span>
        </div>
        <div className="flex flex-row items-center">
          {isHovered && <UpdateTaskButton id={id} title={taskName} />}

          {isHovered && <DeleteTaskButton id={id} />}
          {isHovered && (
            <Button variant="ghost" className="hover:cursor-pointer">
              <Ellipsis size={20} />
            </Button>
          )}
        </div>
      </div>
      <div className="text-right flex flex-row justify-between items-center gap-2 mt-2">
        <span className="text-xs text-red-400">
          Due: {dueDate.toDateString()}
        </span>
        <div className="text-right flex flex-row gap-1 items-center">
          <span className="text-xs">Inbox</span> <Inbox size={12} />
        </div>
      </div>
    </div>
  );
}
