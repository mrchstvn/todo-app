import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import { useState } from "react";
import DeleteTask from "./delete-task";

type DeleteTaskButtonProps = {
  id: string;
};
export default function DeleteTaskButton({ id }: DeleteTaskButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger
          render={
            <Button variant="ghost" className="hover:cursor-pointer ">
              <Trash size={20} />
            </Button>
          }
        ></DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="p4 gap-0 min-w-xs max-w-md"
        >
          <DeleteTask onSuccess={() => setIsOpen(false)} id={id} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
