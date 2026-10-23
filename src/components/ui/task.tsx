"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Edit, Ellipsis, Inbox, MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import UpdateTaskButton from "./update-task-button";
import { Button } from "@base-ui/react";

type TaskProps = {
  id: string;
  taskName: string;
};

export default function Task({ id, taskName }: TaskProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div
      className="w-full mt-4 pl-8 hover:cursor-pointer border-b"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row items-center text-md justify-between">
        <div className="flex flex-row gap-3 items-center">
          <Checkbox
            id={`task-${id}`}
            checked={checked}
            onCheckedChange={(value) => setChecked(value === true)}
          />
          <span className={cn(checked && "line-through")}>{taskName}</span>
        </div>
        <div className="flex flex-row gap-3 items-center">
          {isHovered && <UpdateTaskButton id={id} title={taskName} />}
          {isHovered && (
            <Button>
              <Calendar size={20} />
            </Button>
          )}
          {isHovered && (
            <Button>
              <MessageSquare size={20} />
            </Button>
          )}
          {isHovered && (
            <Button>
              <Ellipsis size={20} />
            </Button>
          )}
        </div>
      </div>
      <div className="text-right flex flex-row justify-end items-center gap-2 mt-2">
        <span className="text-xs">Inbox</span> <Inbox size={12} />
      </div>
    </div>
  );
}
