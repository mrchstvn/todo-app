import AddTask from "@/components/ui/add-task";
import Task from "@/components/ui/task";
import Today from "@/components/ui/today";

export default function DashboardPage() {
  return (
    <div className="p-10 m-h-screen md:px-20">
      <h2 className="text-2xl font-bold ">Today</h2>
      <Today />
      <Task />
      <Task />
      <AddTask />
    </div>
  );
}
