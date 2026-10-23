import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@base-ui/react";

import { Edit } from "lucide-react";
import { useState } from "react";
import UpdateTask from "@/components/ui/update-task";

type UpdateTaskButtonProps = {
  id: string;
  title: string;
};

export default function UpdateTaskButton({ id, title }: UpdateTaskButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger
          render={
            <Button className="hover:cursor-pointer">
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
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
