"use client";

import { Inbox, Plus, Calendar, X, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { createTask } from "@/app/actions/task.action";
import { DatePickerInput } from "@/components/ui/date-picker";

export default function CreateTask({ onSuccess }: { onSuccess?: () => void }) {
  const [taskName, setTaskName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dueDate, setDueDate] = useState<Date>(new Date());

  const handleSubmit = async () => {
    if (!taskName.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      const result = await createTask(taskName, dueDate);
      if (!result.success) {
        console.error(result.error);
        return;
      }
      setTaskName("");
      onSuccess?.(); // close the dialog***
    } catch (error) {
      console.error("Error in creating task", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
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
        onKeyDown={handeKeyDown}
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

          <DatePickerInput
            date={dueDate}
            onDateChange={(d) => {
              if (d) setDueDate(d);
            }}
          />
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
