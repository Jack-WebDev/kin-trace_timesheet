import { clientApi } from "@/client/react";
import { PageHeader } from "@/components";
import { Building, Search } from "lucide-react";
import React from "react";
import Link from "next/link";
import { serverApi } from "@/client/server";
import { DepartmentsType } from "@/schema/department";

export default async function Departments() {
  const departments: DepartmentsType[] =
    await serverApi.department.getDepartments();
  return (
    <div>
      {/* <PageHeader title="All Departments" /> */}
      {/* <span>All Departments Information</span> */}

      <div className="rounded-xl bg-white p-4">
        <div className="flex justify-between items-center">
        <div className="flex items-center border border-gray-400 px-4 w-[30%] mb-8 rounded-xl py-2">
          <Search />
          <input
            type="text"
            className="search-input border-none outline-none text-xl pl-4"
            placeholder="Search by name or department"
          />
        </div>
        <button>Add New Department</button>
        </div>
        <div className="grid grid-cols-2 gap-4">

        {departments?.map((department) => (
          <div
            key={department.id}
            className="rounded-xl border border-gray-400 p-4"
          >
            <div className="flex items-center justify-between border-b border-gray-400 px-4">
              <div className="grid">
                <span>{department.name} Department</span>
                <span>{department._count.User} Members</span>
              </div>
              <Link
                href={`/admin/departments/${department.id}`}
                className="text-[#dda83a]"
              >
                View All
              </Link>
            </div>
          </div>
        ))}
        </div>

      </div>
    </div>
  );
}
