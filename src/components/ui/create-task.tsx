"use client";

import { Inbox, Plus, Calendar, X, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { createTask } from "@/actions/task.action";

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!taskName.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      await createTask(taskName);
      setTaskName("");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center ">
      {/* Input */}

      <input
        className="w-full focus:outline-none focus:ring-0 text-md py-2"
        placeholder="Do 30 mins coding today"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        disabled={isLoading}
      />

      {/* Actions */}
      <div className="flex flex-row items-center justify-between">
        {/* Left actions */}
        <div className="flex flex-row py-2 gap-2 items-center">
          <Button variant="destructive" className="hover:cursor-pointer p-2">
            <Plus />
          </Button>

          <Button
            variant="outline"
            className="flex flex-row border p-2 items-center gap-1 hover:cursor-pointer"
          >
            <Inbox />
            <span>Inbox</span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-row border p-2 items-center gap-1 hover:cursor-pointer"
          >
            <Calendar />
            <span>Date</span>
          </Button>
        </div>

        {/* Right actions */}
        <div className="flex flex-row py-2 gap-2 items-center ">
          <DialogClose
            render={
              <Button
                variant="ghost"
                className="hover:cursor-pointer p-2"
                onClick={() => setTaskName("")}
              />
            }
          >
            <X />
          </DialogClose>

          <Button
            variant="default"
            className="hover:cursor-pointer p-2"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <SendHorizontal />
          </Button>
        </div>
      </div>
    </div>
  );
}
