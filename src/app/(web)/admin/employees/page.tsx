"use client";

import { PlusCircle, Search } from "lucide-react";
// import { UserType } from "@/schema";
import { Button, DataTable, Loader } from "@/packages/ui";
import { userColumns } from "@/modules/user";
import { clientApi } from "@/client/react";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";

export default function Departments() {
  const { data, isLoading, error } = clientApi.user.getUsers.useQuery();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const [filteredEmployees, setFilteredEmployees] = useState(data);
  const router = useRouter();

  useEffect(() => {
    const filtered = data?.filter((employee) =>
      employee.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
    setFilteredEmployees(filtered);
  }, [debouncedSearchQuery,data]);

  const employeeData = filteredEmployees ? filteredEmployees : [];

  if (error) {
    return <div>Error loading users</div>;
  }

  if (isLoading) {
    return <div><Loader/></div>;
  }
  return (
    <div>
      <div className="rounded-xl bg-white p-4">
        <div className="flex items-baseline justify-between">
          <div className="mb-8 flex w-[30%] items-center rounded-xl border border-gray-400 px-4 py-2">
            <Search />
            <input
              type="text"
              className="search-input border-none pl-4 text-xl outline-none"
              placeholder="Search by employee name or email...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button onClick={() => router.push("/admin/employees/add-employee")} className="flex items-center gap-x-2 rounded-xl bg-[#dda83a] text-white hover:bg-[#dda83a]/80">
            <PlusCircle size={20} className="text-white" /> Add New Employee
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4"></div>
      </div>

      <DataTable
        data={employeeData}
        columns={userColumns}
        searchColumn="name"
        search
      />
    </div>
  );
}
