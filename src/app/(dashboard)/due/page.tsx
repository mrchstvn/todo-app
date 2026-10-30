import EmptyDue from "@/components/ui/empty-due";
import { getTasks } from "@/app/actions/task.action";
import { Suspense } from "react";
import React from "react";
import Task from "@/components/ui/task";
import { CheckCircle } from "lucide-react";

async function DueContent() {
  const tasks = await getTasks();
  const now: Date = new Date();

  const dueTasks = tasks.filter((task) => isDue(task.due, now));

  function isDue(a: Date, b: Date) {
    const dueDay = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    const now = new Date(b.getFullYear(), b.getMonth(), b.getDate());
    return dueDay.getTime() < now.getTime();
  }

  if (dueTasks.length < 1) {
    return <EmptyDue />;
  }

  return (
    <div className="flex flex-col gap-5">
      {/* header */}

      <div>
        <h2 className="text-2xl font-bold ">Due tasks</h2>
        <div className="flex flex-row gap-2 items-center">
          <CheckCircle width={15} height={15} />
          <span>
            {dueTasks.length} {dueTasks.length == 1 ? "task" : "tasks"}
          </span>
        </div>
      </div>

      {/* tasks */}

      <div className="max-h-140 overflow-y-auto pr-10">
        {tasks.map((task) =>
          isDue(task.due, now) ? (
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
    </div>
  );
}

export default function DuePage() {
  return (
    <Suspense
      fallback={
        <p className="min-h-screen flex justify-center items-center text-center text-lg">
          Loading tasks...
        </p>
      }
    >
      <DueContent />
    </Suspense>
  );
}
