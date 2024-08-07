"use client";

import { PlusCircle, Search } from "lucide-react";
import {
  Button,
  DataTable,
  Loader,
  ResponseMessage,
  toast,
} from "@/packages/ui";
import { clientApi } from "@/client/react";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { departmentColumns } from "@/modules/department/columns";
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

export default function Departments() {
  const { data, isLoading, error } =
    clientApi.department.getDepartments.useQuery();
  const departmentMutation = clientApi.department.createDepartment.useMutation({
    onSuccess: (data) => {
      setSuccessMessage(data.message);
      location.reload();
    },
    onError: (error) => {
      setErrorMessage(error.message);
      toast({
        variant: "error",
        title: "Error!",
        description: error.message || "Unknown error",
      });
    },
  });
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const [filteredDepartments, setfilteredDepartments] = useState(data);
  const [name, setName] = useState("");

  useEffect(() => {
    const filtered = data?.filter((employee) =>
      employee.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
    );
    setfilteredDepartments(filtered);
  }, [debouncedSearchQuery, data]);

  const departmentData = filteredDepartments ? filteredDepartments : [];

  const handleSubmit = async () => {
    departmentMutation.mutate({
      name: name,
    });
  };

  if (error) {
    return <div>Error loading users</div>;
  }

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <div className="rounded-xl bg-white p-8">
        <div className="flex items-baseline justify-between">
          <div className="mb-8 flex w-[30%] items-center rounded-xl border border-gray-400 px-4 py-2">
            <Search />
            <input
              type="text"
              className="search-input border-none pl-4 text-xl outline-none"
              placeholder="Search by department name...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-x-2 rounded-xl bg-[#dda83a] text-white hover:bg-[#dda83a]/80">
                <PlusCircle size={20} className="text-white" /> Add New
                Department
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[50%] rounded-xl border  p-4">
              <DialogHeader>
                <DialogTitle>Add New Department</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Label htmlFor="name">Department Name</Label>
                <Input
                  id="name"
                  className="w-full rounded-xl border border-[#dda83a]"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="rounded-xl bg-[#dda83a] text-white hover:bg-[#dda83a]/80"
                >
                  Add Department
                </Button>
              </DialogFooter>
              <ResponseMessage
                errorMessage={errorMessage}
                successMessage={successMessage}
              />
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-2 gap-4"></div>
      </div>

      <DataTable
        data={departmentData}
        columns={departmentColumns}
        searchColumn="name"
        search
      />
    </div>
  );
}
