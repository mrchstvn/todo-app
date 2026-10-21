import AddTaskButtonPrimary from "./add-task-button";

export default function EmptyTask() {
  return (
    <div className="flex flex-col  items-center mt-64 gap-2">
      <h1 className="text-2xl font-bold">Nothing here yet.</h1>
      <p className="text-md">Your task will appear here once you make one.</p>
      <p className="text-md">Start making a task.</p>
      <div className="mt-5">
        <AddTaskButtonPrimary />
      </div>
    </div>
  );
}
