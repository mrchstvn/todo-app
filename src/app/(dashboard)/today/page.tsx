import AddTaskButton from "@/components/ui/add-task-button";

import Task from "@/components/ui/task";

import { CheckCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-5">
      {/* header */}
      <div>
        <h2 className="text-2xl font-bold ">Today</h2>
        <div className="flex flex-row gap-2 items-center">
          <CheckCircle width={15} height={15} />
          <span className="text-sm">1 task</span>
        </div>
      </div>

      {/* tasks */}
      <div>
        <Task />
        <Task />
      </div>

      {/* actions */}
      <div className="w-fit">
        <AddTaskButton />
      </div>
    </div>
  );
}
