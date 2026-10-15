"use client";

import { Button } from "@/components/ui/button";
import { Plus, PlusCircle, PlusSquare } from "lucide-react";
import React, { useState } from "react";

export default function AddTaskButtonPrimary() {
  return (
    <Button
      className=" flex flex-row gap-2 hover:cursor-pointer items-center justify-start hover:bg-gray-100 rounded-md w-full h-10 p-4"
      variant="destructive"
    >
      <PlusCircle />
      <span className="text-destructive">Add task</span>
    </Button>
  );
}
