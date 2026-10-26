import { deleteTask } from "@/app/actions/task.action";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

type DeleteTaskProps = {
  onSuccess?: () => void;
  id: string;
};
export default function DeleteTask({ onSuccess, id }: DeleteTaskProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await deleteTask(Number(id));

      onSuccess?.(); // close the dialog***
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full gap-3 justify-center items-center ">
      {/* question */}
      <p className="text-xl">Are you sure you want to delete this task?</p>

      {/* Actions */}
      <div className="flex flex-row items-center justify-between">
        {/* Left actions */}
        <div className="flex flex-row py-2 gap-2 items-center">
          <Button
            variant="destructive"
            className="hover:cursor-pointer p-2 w-10"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <p>Yes</p>
          </Button>

          <DialogClose
            render={
              <Button
                variant="outline"
                className="hover:cursor-pointer p-2 w-10"
              ></Button>
            }
          >
            <p>No</p>
          </DialogClose>
        </div>
      </div>
    </div>
  );
}
