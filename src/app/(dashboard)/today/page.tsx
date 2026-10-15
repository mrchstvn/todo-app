import AddTask from "@/components/ui/add-task";
import AddTaskButtonSecondary from "@/components/ui/add-task-button-secondary";

import Task from "@/components/ui/task";
import Today from "@/components/ui/today";

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold ">Today</h2>
      <Today />
      <Task />
      <Task />
      <AddTaskButtonSecondary />
      <AddTask />
    </div>
  );
}
