"use client";

import { Plus, PlusCircle } from "lucide-react";
import React, { useState } from "react";

export default function AddTaskButtonSecondary() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" flex flex-row gap-2 w-max p-4 hover:cursor-pointer  hover:text-destructive items-center hover:bg-gray-100 rounded-md h-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <PlusCircle /> : <Plus />}

      <span>Add task</span>
    </div>
  );
}
