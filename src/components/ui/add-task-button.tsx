"use client";

import { Plus, PlusCircle } from "lucide-react";
import React, { useState } from "react";

export default function AddTaskButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mt-4 flex flex-row gap-2 w-35 hover:cursor-pointer  hover:text-blue-300 items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <PlusCircle /> : <Plus />}

      <span>Add task</span>
    </div>
  );
}
