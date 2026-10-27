import { getTasks } from "@/app/actions/task.action";
import { Suspense } from "react";
import AddTaskButton from "@/components/ui/add-task-button";

import Task from "@/components/ui/task";

import { CheckCircle } from "lucide-react";
import EmptyTask from "@/components/ui/empty-task";

async function TaskContent() {
  const tasks = await getTasks();
  const now: Date = new Date();

  const todayTasks = tasks.filter((task) => isSameDay(task.due, now));

  function isSameDay(a: Date, b: Date) {
    return a.toDateString() === b.toDateString();
  }

  if (todayTasks.length < 1) {
    return <EmptyTask />;
  }

  return (
    <div className="flex flex-col gap-5">
      {/* header */}

      <div>
        <h2 className="text-2xl font-bold ">Today</h2>
        <div className="flex flex-row gap-2 items-center">
          <CheckCircle width={15} height={15} />
          <span>
            {todayTasks.length} {todayTasks.length == 1 ? "task" : "tasks"}
          </span>
        </div>
      </div>

      {/* tasks */}

      <div className="max-h-140 overflow-y-auto pr-10">
        {tasks.map((task) =>
          isSameDay(task.due, now) ? (
            <Task
              key={task.id}
              id={String(task.id)}
              taskName={task.title}
              completed={task.isCompleted}
              dueDate={task.due}
            />
          ) : null,
        )}
      </div>

      {/* actions */}
      <div className="w-fit">
        <AddTaskButton />
      </div>
    </div>
  );
}

export default function TodayPage() {
  return (
    <Suspense
      fallback={
        <p className="min-h-screen flex justify-center items-center text-center text-lg">
          Loading tasks...
        </p>
      }
    >
      <TaskContent />
    </Suspense>
  );
}
