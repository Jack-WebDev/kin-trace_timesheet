"use client";

import { clientApi } from "@/client/react";
import { toast } from "@/packages/ui";
import { Button } from "@/packages/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/packages/ui/dialog";
import { Input } from "@/packages/ui/input";
import { Label } from "@/packages/ui/label";
import { Edit } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export function UpdateDepartmentForm(params: { id: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [departmentName, setDepartmentName] = useState<string>("");

  const { data: department, error } =
    clientApi.department.getDepartment.useQuery(params.id, {
      enabled: !!params.id,
    });

  const departmentMutation = clientApi.department.updateDepartment.useMutation({
    onSuccess: (data) => {
      location.reload();
    },
    onError: (error) => {
      toast({
        variant: "error",
        title: "Error!",
        description: error.message || "Unknown error",
      });
    },
  });

  const handleSubmit = async () => {
    departmentMutation.mutate({
      id: params.id,
      name: departmentName,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Edit />
      </DialogTrigger>
      <DialogContent className="w-[50%] rounded-xl border p-4">
        <DialogHeader>
          <DialogTitle>Edit Department</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Label htmlFor="name">
              Department Name
            </Label>
            <Input
              id="name"
              defaultValue={department?.name}
              className="border border-[#dda83a] rounded-xl w-full"
              onChange={(e) => setDepartmentName(e.target.value)}
            //   value={departmentName}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="rounded-xl bg-[#dda83a] text-white hover:bg-[#dda83a]/80" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
