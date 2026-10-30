import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Edit } from "lucide-react";
import { useState } from "react";
import UpdateTask from "@/components/ui/update-task";

type UpdateTaskButtonProps = {
  id: string;
  title: string;
  due: Date;
};

export default function UpdateTaskButton({
  id,
  title,
  due,
}: UpdateTaskButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger
          render={
            <Button variant="ghost" className="hover:cursor-pointer">
              <Edit size={20} />
            </Button>
          }
        />
        <DialogContent
          showCloseButton={false}
          className="p4 gap-0 min-w-xs sm:min-w-xl md:min-w-3xl lg:min-w-4xl xl:min-w-6xl"
        >
          <UpdateTask
            onSuccess={() => setIsOpen(false)}
            id={id}
            title={title}
            due={due}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
