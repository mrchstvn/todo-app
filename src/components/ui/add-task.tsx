import { Inbox, Plus, Calendar, X, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function AddTask() {
  return (
    <div className="flex flex-col justify-center border md:max-w-10/12 min-h-20 rounded-xl m-auto p-4">
      {/* Input */}
      <div className="flex flex-row gap-2 ">
        <input
          className="w-full focus:outline-none focus:ring-0 text-md py-2"
          placeholder="Do 30 mins coding today"
        ></input>
      </div>

      {/* Actions */}
      <div className="flex flex-row items-center justify-between">
        {/* Left actions */}
        <div className="flex flex-row py-2 gap-2 items-center">
          <Button variant="destructive" className="hover:cursor-pointer p-2">
            <Plus />
          </Button>

          <Button
            variant="outline"
            className="flex flex-row border p-2 items-center gap-1 hover:cursor-pointer"
          >
            <Inbox />
            <span>Inbox</span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-row border p-2 items-center gap-1 hover:cursor-pointer"
          >
            <Calendar />
            <span>Date</span>
          </Button>
        </div>

        {/* Right actions */}
        <div className="flex flex-row py-2 gap-2 items-center ">
          <Button variant="ghost" className="hover:cursor-pointer p-2">
            <X />
          </Button>
          <Button variant="default" className="hover:cursor-pointer p-2">
            <SendHorizontal />
          </Button>
        </div>
      </div>
    </div>
  );
}
