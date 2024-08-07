"use client";

import { clientApi } from "@/client/react";
import { toast } from "@/packages/ui";
import { Button } from "@/packages/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/packages/ui/dialog";
import { Input } from "@/packages/ui/input";
import { Label } from "@/packages/ui/label";
import { Edit } from "lucide-react";
import { useState } from "react";

export function UpdateProjectForm(params: { id: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");
  const [projectManager, setProjectManager] = useState<string>("");
  const [projectClient, setProjectClient] = useState<string>("");

  const { data: project, error } =clientApi.project.getProject.useQuery(params.id, {
      enabled: !!params.id,
    });

  const projectMutation = clientApi.project.updateProject.useMutation({
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
    projectMutation.mutate({
      id: params.id,
      name: projectName,
      manager: projectManager,
      client: projectClient,
      departmentId: "",
      description: "",
      projectTeam: [],
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Edit />
      </DialogTrigger>
      <DialogContent className="w-[50%] rounded-xl border p-4">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Label htmlFor="name">
              Project Name
            </Label>
            <Input
              id="name"
              defaultValue={project?.name}
              className="border border-[#dda83a] rounded-xl w-full"
              onChange={(e) => setProjectName(e.target.value)}
            //   value={departmentName}
            />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="name">
              Client Name
            </Label>
            <Input
              id="name"
              defaultValue={project?.name}
              className="border border-[#dda83a] rounded-xl w-full"
              onChange={(e) => setProjectName(e.target.value)}
            //   value={departmentName}
            />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="name">
              Department Name
            </Label>
            <Input
              id="name"
              defaultValue={project?.name}
              className="border border-[#dda83a] rounded-xl w-full"
              onChange={(e) => setProjectName(e.target.value)}
            //   value={departmentName}
            />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="name">
              Supervisor Name
            </Label>
            <Input
              id="name"
              defaultValue={project?.name}
              className="border border-[#dda83a] rounded-xl w-full"
              onChange={(e) => setProjectName(e.target.value)}
            //   value={departmentName}
            />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="name">
              Project Description
            </Label>
            <Input
              id="name"
              defaultValue={project?.name}
              className="border border-[#dda83a] rounded-xl w-full"
              onChange={(e) => setProjectName(e.target.value)}
            //   value={departmentName}
            />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="name">
              Project Team
            </Label>
            <Input
              id="name"
              defaultValue={project?.name}
              className="border border-[#dda83a] rounded-xl w-full"
              onChange={(e) => setProjectName(e.target.value)}
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
