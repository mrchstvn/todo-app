"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddTask from "@/components/ui/create-task";

export default function AddTaskButton() {
  return (
    <div>
      <Dialog>
        <DialogTrigger
          render={
            <Button
              className=" flex flex-row gap-2 hover:cursor-pointer items-center justify-start hover:bg-gray-100 rounded-md w-full h-10 p-4"
              variant="destructive"
            >
              <PlusCircle />
              <span className="text-destructive">Add task</span>
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
