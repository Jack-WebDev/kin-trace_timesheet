import { Button, Dialog, DialogContent, DialogTrigger } from "@/packages/ui";
import { Pencil, Plus } from "lucide-react";
import React from "react";
import { CreateForm } from "./createForm";
import type { UserType } from "@/schema";
import { UpdateForm } from "./updateForm";

export function UserActions(props: UserActionsProps) {
  const { action, user } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {action === "create" ? (
          <Button variant="primary" className="flex items-center text-white">
            <Plus size={15} className="mr-2 text-white" />
            <span className="font-md font-medium text-white">New user</span>
          </Button>
        ) : (
          <Button variant="ghost">
            <span className="sr-only">Open menu</span>
            <Pencil size={10} className="h-6 w-4 text-gray-500" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="min-w-none max-h-full overflow-y-auto md:min-w-max ">
        <span className="mb-2 pb-2 text-center text-lg font-bold ">
          {action === "create" ? (
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-start text-2xl font-semibold">
                Add new user
              </h1>
            </div>
          ) : (
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-start text-2xl font-semibold">User update</h1>
            </div>
          )}
        </span>

        {action === "create" ? (
          <CreateForm />
        ) : (
          <p>Update form</p>
          // user && <UpdateForm user={user} userAddress={address} />
        )}
      </DialogContent>
    </Dialog>
  );
}

type UserActionsProps = {
  action: string;
  user?: UserType;
};
