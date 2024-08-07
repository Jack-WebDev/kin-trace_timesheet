"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  toast as showToast, // Renaming the imported toast to avoid naming conflict
  Loader,
  Button,
  useToast,
  Dialog,
} from "@/packages/ui";
import { Trash2 } from "lucide-react";
import { clientApi } from "@/client/react";
import { ModelName } from "@/client/apiModel";

export const DeleteAction = (props: ActionProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { actionId, model } = props;
  const { toast } = useToast(); 

  const deleteMutation = clientApi[model as ModelName].delete.useMutation({
    onSuccess: async (data) => {
      setLoading(false); // Stop loading on success
      toast({
        variant: "success",
        title: "Success",
        description: `${data.message}`,
      });

      await new Promise((resolve) =>
        setTimeout(() => {
          location.reload();
        }, 100),
      );
    },
    onError: (error) => {
      setLoading(false); // Stop loading on error
      toast({
        variant: "error",
        title: "Error!",
        description: error?.message,
      });
    },
  });

  const deleteAction = async (id: string) => {
    setLoading(true); // Start loading before mutation
    deleteMutation.mutate(id);
    
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="danger" className="h-fit w-fit px-2">
          <Trash2 size={25} className="text-black" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-[200px] w-[500px] bg-white border shadow-xl">
        {loading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Loader className="border-primary" />
          </div>
        ) : (
          <>
            <AlertDialogHeader className="text-lg font-semibold">
              Are you sure you want to delete?
            </AlertDialogHeader>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              information.
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel className="h-10 bg-red-500 text-white hover:bg-red-500/80 rounded-xl hover:text-white hover:border-none">
                Cancel
              </AlertDialogCancel>
              <Button
                onClick={() => deleteAction(actionId)}
                className="h-10 bg-[#015a4a] text-white hover:bg-[#015a4a]/80 rounded-xl"
              >
                {loading ? (
                  <div className="flex h-full w-full items-center justify-center">
                    <Loader size="xs" className="h-6 w-6 border-white" />
                  </div>
                ) : (
                  "Confirm"
                )}
              </Button>
            </AlertDialogFooter>
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

type ActionProps = {
  actionId: string;
  model: string;
};
