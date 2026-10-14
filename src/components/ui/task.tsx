"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Edit, Ellipsis, Inbox, MessageSquare } from "lucide-react";
import React, { useState } from "react";
export default function Task() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full mt-4 pl-8 hover:cursor-pointer border-b"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row items-center text-md justify-between">
        <div className="flex flex-row gap-3 items-center">
          <Checkbox />
          <span>Do laundry today</span>
        </div>
        <div className="flex flex-row gap-3 items-center">
          {isHovered && <Edit size={20} />}
          {isHovered && <Calendar size={20} />}
          {isHovered && <MessageSquare size={20} />}
          {isHovered && <Ellipsis size={20} />}
        </div>
      </div>
      <div className="text-right flex flex-row justify-end items-center gap-2 mt-2">
        <span className="text-xs">Inbox</span> <Inbox size={12} />
      </div>
    </div>
  );
}
