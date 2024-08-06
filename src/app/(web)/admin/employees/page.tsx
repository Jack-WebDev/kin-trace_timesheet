import { PlusCircle, Search } from "lucide-react";
import { serverApi } from "@/client/server";
import { UserType } from "@/schema";
import { Button, DataTable } from "@/packages/ui";
import { userColumns } from "@/modules/user";

export default async function Departments() {
  const data: UserType[] = await serverApi.user.getUsers();
  return (
    <div>
      <div className="rounded-xl bg-white p-4">
        <div className="flex items-baseline justify-between">
          <div className="mb-8 flex w-[30%] items-center rounded-xl border border-gray-400 px-4 py-2">
            <Search />
            <input
              type="text"
              className="search-input border-none pl-4 text-xl outline-none"
              placeholder="Search by name or department"
            />
          </div>
          <Button className="flex items-center gap-x-2 bg-[#dda83a] text-white rounded-xl"><PlusCircle size={20} className="text-white" /> Add New Employee</Button>
        </div>
        <div className="grid grid-cols-2 gap-4"></div>
      </div>

      <DataTable data={data} columns={userColumns} searchColumn="name" search />
    </div>
  );
}
